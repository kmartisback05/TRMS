var obj = {};
$(document).ready(function () {
    $("#saving_Changes").click(function () {
        if (typeof (Storage) !== "undefined") {
            var department_name = localStorage.getItem("step");
        } else {
            //No Storage so I store it in a cookie for now
            var department_name = Cookies.get('step');
        }
        saving_form();
    })

    $("input").each(function () {
        $(this).keyup(function () {
            var $this = $(this);
            switch ($this.attr("id")) {
                case "name":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Name", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Name").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 25) {
                        $("#display_Error_Name").append("Too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Name").append("Not enough characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Name").append("Name needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Name", $("#" + $this.attr("id")));
                    }
                    break;
                case "department_Name":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Department_Name", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Department_Name").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Department_Name").append("Too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 15) {
                        $("#display_Error_Department_Name").append("Not enough characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Department_Name").append("A-Z Only!");
                        //$("#" + $this.attr("id")).addClass("Department needs correct format!");
                    } else {
                        console.log("ide")
                        hide_errors("#display_Error_Department_Name", $("#" + $this.attr("id")));
                    }
                    break;
                case "phone":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Phone", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Phone").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 60) {
                        $("#display_Error_Phone").append("Not enough numbers!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Phone").append("Too few of numbers!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Phone").append("Phone needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Phone", $("#" + $this.attr("id")));
                    }
                    break;
                case "email":
                    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    hide_errors("#display_Error_Email", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Email").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 60) {
                        $("#display_Error_Email").append("Too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Email").append("Not enoungh characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Email").append("Email needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Email", $("#" + $this.attr("id")));
                    }
                    break;
                case "type":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Type", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Type").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Type").append("Too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 5) {
                        $("#display_Error_Type").append("Not enoungh characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Type").append("Type needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Type", $("#" + $this.attr("id")));
                    }
                    break;
                case "amount":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Amount", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Amount").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val() > 999) {
                        $("#display_Error_Amount").append("Amount is too large!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 0) {
                        $("#display_Error_Amount").append("Amount is too small!!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Step").append("Amount needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Amount", $("#" + $this.attr("id")));
                    }
                    break;
                case "step":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Step", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Step").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Step").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 15) {
                        $("#display_Error_Step").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Step").append("Step needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Step", $("#" + $this.attr("id")));
                    }
                    break;
                case "submission":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Submission", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Submission").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 3) {
                        $("#display_Error_Submission").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Submission").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Submission").append("Submission needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Step", $("#" + $this.attr("id")));
                    }
                    break;
                case "status":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_Status", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Status").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Status").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 6) {
                        $("#display_Error_Status").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Status").append("Status needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Status", $("#" + $this.attr("id")));
                    }
                    break;
                case "address":
                    var regex = /^[a-zA-Z0-9]+$/;
                    hide_errors("#display_Error_Address", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Address").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 60) {
                        $("#display_Error_Address").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 6) {
                        $("#display_Error_Address").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Address").append("Address needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Address", $("#" + $this.attr("id")));
                    }
                case "city":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_City", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_City").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 60) {
                        $("#display_Error_City").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 6) {
                        $("#display_Error_City").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_City").append("City needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_City", $("#" + $this.attr("id")));
                    }
                    break;
                case "state":
                    var regex = /^[a-zA-Z]+$/;
                    hide_errors("#display_Error_State", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_State").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 60) {
                        $("#display_Error_State").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 5) {
                        $("#display_Error_State").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_State").append("State needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_State", $("#" + $this.attr("id")));
                    }
                    break;
                case "zipcode":
                    var regex = /^[0-9]+$/;
                    hide_errors("#display_Error_Zipcode", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Zipcode").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 5) {
                        $("#display_Error_Zipcode").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 5) {
                        $("#display_Error_Zipcode").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_State").append("State needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Zipcode", $("#" + $this.attr("id")));
                    }
                    break;
                case "program_Start":
                    var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
                    hide_errors("#display_Error_Program_Start", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Program_Start").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 5) {
                        $("#display_Error_Program_Start").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 5) {
                        $("#display_Error_Program_Start").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Program_Start").append("Date needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Program_Start", $("#" + $this.attr("id")));
                    }
                    break;
                case "program_End":
                    var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
                    hide_errors("#display_Error_Program_End", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Program_End").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 23) {
                        $("#display_Error_Program_End").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 22) {
                        $("#display_Error_Program_End").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Program_End").append("Date needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Program_End", $("#" + $this.attr("id")));
                    }
                    break;
                case "location":
                    var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
                    hide_errors("#display_Error_Location", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Location").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Location").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Location").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Location").append("Location needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Location", $("#" + $this.attr("id")));
                    }
                    break;
                case "description":
                    var regex = /[a-zA-Z]/;
                    hide_errors("#display_Error_Description", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Description").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Description").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Description").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Description").append("Description needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Description", $("#" + $this.attr("id")));
                    }
                    break;
                case "justification":
                    var regex = /[a-zA-Z]/;
                    hide_errors("#display_Error_Justification", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Justification").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Justification").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Justification").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Justification").append("Justification needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Justification", $("#" + $this.attr("id")));
                    }
                    break;
                case "work_Missed":
                    var regex = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4} [0-1][0-9]:[0-5][0-9]:[0-5][0-9] [paPA][Mm]/;
                    hide_errors("#display_Error_Work_Missed", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Work_Missed").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Work_Missed").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Work_Missed").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Work_Missed").append("Work Missed needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Work_Missed", $("#" + $this.attr("id")));
                    }
                    break;
                case "approved":
                    var regex = /[a-zA-Z]/;
                    hide_errors("#display_Error_Approved", $("#" + $this.attr("id")));
                    if ($this.val().length == 0) {
                        $("#display_Error_Approved").append("Can not be empty!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length > 30) {
                        $("#display_Error_Approved").append("Has too many characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if ($this.val().length < 2) {
                        $("#display_Error_Approved").append("Has too few of characters!");
                        $("#" + $this.attr("id")).addClass("is-invalid");
                    } else if (regex.test($this.val())) {
                        //$("#display_Error_Approved").append("Approved needs correct format!");
                        //$("#" + $this.attr("id")).addClass("is-invalid");
                    } else {
                        hide_errors("#display_Error_Approved", $("#" + $this.attr("id")));
                    }
                    break;
                default:
            }
        })

    })
});
function hide_errors(id, input) {
    $(input).removeClass("is-invalid");
    $(id).empty();
}

function saving_form() {
    $("[validation_Group='validator']").each(function () {
        var $this = $(this);
        switch ($this.attr("id")) {
            case "name":
                if ($this.val().length == 0) {
                    $("#display_Error").append("Can not be empty!");
                };
                break;
            default:
        }
    })
};
