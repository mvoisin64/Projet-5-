const slides= [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;


for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div");
	// Récupérer un élément parent existant
	const containerdots = document.getElementById("containerdots");
	// Ajouter le nouvel élément au parent
	containerdots.appendChild(newDot);
	newDot.classList.add("dot")
	newDot.setAttribute("id", i);

}
const newDot = document.getElementById(currentIndex)
newDot.classList.add("dot_selected")


const arrowLeft = document.getElementById("arrowleft");
arrowLeft.addEventListener("click", () => {
	let oldDot = document.getElementById(currentIndex)
	oldDot.classList.remove("dot_selected")

	currentIndex -= 1
	console.log("Vous avez cliqué sur le bouton")
	if (currentIndex < 0)
	currentIndex = slides.length - 1;

	updateCarrousel()
});

const arrowRight = document.getElementById("arrowright");
arrowRight.addEventListener("click", () => {
	const olddot = document.getElementById(currentIndex)
	olddot.classList.remove("dot_selected")

	currentIndex += 1
	console.log("Vous avez cliqué sur le bouton")
	if (currentIndex > slides.length - 1)
	currentIndex = 0;
	updateCarrousel()

});

const updateCarrousel=() => {
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[currentIndex].image;

	let texte = document.getElementById("textphoto")

	texte.innerHTML = slides[currentIndex].tagLine;

	const newDot = document.getElementById(currentIndex)
	newDot.classList.add("dot_selected")

}
