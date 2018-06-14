﻿$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        //Put it in a session storage
        var emp_id = localStorage.getItem("emp_Id");
    } else {
        //No Storage so I store it in a cookie for now
        var emp_id = Cookies.get('emp_Id');
    }

    //These are temporary 
    apply_mouse_over("th");
    apply_mouse_over("#login_Page");
    apply_modal_on_click();
    apply_validator_class();

    $.ajax({
        type: "GET",
        url: "",
        data: emp_id,
        dataType: "json",
        success: function (data, status, xhr) {
            var obj_parsed = JSON.parse(data);
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                if (!(obj_parsed.Success)) {
                    switch (obj_parsed.Error) {
                        default:
                            alerts("alert-warning", "An Error has Occured!");
                    }
                } else {
                    if ($.isEmptyObject(data)) {
                        alert_warning("alert-warning", "There are no reimbursments that you can view at this time. If this is an issue please call!");
                    } else {
                        create_reimbursements_assigned(),
                        apply_modal_on_click();
                        apply_mouse_over("th");
                        apply_mouse_over("#login_Page");
                        apply_validator_class()
                    }
                }
            }
        },
        error: function (data) {
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("Error", data);
            } else {
                //For browsers that do not have webstorage
                console.log(data)
            }
        }
    })
});

function create_reimbursements_assigned() {
    for (var i = 0; i < obj.length - 1; i++) {
        $("#fbody").append("<tr data-toggle='modal' data-id=" + obj.reimbursment + " data-target='#orderModal'>" +
            "<th scope='row'>" + obj.reimbursment + "</th>" +
            "<td>" + obj.first_name + " " + obj.last_name + "</td>" +
            "<td>" + obj.department_Name + "</td>" +
            "<td>" + obj.phone + "</td>" +
            "<td>" + obj.email + "</td>" +
            "<td>" + obj.type + "</td>" +
            "<td>" + obj.amount + "</td>" +
            "<td>" + obj.step + "</td>" +
            "<td>" + obj.submission + "</td>" +
            "<td>" + obj.status + "</td>" +
            "</tr>");
    }
}

function apply_validator_class() {
    $("#meetingForm input, #meetingForm select").each(function () {
        $(this).attr("validation_Group", "validator");
    })
}

function apply_modal_on_click() {
    $('table tbody tr td').on('click', function () {
        $("#myModal").modal("show");

        $("#reimbursment_Number").val($(this).closest('tr').children()[0].textContent);
        $("#name").val($(this).closest('tr').children()[1].textContent);
        $("#department_Name").val($(this).closest('tr').children()[2].textContent);
        $("#phone").val($(this).closest('tr').children()[3].textContent);

        $("#email").val($(this).closest('tr').children()[4].textContent);
        $("#type").val($(this).closest('tr').children()[5].textContent);
        $("#amount").val($(this).closest('tr').children()[6].textContent);

        $("#step").val($(this).closest('tr').children()[7].textContent);
        $("#submission").val($(this).closest('tr').children()[8].textContent);
        $("#status").val($(this).closest('tr').children()[9].textContent);

        $("#address").val(obj.address);
        $("#city").val(obj.city);
        $("#state").val(obj.state);
        $("#zipcode").val(obj.zipcode);

        $("#location").val(obj.location);
        $("#description").val(obj.description);
        $("#approved").val(obj.approved);

        $("#justification").val(obj.location);
        $("#program_Start").val(obj.description);
        $("#program_End").val(obj.approved);

        $("#reimbursment_Number").hide();

        var submission = ($("#submission").val($(this).closest('tr').children()[8].textContent)).attr("id");
        if ($("#" + submission).val() == "No") {
            $("#add_Information").show();
        } else {
            $("#add_Information").hide();
        }

        $(".top_title").empty();
        $(".top_title").append("Editing " + obj.first_name + " " + obj.last_name + " reimbursment")
    });
}

function apply_mouse_over(element) {
    $(element).mouseover(function () {
        $(this).css('cursor', 'pointer');
    })
}

function alert(type, message) {
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}
