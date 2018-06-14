var obj = {};
var validated_Fields;
$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
       // var department_Name = Cookies.get('step');
    } else {
        //No Storage so I store it in a cookie for now
        //var department_Name = Cookies.get('step');
    }

    validate_blur();
    validate_on_key_up();
    submit_form();
})

function validate_blur() {
    $(".blur_event").blur(function(){
        validation.call(this);
    })
}

var validation = function () {
    switch ($(this).attr("id")) {
        case "name":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_Name", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Name").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 25) {
                $("#display_Error_Name").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Name").append("Not enough characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Name").append("Name needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Name", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "department_Name":
            hide_errors("#display_Error_Department_Name", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_Department_Name").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Department_Name", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "phone":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_Phone", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Phone").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_Phone").append("Not enough numbers!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Phone").append("Too few of numbers!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Phone").append("Phone needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Phone", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "email":
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            hide_errors("#display_Error_Email", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Email").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_Email").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Email").append("Not enoungh characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Email").append("Email needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Email", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "type":
            hide_errors("#display_Error_Type", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_Type").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Type", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "amount":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_Amount", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Amount").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val() > 999) {
                $("#display_Error_Amount").append("Amount is too large!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 0) {
                $("#display_Error_Amount").append("Amount is too small!!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Step").append("Amount needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Amount", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "step":
            hide_errors("#display_Error_Step", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_Step").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Step", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "submission":
            hide_errors("#display_Error_Submission", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_Submission").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Step", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "status":
            hide_errors("#display_Error_Status", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_Status").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Status", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "address":
            var regex = /^[a-zA-Z0-9]+$/;
            hide_errors("#display_Error_Address", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Address").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_Address").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 6) {
                $("#display_Error_Address").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Address").append("Address needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Address", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
        case "city":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_City", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_City").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_City").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 6) {
                $("#display_Error_City").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_City").append("City needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_City", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "state":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_State", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_State").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_State").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 5) {
                $("#display_Error_State").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_State").append("State needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_State", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "zipcode":
            var regex = /^[0-9]+$/;
            hide_errors("#display_Error_Zipcode", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Zipcode").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 5) {
                $("#display_Error_Zipcode").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 5) {
                $("#display_Error_Zipcode").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_State").append("State needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Zipcode", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "program_Start":
            var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
            var date_In_Form_Mill = Date.parse($(this).val());
            var date_Current_Time = new Date();
            var date_Current_Time_Mill = date_Current_Time.getTime();

            hide_errors("#display_Error_Program_Start", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Program_Start").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (date_In_Form_Mill < date_Current_Time_Mill) {
                $("#display_Error_Program_Start").append("Must choose future date!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (((date_In_Form_Mill - date_Current_Time_Mill) - 604800000) < 0) {
                $("#display_Error_Program_Start").append("Can not submit within a week!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Program_Start").append("Date needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Program_Start", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "program_End":
            var date_Program_End = Date.parse($(this).val());
            var date_Program_Start = Date.parse($("#program_Start").val());
            var date_Current_Time = new Date();
            var date_Current_Time_Mill = date_Current_Time.getTime();

            var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
            hide_errors("#display_Error_Program_End", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Program_End").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (date_Program_End < date_Current_Time_Mill) {
                $("#display_Error_Program_End").append("Must choose future date!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (date_Program_End < date_Program_Start) {
                $("#display_Error_Program_End").append("End date before start!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Program_End").append("Date needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Program_End", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "location":
            var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
            hide_errors("#display_Error_Location", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Location").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_Location").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Location").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Location").append("Location needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Location", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "description":
            var regex = /[a-zA-Z]/;
            hide_errors("#display_Error_Description", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Description").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_Description").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Description").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Description").append("Description needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Description", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "justification":
            var regex = /[a-zA-Z]/;
            hide_errors("#display_Error_Justification", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Justification").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_Justification").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Justification").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Justification").append("Justification needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Justification", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "work_Missed":
            var regex = /^[0-9]+/;
            hide_errors("#display_Error_Work_Missed", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Work_Missed").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_Work_Missed").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Work_Missed").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Work_Missed").append("Work Missed needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Work_Missed", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "approved":
            var regex = /[a-zA-Z]/;
            hide_errors("#display_Error_Approved", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_Approved").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Approved", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        default:
    }
    return validated_Fields;
}

function validate_on_key_up() {
    $("#meetingForm input, #meetingForm select").each(function () {
        $(this).keyup(function () {
            validation.call(this);
        })
    })
}

function submit_form() {
    $("#saving_Changes").click(function () {
        validated_Fields = 0;

        $("[validation_Group='validator']").each(function () {
            validation.call(this);
        })

        if (validated_Fields == 20) {
            var obj = {};

            $(".submitable").each(function () {
                var id = $(this).attr("id");
                obj[id] = $(this).val();
            })

            if (department_Name == "Benefit Cordinator" || "Benefit Supervisor") {
                delete obj.approved;
                delete obj.amount;
            }

            var obj_stringify = JSON.stringify(obj);

            $.ajax({
                type: "POST",
                url: "",
                data: obj_stringify,
                dataType: "json",
                success: function (data, status, xhr) {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                        var obj_parsed = JSON.parse(data);
                        if (!(obj_parsed.Success)) {
                            switch (obj_parsed.Error) {
                                case "Filler Error":
                                    alerts("alert-warning", "");
                                    break;
                                default:
                                    alerts("alert-warning", "An Error has Occured! Please Try Again!");
                            }
                        } else {
                            alerts("alert-success", "Changes that have been submitted have been saved!");
                            $('#myModal').modal('toggle');
                        }
                    }
                },
                error: function (data) {
                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem("Error", data);
                    } else {
                        //For browsers that do not have webstorage
                        console.log(data);
                    }
                }
            })
        } else {
            alerts("alert-warning", "There was errors in submitting the edits, and in result no <b>edits</b> were made. Please try again!");
        }
    })
}

function hide_errors(id, input) {
    $(input).removeClass("is-invalid");
    $(id).empty();
}

function alerts(type, message) {
    $(".alert").empty();
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");
    $(".alert").show();
    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}