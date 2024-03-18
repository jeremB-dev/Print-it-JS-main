// Les images et leur texte associé sont stockés dans ce tableau
// Chaque objet du tableau représente un slide et contient une propriété image et une propriété tagLine

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// On sélectionne plusieurs éléments du document HTML / declaration variable

const basePath = "./assets/images/slideshow/"; // selection du chemin pour les imgs
const banner = document.getElementById("banner"); // selection de l'ID "banner"
const bannerImg = document.querySelector(".banner-img"); // selection de la classe ".banner-img"
const tagLine = document.querySelector("#banner p"); // selection de la classe "p" du parent "#banner"
const sliderImg = document.getElementById("slider-img"); // selection de l'ID "slider-img"
sliderImg.setAttribute("src", basePath + slides[0].image); // modification de l'attribut "sliderImg"
const sliderText = document.getElementById("slider-text"); // selection de l'ID "slider-text"
sliderText.innerHTML = slides[0].tagLine; // ajout du texte dans les imgs du tableau

//déclare la variable "position" et lui attribue une valeur initiale de 0
let position = 0;

//addEventListener fleche de gauche
const left = document.querySelector(".arrow_left");
left.addEventListener("click", () => {
  // condition pour vérifier si la variable "position" est égale à zéro
  if (position === 0) {
    position = slides.length - 1; //si vrai, la variable "position" est réinitialisée à "slides.length - 1", donc nous passons au dernier element du tableau "slides"
  } else {
    position = position - 1; //si faux, la variable "position" est décrémentée de 1, donc nous reculons d'un élément dans le tableau
  }
  //met à jour la source de l'image et du texte affichée en fonction de la position actuelle dans le tableau "slides"
  sliderImg.setAttribute("src", basePath + slides[position].image);
  sliderText.innerHTML = slides[position].tagLine;
  updateDot();
});

//addEventListener fleche de droite
const right = document.querySelector(".arrow_right");
right.addEventListener("click", () => {
  //condition pour vérifier si la variable "position" est égale à l'index du dernier élément dans le tableau "slides"
  if (position === slides.length - 1) {
    position = 0; //si vrai, la variable "position" est réinitialisée à zéro donc le diaporama revient au premier élément
  } else {
    position = position + 1; //si faux, la variable "position" est incrémentée de 1, donc nous passons à l'élément suivant dans le tableau
  }
  //met à jour la source de l'image et du texte affichée en fonction de la position actuelle dans le tableau slides
  sliderImg.setAttribute("src", basePath + slides[position].image);
  sliderText.innerHTML = slides[position].tagLine;
  updateDot();
});


// fonction creation des points indicateurs
const createDots = () => {
  const dots = document.querySelector(".dots"); // selection de la classe ".dots"
  // boucle "for" qui initialise une variable index à 0, puis continue à exécuter le code tant que la valeur index est inférieure à la longueur du tableau slides,
  // en incrémentant index de 1 à chaque itération de la boucle
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div"); //  création d'un nouvel élément "div" dans le DOM
    dot.setAttribute("class", "dot"); // définit la classe CSS de cet élément div
    dots.appendChild(dot); // ajoute l'élément div en tant qu'enfant de l'élément "dots"
  }
}

// fonction indication point actuel
function updateDot() {
  const listPoints = document.querySelectorAll(".dot"); // selection de la classe ".dot"
  // initialise une boucle "for" qui va parcourir chaque élément dans le tableau "listPoints"
  for (let index = 0; index < listPoints.length; index++) {
    const dot = listPoints[index]; //  crée une variable appelée "dot" et lui assigne la valeur de l'élément situé à l'index "index" dans le tableau listPoints
    //condition pour vérifier si la variable "index" est égale à la variable "position"
    if (index == position) {
      dot.classList.add("dot_selected"); //si vrai, la classe "dot_selected" est ajouté a l'élément "dot"
    } else {
      dot.classList.remove("dot_selected"); //si faux, la classe "dot_selected" est supprimé de l'élément "dot"
    }
  }
}

//appel les fonctions "createDots" et "updateDot"
createDots();
updateDot(position);