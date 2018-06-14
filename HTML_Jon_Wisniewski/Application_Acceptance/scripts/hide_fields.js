$(document).ready(function () {
    $('table tbody tr td').on('click', function () {
        if (typeof (Storage) !== "undefined") {
            var department_Name = localStorage.getItem("step");
        } else {
            //No Storage so I store it in a cookie for now
            var department_Name = Cookies.get('step');
        }
        switch (department_Name) {
            case "Emp. Department Head":
            case "Emp. Supervisor":
                similar_hide_values();
                break;
            case "Benefit Cordinator":
            case "Benefit Supervisor":
                similar_hide_values("Benco");
                break;
            default:
        }
    })
});

function similar_hide_values(person) {
    var fields = ["name", "step", "submission", "status", "location", "description", "justification", "program_Start", "program_End"];

    if (person === "Benco")
        fields.push("approved");
        fields.push("amount");

    $.each(fields, function () {
        $(this).removeAttr("disabled");
    });
};