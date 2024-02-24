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

const arrowLeft = document.querySelector(".arrow_left");

const arrowRight = document.querySelector(".arrow_right");

const bannerImg = document.querySelector(".banner-img");

const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

function updateCarroussel(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }
  const slide = slides[currentIndex];
  bannerImg.src = `assets/images/slideshow/${slide.image}`;
  document.querySelector("p").innerHTML = slide.tagLine;

  //fonction pour les points//
  const allDots = dotsContainer.querySelectorAll(".dot");
  allDots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  //fonction d'ajout des points//
  allDots[currentIndex].classList.add("dot_selected");
}

arrowLeft.addEventListener("click", () => {
  currentIndex--;
  updateCarroussel(currentIndex);
});

arrowRight.addEventListener("click", () => {
  currentIndex++;
  updateCarroussel(currentIndex);
});

function createDots() {
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  }
}

createDots();
