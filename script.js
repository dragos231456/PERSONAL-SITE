function neghina2() {
	var neghina = document.getElementById("neghina");
	neghina.style.color = "blue";
	neghina.innerHTML = "Zeu";
	console.log("Neghina e smecher");
}

function openNav() {
	document.getElementById("Mynav").style.display = "block";
	document.getElementById("MenuButton").style.display = "none";
}

function closeNav() {
	document.getElementById("Mynav").style.display = "none";
	document.getElementById("MenuButton").style.display = "block";
}