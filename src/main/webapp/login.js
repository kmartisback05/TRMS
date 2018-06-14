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
        		response = xhttp.getResponseHeader("employee_id");
        		alert(response);
        	}
        }
           // }); //end $.ajax function
    }); //end submit function
}); //end ready function