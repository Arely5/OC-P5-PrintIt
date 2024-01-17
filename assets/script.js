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

	if (slideIndex < 0) {
		slideIndex = slides.length -1;
	}

	changeDotClass();
	showCurrentSlide();
}

function nextSlide() {
	slideIndex++;

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	changeDotClass();
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
const dots = document.getElementById('dots');
let arrayDots = [];

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.className = 'dot';
	dots.appendChild(dot);
	arrayDots.push(dot);
}

arrayDots[0].classList.add('dot_selected');

function changeDotClass() {
	for (let i = 0; i < arrayDots.length; i++) {
		if (i === slideIndex) {
			arrayDots[i].classList.add('dot_selected');
		} else {
			arrayDots[i].classList.remove('dot_selected');
		}
	}
}