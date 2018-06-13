$(document).ready(function () {
    $("#Submit").click(function () {
        var input_Username = $("#inputUsername").val();
        var input_Password = $("#inputPassword").val();

        var username = input_Username.replace(/<(?:.|\n)*?>/gm, '');
        var password = input_Password.replace(/<(?:.|\n)*?>/gm, '');

        $(".alert").empty();

        if (password === "" || username === "") {
            alert("alert-warning","Enter Username and Password");
        } else {
            var username_Password = [username, password];
            $.ajax({
                type: "GET",
                url: "",
                data: username_Password,
                dataType: "json",
                success: function (data,status, xhr) {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                        if (data === "Wrong Password or Username") {
                            alert_warning("alert-warning","Username or Password Wrong!");
                        } else {
                            alert("alert-success", "Username and Password Correct!");
                            setTimeout(function () {
                                var obj = JSON.parse(data);
                                var username_parsed = obj.getString("username");
                                if (typeof (Storage) !== "undefined") {
                                    //Put it in a session storage
                                    localStorage.setItem("emp_Id", obj.emp_id);
                                    localStorage.setItem("first_Name", obj.first_name);
                                    localStorage.setItem("last_Name", obj.last_name);
                                    localStorage.setItem("department_Name", obj.department_name);
                                    localStorage.setItem("amount", obj.amount);
                                } else {
                                    //No Storage so I store it in a cookie for now
                                    Cookies.set('emp_Id', obj.emp_id, { expires: 1 });
                                    Cookies.set('first_Name', obj.first_name, { expires: 1 });
                                    Cookies.set('last_Name', obj.last_name, { expires: 1 });
                                    Cookies.set('department_Name', obj.department_name, { expires: 1 });
                                    Cookies.set('amount', obj.amount, { expires: 1 });
                                }
                                window.location.href = "../HTML/Home.html";
                            }, 2000);
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
        }
    });
});

function alert(type, message) {
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}