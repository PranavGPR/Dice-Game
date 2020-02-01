var ran1 = Math.floor((Math.random() * 6) + 1);

var ran2 = Math.floor((Math.random() * 6) + 1);

var ranDice1 = "dice" + ran1 + ".png";

var ranDice2 = "dice" + ran2 + ".png";

var ranImgSource1 = "images/" + ranDice1;

var ranImgSource2 = "images/" + ranDice2;

var img1 = document.querySelector(".img1");

img1.setAttribute("src", ranImgSource1);

var img2 = document.querySelector(".img2");

img2.setAttribute("src", ranImgSource2);

if(ran1 == ran2){
	document.querySelector("h1").innerHTML = "Draw!";
}

else if (ran1 > ran2) {
	document.querySelector("h1").innerHTML = "🚩 Player1 Wins!!";
} 

else {
	document.querySelector("h1").innerHTML = "Player2 Wins!! 🚩";
}