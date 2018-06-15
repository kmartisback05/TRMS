$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        var first_Name = localStorage.getItem("first_Name");
        var last_Name = localStorage.getItem("last_Name");
        var amount = localStorage.getItem("amount");
    } else {
        //No Storage so I store it in a cookie for now
        var first_Name = Cookies.get('first_Name');
        var last_Name = Cookies.get('last_Name');
        var amount = Cookies.get('amount');
    }

    //This sets the navbar on load
    $("#Username").text(first_Name + " " + last_Name + ", you have $" + amount + " left in till 01/01/2019");
});