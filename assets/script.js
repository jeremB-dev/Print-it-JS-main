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

// selection lien img, ID et classe
const basePath = "./assets/images/slideshow/"; //selection du chemin pour les imgs
const banner = document.getElementById("banner"); // selection de l'ID banner
const bannerImg = document.querySelector(".banner-img"); // selection de la classe .banner-img
const tagLine = document.querySelector("#banner p"); //selection de la classe p du parent #banner
const sliderImg = document.getElementById("slider-img");
sliderImg.setAttribute("src", basePath + slides[0].image);
const sliderText = document.getElementById("slider-text");
sliderText.innerHTML = slides[0].tagLine;

let position = 0;
createDots();
updateDot(position);

//addEventListener fleche de gauche
const left = document.querySelector(".arrow_left");
left.addEventListener("click", () => {
  //console.log("Cliquer à gauche");
  position = position - 1;
  sliderImg.setAttribute("src", basePath + slides[position].image);
  sliderText.innerHTML = slides[position].tagLine;
  updateDot();
});

//addEventListener fleche de droite
const right = document.querySelector(".arrow_right");
right.addEventListener("click", () => {
  //console.log("Cliquer à droite");
  position = position + 1;
  sliderImg.setAttribute("src", basePath + slides[position].image);
  sliderText.innerHTML = slides[position].tagLine;
  updateDot();
});

// creation des points indicateurs
function createDots() {
  const dots = document.querySelector(".dots");
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
  }
}

// fonction indication point actuel
function updateDot() {
  const listPoints = document.querySelectorAll(".dot");
  for (let index = 0; index < listPoints.length; index++) {
    const dot = listPoints[index];
    if (index == position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}
