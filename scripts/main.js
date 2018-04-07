var myHeading = document.querySelector("h1");
myHeading.textContent = "Flag Guesser Game";
var myImage = document.querySelector("img");
myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/bw.png")
	{
		myImage.setAttribute("src", "images/br.png");
	}
	else
	{
		myImage.setAttribute("src", "images/bw.png");
	}
}
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
	var myName = prompt("Please enter your name: ");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Welcome to the flag guesser game: " + myName;
}
if (!localStorage.getItem("name"))
{
	setUserName();
}
else
{
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Welcome to the flag guesser game: " + storedName;
}
myButton.onclick = function() {
	setUserName();
}