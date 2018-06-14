$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        var first_name = localStorage.getItem("first_name");
        var last_name = localStorage.getItem("last_name");
        var amount = localStorage.getItem("amount");
    } else {
        //No Storage so I store it in a cookie for now
        var emp_id = Cookies.get('emp_id');
        var first_name = Cookies.get('first_name');
        var last_name = Cookies.get('last_name');
        var department_name = Cookies.get('department_name');
        var amount = Cookies.get('amount');
    }

    //This sets the navbar on load
    $("#Username").text(first_name + " " + last_name + ", you have $" + amount + " left in till 01/01/2019");
});