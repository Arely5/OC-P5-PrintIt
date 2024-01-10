// Gestion des slides

// Event listener
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		texte:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		texte:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		texte:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		texte:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slideIndex = 0;

arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

// Changement de slides
function previousSlide() {
	slideIndex--;
	dotsIndex--;

	if (slideIndex < 0) {
		slideIndex = slides.length -1;
	}

	showCurrentSlide();
}

function nextSlide() {
	slideIndex++;
	dotsIndex++;

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	showCurrentSlide();
}

function showCurrentSlide() {
	const imageElement = document.querySelector(".banner-img");
	const textElement = document.querySelector(".banner-title");

	imageElement.src = slides[slideIndex].image;
	textElement.innerHTML = slides[slideIndex].texte;
}
//fin gestion des slides

// Bullet points
var dotsNumber = slides.length;

var dots = document.getElementById('dots');
let dotsIndex = 0;

for (var i = 0; i < slides.length; i++) {
	var dot = document.createElement('div');
	dot.className = 'dot';
	dots.appendChild(dot);
}