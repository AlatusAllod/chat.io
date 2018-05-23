var name = localStorage.getItem('user');

var elements = document.querySelectorAll('.user .sendWhen');

for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML += ' by ' + name;
}

function getBack() {
	localStorage.clear();
	document.location.href = "index.html";
}