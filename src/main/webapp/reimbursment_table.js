$(document).ready(function () {
    var validators = ["name", "step", "submission", "status", "location", "description", "justification", "program_Start", "program_End", "approved"];

    if (typeof (Storage) !== "undefined") {
        //Put it in a session storage
        var emp_id = localStorage.getItem("emp_Id");
    } else {
        //No Storage so I store it in a cookie for now
        var emp_id = Cookies.get('emp_Id');
    }
    
    //This is temp
    console.log("W");
    $('table tbody tr td').on('click', function () {
        $("#myModal").modal("show");

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

        $(".modal-title").append("Editing " + obj.first_name + " " + obj.last_name + " reimbursment")
    });

    $.each(validators, function () {
        $("#" + this).attr("validation_Group", "validator");
    });

    $.ajax({
        type: "GET",
        url: "",
        data: emp_id,
        dataType: "json",
        success: function (data, status, xhr) {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                if ($.isEmptyObject(data)) {
                    var obj = JSON.parse(data);
                    alert_warning("alert-warning", "There are no reimbursments that you can view at this time. If this is an issue please call!");
                } else {
                    for (var i = 0; i < obj.length - 1; i++) {
                        $("#fbody").append("<tr data-toggle='modal' data-id=" + obj.reimbursment +" data-target='#orderModal'>" +
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
            }

            $.each(validators, function () {
                $("#" + this).attr("validation_Group", "validator");
                console.log($("#" + this));
            });

            $('table tbody tr td').on('click', function () {
                $("#myModal").modal("show");

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

                $(".modal-title").append("Editing " + obj.first_name + " " + obj.last_name + " reimbursment")
            });
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

function alert(type, message) {
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}
