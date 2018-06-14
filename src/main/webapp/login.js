$(document).ready(function () {
	$(document).on("submit", "form", function (e) {
	       e.preventDefault();
	   });
	$("#Submit").click(function () {
        var input_Username = $("#inputUsername").val();
        var input_Password = $("#inputPassword").val();
        
        console.log(input_Username);
        console.log(input_Password);

        var username = input_Username.replace(/<(?:.|\n)*?>/gm, '');
        var password = input_Password.replace(/<(?:.|\n)*?>/gm, '');

        var obj = {"username": username, "password": password};
        	
        var jsonObj = JSON.stringify(obj);
        
        var xhttp = new XMLHttpRequest();
        
        xhttp.open("POST", "http://localhost:8080/TRMS/login", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("username="+username+"&"+"password="+password);
        var response;
        xhttp.onreadystatechange = function() {
        	if(this.readyState == 4 && this.status == 200) {
        		response = xhttp.getResponseHeader("validUser");
        		alert(response);
        	}
        }
        //window.location.href = "home";
        	/*$.ajax({
                type: "POST",
                url: "http://localhost:8080/Project1/login",
                data: jsonObj,
                dataType: "json",
                success: function() {
                	console.log("Success!");
                },
                error: function() {
                	console.log("Failure!");
                }
                //success: function (data, status, xhr) {
                    //if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && data) {
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
                    //}
                /*},
                error: function (data) {
                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem("Error", data);
                    } else {
                        //For browsers that do not have webstorage
                        console.log(data);
                    }
                }*/
        	
           // }); //end $.ajax function
    }); //end submit function
}); //end ready function

/*function alert(type, message) {
    $(".alert").addClass(type).append(message + "<button type='button'" +
            " class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>" +
            " &times;</span></button>");

    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert").slideUp(500);
    });
}*/