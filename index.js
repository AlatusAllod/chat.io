function login() {
	let name = document.getElementById("loginField").value;
	if (name === '') return false;
	localStorage.setItem('user', name);
	document.location.href = "chat.html";
}

loginField.onkeyup = function (e) {
	if (e.keyCode === 13) login();
	    return false;
	}

passwordField.onkeyup = function (e) {
	if (e.keyCode === 13) login();
	    return false;
	}