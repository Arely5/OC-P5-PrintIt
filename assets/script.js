// Ajout d'event listenner sur les flèches
var arrowLeft = document.getElementById('arrow_left');
var arrowRight = document.getElementById('arrow_right');

arrowLeft.addEventListener('click', showMsg);
arrowRight.addEventListener('click', showAutreMsg);

function showMsg() {
	alert("it works :)");
}

function showAutreMsg() {
	alert("it works too :3");
}
// Fin de l'ajout d'event listenner

// Gestion des slides et bullets points
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Bullet points
var dotsNumber = slides.length;

var dots = document.getElementById('dots');

for (var i = 0; i < slides.length; i++) {
	var dot = document.createElement('div');
	dot.className = 'dot';
	dots.appendChild(dot);
}