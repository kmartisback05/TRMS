$(document).ready(function () {
    $("#Submit").click(function () {
        var input_Username = $("#inputUsername").val();
        var input_Password = $("#inputPassword").val();

        var username = input_Username.replace(/<(?:.|\n)*?>/gm, '');
        var password = input_Password.replace(/<(?:.|\n)*?>/gm, '');

        if (password === "" || username === "") {
            alerts("alert-warning", "Enter Username and Password!");
        } else {
            var obj = {
                "username": username,
                "password": password
            };

            var obj_Stringify = JSON.stringify(obj)
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/Project1/login",
                data: obj_Stringify,
                dataType: "json",
                success: function (data, status, xhr) {
                    var obj_parsed = JSON.parse(data);
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                        if (!(obj_parsed.Success)) {
                            switch (obj_parsed.Error) {
                                case "Wrong Password or Username":
                                    alerts("alert-warning", "Username or Password Wrong!");
                                    break;
                                default:
                                    alerts("alert-warning", "An Error has Occured!");
                            }
                        } 
                        setTimeout(function () {
                                if (typeof (Storage) !== "undefined") {
                                    //Put it in a session storage
                                    localStorage.setItem("emp_Id", obj_parsed.emp_Id);
                                    localStorage.setItem("first_Name", obj_parsed.first_Name);
                                    localStorage.setItem("last_Name", obj_parsed.last_Name);
                                    localStorage.setItem("department_Name", obj_parsed.department_Name);
                                    localStorage.setItem("amount", obj_parsed.amount);
                                } else {
                                    //No Storage so I store it in a cookie for now
                                    Cookies.set('emp_Id', obj_parsed.emp_Id, { expires: 1 });
                                    Cookies.set('first_Name', obj_parsed.first_Name, { expires: 1 });
                                    Cookies.set('last_Name', obj_parsed.last_Name, { expires: 1 });
                                    Cookies.set('department_Name', obj_parsed.department_Name, { expires: 1 });
                                    Cookies.set('amount', obj_parsed.amount, { expires: 1 });
                                }
                                window.location.href = "../HTML/Home.html";
                            }, 2000);
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
        }
    });
});

function alerts(type, message) {
    $(".alert").empty();
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}