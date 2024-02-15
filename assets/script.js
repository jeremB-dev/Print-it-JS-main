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





//EventListeners pour flèche gauche

let left = document.querySelector('.arrow_left');

left.addEventListener("click", () => {
	console.log("Cliquer à gauche")
});

//EventListeners pour flèche droite

let right = document.querySelector('.arrow_right');

right.addEventListener("click", () => {
	console.log("Cliquer à droite")
});
