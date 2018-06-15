var validated_Fields;
$(document).ready(function () {
    go_back();
    file_change();
    submit_validation();
    keyup_validation();
});

function go_back() {
    $("#close").click(function () {
        $('#myModal').modal('show');
    })
}

var validation = function () {
    switch ($(this).attr("id")) {
        case "additional_text":
            hide_errors("#display_Error_Additional", $("#" + $(this).attr("id")));
            if ($(this).val().length == 0) {
                $("#display_Error_Additional").append("Can not be empty!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length > 250) {
                $("#display_Error_Additional").append("Too many characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else if ($(this).val().length < 2) {
                $("#display_Error_Additional").append("Not enough characters!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_Additional", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
        case "file_upload":
            var file_Name = $(this).val();
            var accepted_File_Types = ["pdf", "png", "jpeg", "txt", "doc", "msg"]
            hide_errors("#display_Error_File", $("#" + $(this).attr("id")));
            if ($("#file_upload").val() != "" && ($.inArray(file_Name.split('.').pop().toLowerCase(), accepted_File_Types) == -1)) {
                $(this).next('.custom-file-label').html("Choose file...");
                $("#display_Error_File").append("Only accept pdf, png, jpeg, txt, doc, and msg file types!");
                $("#" + $(this).attr("id")).addClass("is-invalid");
            } else {
                hide_errors("#display_Error_File", $("#" + $(this).attr("id")));
                validated_Fields++;
            }
            break;
    }
}

function file_change() {
    $("#file_Upload").change(function () {
        var file_Name = $(this).val();
        var accepted_File_Types = ["pdf", "png", "jpeg", "txt", "doc", "msg"]
        if ($.inArray(file_Name.split('.').pop().toLowerCase(), accepted_File_Types) == -1) {
            $(this).next('.custom-file-label').html("Choose file...");
            alert("alert-warning", "Only accept pdf, png, jpeg, txt, doc, and msg file types!");

            $("#display_Error_File").append("Only accept pdf, png, jpeg, txt, doc, and msg file types!");
            $("#" + $(this).attr("id")).addClass("is-invalid");
        } else {
            $(this).next('.custom-file-label').html(file_Name);
            $("#display_Error_File").empty();
            $("#" + $(this).attr("id")).removeClass("is-invalid");
        }
    })
}

function submit_validation() {
    $("#submit_Submission").click(function () {
        validated_Fields = 0;
        $(".grade_Presentation").each(function () {
            validation.call(this);
        })

        if (validated_Fields == 2) {
            var obj = {};

            $(".submitable").each(function () {
                var id = $(this).attr("id");
                obj[id] = $(this).val();
            })

            if ($("#file_upload".val()) == "") {
                delete myObject.file;
            }

            var obj_Stringify = JSON.stringify;

            $.ajax({
                type: "POST",
                url: "",
                data: obj_Stringify,
                dataType: "json",
                success: function (data, status, xhr) {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                        var obj_parsed = JSON.parse(data);
                        if (!(obj_parsed.Success)) {
                            switch (obj_parsed.Error) {
                                case "Unkown Error":
                                    alerts("alert-warning", "Unkown Error");
                                    break;
                                default:
                                    alerts("alert-warning", "An Error has Occured! Please Try Again!");
                            }
                        } else {
                            alerts("alert-success", "File has been submitted!");
                            $('.submit_grades').modal('toggle');
                            $('#myModal').modal('show');
                            $("#submission").val("Yes");
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
            alert("alert-warning", "Required fields were not filled out, please try again!");
        }
    })
}

function keyup_validation() {
    $("#submission_Information input, #submission_Information textarea").each(function () {
        $(this).keyup(function () {
            validation.call(this);
        })
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

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}