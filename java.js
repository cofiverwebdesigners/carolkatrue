function password_checker(){
	var pass=document.getElementById("my_passowrd").value;
	var userpass=document.getElementById("user_password")
	if (pass.length<5){
		document.getElementById("user_password").innerHTML="Your Password should be 5 characters long";
		userpass.className="red-text";
	}
	else{
		document.getElementById("user_password").innerHTML="Requirement met";
		userpass.className="green-text";
	}
}


function Firstname_checker(){
	var pass=document.getElementById("first_name").value;
	var userpass=document.getElementById("user_first")
	if (/\d/.test(pass)){
		document.getElementById("user_first").innerHTML="should not contain any digit";
		userpass.className="red-text";
	}
	else{
		document.getElementById("user_first").innerHTML="valid";
		userpass.className="green-text";
	}
	
		if (pass.length<5){
		document.getElementById("user_first").innerHTML="too short";
		userpass.className="red-text";
	}
	else{
		document.getElementById("user_first").innerHTML="valid";
		userpass.className="green-text";
	}
}


function secondname_checker(){
	var pass=document.getElementById("second_name").value;
	var userpass=document.getElementById("second_field")
	if (/\d/.test(pass)){
		document.getElementById("second_field").innerHTML="should not contain any digit";
		userpass.className="red-text";
	}
	else{
		document.getElementById("second_field").innerHTML="valid";
		userpass.className="green-text";
	}
	
	
	if (pass.length<5){
		document.getElementById("second_field").innerHTML="too short";
		userpass.className="red-text";
	}
	else{
		document.getElementById("second_field").innerHTML="valid";
		userpass.className="green-text";
	}
}



function username_checker(){
	var first_name=document.getElementById("first_name").value;
	var second_namee=document.getElementById("second_name").value;
	var client_username=document.getElementById("user_name").value;
	var se=document.getElementById("wetu");
	var user_wetu=first_name+second_namee;
	if (client_username!=user_wetu){
		document.getElementById("wetu").innerHTML="your username should be" +" " +user_wetu;
		se.className="red-text";
	}
	else{
		document.getElementById("wetu").innerHTML="valid";
		se.className="green-text";
	}
	
}

function apply(){
    var first_name = document.getElementById("first_name").value;
    var second_name = document.getElementById("second_name").value;
    var email_address = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_number").value;
    var id_number = document.getElementById("ID number").value;
	var user_wetu=first_name+ " "+second_name;
    alert("congratulations!!"+ " "+ user_wetu+" " +"Your Bursary Application was successfull")
	document.getElementById("my_para").innerHTML=first_name
}
