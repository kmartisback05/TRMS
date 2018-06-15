$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        //Put it in a session storage
        var emp_Id = localStorage.getItem("emp_Id");
    } else {
        //No Storage so I store it in a cookie for now
        var emp_Id = Cookies.get('emp_Id');
    }

    //TEMPORARY DELETE DURING PRODUCTION
    apply_mouse_over("th");
    apply_mouse_over("#login_Page");
    apply_modal_on_click();
    apply_validator_class();
    //TEMPORARY DELETE DURING PRODUCTION

    var obj = {};

    obj["emp_Id"] = emp_Id;

    var obj_stringify =JSON.stringify(obj);
    $.ajax({
        type: "GET",
        url: "",
        data: obj_stringify,
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
                        create_reimbursements_assigned(obj_parsed)
                        apply_mouse_over("th");
                        apply_mouse_over("#login_Page");
                        apply_modal_on_click(obj_parsed);
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

function create_reimbursements_assigned(obj_parsed) {
    for (var i = 0; i < obj_parsed.length - 1; i++) {
        $("#fbody").append("<tr data-toggle='modal' data-id=" + obj_parsed.reimbursment_Number + " data-target='#orderModal'>" +
            "<th scope='row'>" + obj_parsed.reimbursment + "</th>" +
            "<td>" + obj_parsed.first_name + " " + obj_parsed.last_name + "</td>" +
            "<td>" + obj_parsed.department_Name + "</td>" +
            "<td>" + obj_parsed.phone + "</td>" +
            "<td>" + obj_parsed.email + "</td>" +
            "<td>" + obj_parsed.type + "</td>" +
            "<td>" + obj_parsed.amount + "</td>" +
            "<td>" + obj_parsed.step + "</td>" +
            "<td>" + obj_parsed.submission + "</td>" +
            "<td>" + obj_parsed.status + "</td>" +
            "</tr>");
    }

function apply_validator_class() {
    $("#meetingForm input, #meetingForm select").each(function () {
        $(this).attr("validation_Group", "validator");
    })
}

function apply_modal_on_click(obj_parsed) {
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

        //To grab the other info by using the rem-id
        var obj = {};

        obj["reimbursment_Number"] = obj_parsed.reimbursment_Number;

        var obj_Stringify = JSON.stringify(obj);
        $.ajax({
            type: "GET",
            url: "",
            data: obj_Stringify,
            dataType: "json",
            success: function (data, status, xhr) {
                var obj_parsed_Second = JSON.parse(data);
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                    if (!(obj_parsed_Second.Success)) {
                        switch (obj_parsed_Second.Error) {
                            default:
                                alerts("alert-warning", "An Error has Occured!");
                        }
                    } else {
                        if ($.isEmptyObject(obj_parsed_Second)) {
                            alert_warning("alert-warning", "There are no reimbursments that you can view at this time. If this is an issue please call!");
                        } else {
                            
                            $("#address").val(obj_parsed_Second.address);
                            $("#city").val(obj_parsed_Second.city);
                            $("#state").val(obj_parsed_Second.state);
                            $("#zipcode").val(obj_parsed_Second.zipcode);

                            $("#location").val(obj_parsed_Second.location);
                            $("#description").val(obj_parsed_Second.description);
                            $("#approved").val(obj_parsed_Second.approved);

                            $("#justification").val(obj_parsed_Second.justification);
                            $("#program_Start_Date").val(obj.program_Start_Date);
                            $("#program_End_State").val(obj_parsed_Second.program_End_Date);

                            $("#reimbursment_Number").hide();
                            $(".top_title").empty();
                            $(".top_title").append("Editing " + obj_parsed.first_name + " " + obj_parsed.last_name + " reimbursment")
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
        });
    }
)}


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
