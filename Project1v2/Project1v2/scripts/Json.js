var obj = {
    "Start Date": $("#program_Start").val(),
    "End Date": $("#program_End").val(),
    "Location": $("#exampleInputLocation").val(),
    "Justification": $("#exampleInputJustification").val(),
    "Cost": $("#exampleInputCost").val(),
    "Description": $("#exampleInputDescription").val(),
    "MissedWork": $("#exampleInputMissedWork").val(),
    "Event": $("#exampleInputEvent").val()
};

var myJSON = JSON.stringify(obj);

var validation = function () {
    switch ($(this).attr("id")) {
        case "program_Start":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_program_Start", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_program_Start").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 25) {
                $("#display_Error_program_Start").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_program_Start").append("Not enough characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_program_Start").append("Name needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_program_Start", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "program_End":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_program_End", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_program_End").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_program_End").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_program_End").append("Not enough characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_Department_program_End").append("A-Z Only!");
                //$("#" + $(this).attr("id")).addClass("Department needs correct format!");
            } else {
                hide_errors("#display_Error_program_End", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "exampleInputLocation":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_exampleInputLocation", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_exampleInputLocation").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_exampleInputLocation").append("Not enough numbers!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_exampleInputLocation").append("Too few of numbers!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_exampleInputLocation").append("Phone needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_exampleInputLocation", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "exampleInputJustification":
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            hide_errors("#display_Error_exampleInputJustification", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_exampleInputJustification").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 60) {
                $("#display_Error_exampleInputJustification").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_exampleInputJustification").append("Not enoungh characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_exampleInputJustification").append("Email needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_exampleInputJustification", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "exampleInputCost":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_exampleInputCost", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_exampleInputCost").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_exampleInputCost").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 5) {
                $("#display_Error_exampleInputCost").append("Not enoungh characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_exampleInputCost").append("Type needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_exampleInputCost", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "exampleInputDescription":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_exampleInputDescription", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_exampleInputDescription").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val() > 999) {
                $("#display_Error_exampleInputDescription").append("Description is too large!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 0) {
                $("#display_Error_exampleInputDescription").append("Amount is too small!!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_exampleInputDescription").append("Amount needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_exampleInputDescription", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "exampleInputMissedWork":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_exampleInputMissedWork", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_exampleInputMissedWork").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 30) {
                $("#display_Error_exampleInputMissedWork").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 15) {
                $("#display_Error_exampleInputMissedWork").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_exampleInputMissedWork").append("Step needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_exampleInputMissedWork", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "exampleInputEvent":
            var regex = /^[a-zA-Z]+$/;
            hide_errors("#display_Error_exampleInputEvent", $("#" + $(this).attr("id")));
            if (($(this).val() || '').length == 0) {
                $("#display_Error_exampleInputEvent").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 3) {
                $("#display_Error_exampleInputEvent").append("Has too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_exampleInputEvent").append("Has too few of characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if (false) {
                //$("#display_Error_exampleInputEvent").append("Submission needs correct format!");
                //$("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_exampleInputEvent", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
    }

    $("#meetingForm input, #meetingForm select").each(function () {
        $(this).keyup(function () {
            validation.call(this);
        })

    })


    $("#saving_Changes").click(function () {
        validated_Fields = 0;
        var counter = 0;
        $("[validation_Group='validator']").each(function () {
            validation.call(this);
        })

        if (validated_Fields == 8) {
            var obj = {};

            $(".submitable").each(function () {
                var id = $(this).attr("id");
                obj[id] = $(this).val();
            })
            var myJSON = JSON.stringify(obj);
        } else {
            // not valid
        }




        $.ajax({
            type: "POST",
            url: "http://localhost:52099/html/Apply_Reimbursment.html",
            data: myJSON,
            dataType: "json",
            success: function (datayougetback, status, xhr) {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {

                }
            },
            error: function (data) {

            }
        })
    })
}