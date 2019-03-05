function hello () {
	document.getElementById ('hi').innerHTML = "Hello";
}

function bye () {
	document.getElementById ('bye').innerHTML = Date ();
}

function helloConfirm () {
	var txt;
	var r = window.confirm ("Delete this file?");
	if (r == true) txt = "OK Pressed!";
	else txt = "Cancel Pressed!";
	document.getElementById ("confirm").innerHTML = txt;
}

function bulbON () {
	document.getElementById ("myImage").src = "Images/pic_bulbon.gif";
}

function bulbOFF () {
	document.getElementById ("myImage").src = "Images/pic_bulboff.gif";
}