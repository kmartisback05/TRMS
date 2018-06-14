$(document).ready(function () {
    $("#Submit").click(function () {
        var input_Username = $("#inputUsername").val();
        var input_Password = $("#inputPassword").val();
        //alert(input_Username);
        //alert(input_Password);
        console.log(input_Username);
        console.log(input_Password);

        var username = input_Username.replace(/<(?:.|\n)*?>/gm, '');
        var password = input_Password.replace(/<(?:.|\n)*?>/gm, '');

        

        if ((password === "" || username === "")) {
            alert("alert-warning",input_Username);
        } else {
        	var object_Before = {
        			"username": username,
        			"password": password
        	}
        	
            var object_After = JSON.stringify(object_Before);
        	$.ajax({
                type: "POST",
                url: "http://localhost:8080/Project1/login",
                data: object_After,
                dataType: "json",
                success: function (data, status, xhr) {
                	//alert(xhr.readyState);
                	//alert(xhr.status);
                	console.log(data);
                	console.log(status);
                	console.log(xhr);
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
                       /* if (data === "Wrong Password or Username") {
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
                                //window.location.href = "../HTML/Home.html";
                            }, 2000);
                        }*/
                    }
                }/*,
                error: function (data) {
                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem("Error", data);
                    } else {
                        //For browsers that do not have webstorage
                        console.log(data);
                    }
                }*/
            })
        }
    }); //end submit function
}); //end ready function

function alert(type, message) {
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}