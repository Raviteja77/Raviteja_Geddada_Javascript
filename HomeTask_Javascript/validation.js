function emptyFunction()
	{
		document.getElementById("error").innerHTML = "";
		document.getElementById("error1").innerHTML = "";
		document.getElementById("error2").innerHTML = "";
		document.getElementById("error3").innerHTML = "";
		document.getElementById("error4").innerHTML = "";
	}
function validate()
	{
		var name = document.forms["RegForm"]["name"];
		var email = document.forms["RegForm"]["email"];
		var pass = document.forms["RegForm"]["pass"];
		var pass1 = document.forms["RegForm"]["pass1"];
		var phone = document.forms["RegForm"]["phone"];
		if(!isNaN(name.value))
		{
			document.getElementById("error").innerHTML = "only characters allowed!";
			return false;
		}
		else if(name.value.length < 2 || name.value.length > 20)
		{
			document.getElementById("error").innerHTML = "name must be in the range of 2 to 20 characters";
			return false;
		}
		if(email.value.indexOf(".") + 3 > email.value.length || email.value.indexOf(".") + 6 > email.value.length)
		{
			document.getElementById("error1").innerHTML = "provide a valid domain name";
			return false;
		}
		if(!pass.value.match(/^[a-zA-Z\d]\w{7,14}/g) || pass.value.length < 8)
		{
			document.getElementById("error2").innerHTML = "password did not meet the criteria";
			return false;
		}
		if(pass1.value != pass.value)
		{
			document.getElementById("error3").innerHTML = "password mismatch";
			return false;
		}
		if(phone.value.length < 10)
		{
			document.getElementById("error4").innerHTML = "mobile number must be 10 digits";
			return false;
		}
		if(isNaN(phone.value))
		{
			document.getElementById("error4").innerHTML = "mobile number must be in digits";
			return false;
		}
	}