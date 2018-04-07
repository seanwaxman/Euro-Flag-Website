var myHeading = document.querySelector("h1");
myHeading.textContent = "Flag Guesser Game";
var myImage = document.querySelector("img");
myImage = document.querySelector("img");
myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	var pFlag = document.querySelector("pFlag")
	if (mySrc === "images/bw.png")
	{
		myImage.setAttribute("src", "images/ca.png");
		pFlag.textContent = "This is Canada's flag";
	}
	else if (mySrc === "images/ca.png")
	{
		myImage.setAttribute("src", "images/us.png");
		pFlag.textContent = "This is the United States of America's flag"
	}
	else if (mySrc === "images/us.png")
	{
		myImage.setAttribute("src", "images/br.png");
		pFlag.textContent = "This is Brazil's flag"
	}
	else
	{
		myImage.setAttribute("src", "images/bw.png");
		pFlag.textContent = "This is Botswana's flag"
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
