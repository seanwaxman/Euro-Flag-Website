var myHeading = document.querySelector("h1");
myHeading.textContent = "Flag Guesser Game";
var myImage = document.querySelector("img");
myImage = document.querySelector("img");
myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	var pFlag = document.querySelector("pFlag")
	if (mySrc === "images/be.png")
	{
		myImage.setAttribute("src", "images/at.png");
		pFlag.textContent = "This is Austria's flag";
	}
	else if (mySrc === "images/at.png")
	{
		myImage.setAttribute("src", "images/ba.png");
		pFlag.textContent = "This is the Bosnia and Herzgovina's flag"
	}
	else if (mySrc === "images/ba.png")
	{
		myImage.setAttribute("src", "images/bg.png");
		pFlag.textContent = "This is Bulgaria's flag"
	}
	else if (mySrc === "images/bg.png")
	{
		myImage.setAttribute("src", "images/cz.png");
		pFlag.textContent = "This is the Czech Republic's flag"
	}else if (mySrc === "images/cz.png")
	{
		myImage.setAttribute("src", "images/ee.png");
		pFlag.textContent = "This is Estonia's flag"
	}else if (mySrc === "images/ee.png")
	{
		myImage.setAttribute("src", "images/fi.png");
		pFlag.textContent = "This is Finland's flag"
	}else if (mySrc === "images/fi.png")
	{
		myImage.setAttribute("src", "images/ru.png");
		pFlag.textContent = "This is Russia's flag"
	}else if (mySrc === "images/ru.png")
	{
		myImage.setAttribute("src", "images/lv.png");
		pFlag.textContent = "This is Latvia's flag"
	}else if (mySrc === "images/lv.png")
	{
		myImage.setAttribute("src", "images/it.png");
		pFlag.textContent = "This is Italy's flag"
	}else if (mySrc === "images/it.png")
	{
		myImage.setAttribute("src", "images/mt.png");
		pFlag.textContent = "This is Malta's flag"
	}else if (mySrc === "images/mt.png")
	{
		myImage.setAttribute("src", "images/az.png");
		pFlag.textContent = "This is Azerbijian's flag"
	}else if (mySrc === "images/az.png")
	{
		myImage.setAttribute("src", "images/dk.png");
		pFlag.textContent = "This is Denmark's flag"
	}else if (mySrc === "images/dk.png")
	{
		myImage.setAttribute("src", "images/de.png");
		pFlag.textContent = "This is Germany's flag"
	}else if (mySrc === "images/de.png")
	{
		myImage.setAttribute("src", "images/mc.png");
		pFlag.textContent = "This is Monaco's flag"
	}else if (mySrc === "images/mc.png")
	{
		myImage.setAttribute("src", "images/pt.png");
		pFlag.textContent = "This is Portugal's flag"
	}else if (mySrc === "images/pt.png")
	{
		myImage.setAttribute("src", "images/al.png");
		pFlag.textContent = "This is Albania's flag"
	}else if (mySrc === "images/al.png")
	{
		myImage.setAttribute("src", "images/ua.png");
		pFlag.textContent = "This is Ukraine's flag"
	}else if (mySrc === "images/ua.png")
	{
		myImage.setAttribute("src", "images/se.png");
		pFlag.textContent = "This is Sweden's flag"
	}else if (mySrc === "images/se.png")
	{
		myImage.setAttribute("src", "images/ks.png");
		pFlag.textContent = "This is Kosovo's flag"
	}else if (mySrc === "images/ks.png")
	{
		myImage.setAttribute("src", "images/cy.png");
		pFlag.textContent = "This is Cyprus's flag"
	}else if (mySrc === "images/cy.png")
	{
		myImage.setAttribute("src", "images/fr.png");
		pFlag.textContent = "This is France's flag"
	}else if (mySrc === "images/fr.png")
	{
		myImage.setAttribute("src", "images/lt.png");
		pFlag.textContent = "This is Lithuania's flag"
	}else if (mySrc === "images/lt.png")
	{
		myImage.setAttribute("src", "images/gb.png");
		pFlag.textContent = "This is Great Britain's flag"
	}else if (mySrc === "images/gb.png")
	{
		myImage.setAttribute("src", "images/ch.png");
		pFlag.textContent = "This is Switzerland's flag"
	}
	else if (mySrc === "images/ch.png")
	{
		myImage.setAttribute("src", "images/tr.png");
		pFlag.textContent = "This is Turkey's flag"
	}else if (mySrc === "images/tr.png")
	{
		myImage.setAttribute("src", "images/va.png");
		pFlag.textContent = "This is the Vatican City's flag"
	}else if (mySrc === "images/va.png")
	{
		myImage.setAttribute("src", "images/kz.png");
		pFlag.textContent = "This is Kazakhastan's flag"
	}else if (mySrc === "images/kz.png")
	{
		myImage.setAttribute("src", "images/no.png");
		pFlag.textContent = "This is Norway's flag"
	}else if (mySrc === "images/no.png")
	{
		myImage.setAttribute("src", "images/nl.png");
		pFlag.textContent = "This is The Netherland's flag"
	}else if (mySrc === "images/nl.png")
	{
		myImage.setAttribute("src", "images/gr.png");
		pFlag.textContent = "This is Greece's flag"
	}else if (mySrc === "images/gr.png")
	{
		myImage.setAttribute("src", "images/ad.png");
		pFlag.textContent = "This is Andorra's flag"
	}else if (mySrc === "images/ad.png")
	{
		myImage.setAttribute("src", "images/ie.png");
		pFlag.textContent = "This is Ireland's flag"
	}else if (mySrc === "images/ie.png")
	{
		myImage.setAttribute("src", "images/rs.png");
		pFlag.textContent = "This is Serbia's flag"
	}else if (mySrc === "images/rs.png")
	{
		myImage.setAttribute("src", "images/by.png");
		pFlag.textContent = "This is Belarus' flag"
	}else if (mySrc === "images/by.png")
	{
		myImage.setAttribute("src", "images/mk.png");
		pFlag.textContent = "This is Macedonia's flag"
	}else if (mySrc === "images/mk.png")
	{
		myImage.setAttribute("src", "images/es.png");
		pFlag.textContent = "This is Spain's flag"
	}else if (mySrc === "images/es.png")
	{
		myImage.setAttribute("src", "images/li.png");
		pFlag.textContent = "This is Liechtenstein's flag"
	}else if (mySrc === "images/li.png")
	{
		myImage.setAttribute("src", "images/hu.png");
		pFlag.textContent = "This is Hungary's flag"
	}else if (mySrc === "images/hu.png")
	{
		myImage.setAttribute("src", "images/sk.png");
		pFlag.textContent = "This is Slovakia's flag"
	}
	else if (mySrc === "images/sk.png")
	{
		myImage.setAttribute("src", "images/ge.png");
		pFlag.textContent = "This is Georgia's flag"
	}else if (mySrc === "images/ge.png")
	{
		myImage.setAttribute("src", "images/is.png");
		pFlag.textContent = "This is Iceland's flag"
	}else if (mySrc === "images/is.png")
	{
		myImage.setAttribute("src", "images/md.png");
		pFlag.textContent = "This is Moldova's flag"
	}else if (mySrc === "images/md.png")
	{
		myImage.setAttribute("src", "images/si.png");
		pFlag.textContent = "This is Slovenia's flag"
	}else if (mySrc === "images/si.png")
	{
		myImage.setAttribute("src", "images/lu.png");
		pFlag.textContent = "This is Luxembourg's flag"
	}
	else if (mySrc === "images/lu.png")
	{
		myImage.setAttribute("src", "images/ro.png");
		pFlag.textContent = "This is Romania's flag"
	}else if (mySrc === "images/ro.png")
	{
		myImage.setAttribute("src", "images/me.png");
		pFlag.textContent = "This is Montenegro's flag"
	}else if (mySrc === "images/me.png")
	{
		myImage.setAttribute("src", "images/pl.png");
		pFlag.textContent = "This is Poland's flag"
	}
	else if (mySrc === "images/pl.png")
	{
		myImage.setAttribute("src", "images/sm.png");
		pFlag.textContent = "This is San Marino's flag"
	}
	else
	{
		myImage.setAttribute("src", "images/be.png");
		pFlag.textContent = "This is Belgium's flag"
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
