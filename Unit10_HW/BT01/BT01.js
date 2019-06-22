function getInfo() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var pass = document.getElementById("pass").value;
	var checkpass = document.getElementById("checkpass").value;

	if (name == "") {
		document.getElementById("err-name").innerHTML = "<i>Yêu cầu nhập đầy đủ họ tên</i>"
	}
	else{
		document.getElementById("err-name").innerHTML = ""	
	}

	if (email == "") {
		document.getElementById("err-mail").innerHTML = "<i>Yêu cầu nhập email</i>"
	}
	else{
		document.getElementById("err-mail").innerHTML = ""	
	}

	if (phone == "") {
		document.getElementById("err-phone").innerHTML = "<i>Yêu cầu nhập số điện thoại</i>"
	}
	else{
		document.getElementById("err-phone").innerHTML = ""	
	}

	if (pass == "") {
		document.getElementById("err-pass").innerHTML = "<i>Yêu cầu nhập mật khẩu</i>"
	}
	else{
		document.getElementById("err-pass").innerHTML = ""	
	}

	if (checkpass == "") {
		document.getElementById("err-checkpass").innerHTML = "<i>Yêu cầu xác nhận mật khẩu</i>"
	}
	else{
		document.getElementById("err-checkpass").innerHTML = ""	
	}
	if (name && email && phone && pass && checkpass) {
		alert('Đăng ký thành công');
		reset();
	}
}

function reset(){
	document.getElementById("name") = "";
	document.getElementById("email")= "";
	document.getElementById("phone")= "";
	document.getElementById("pass")= "";
	document.getElementById("checkpass")= "";
}