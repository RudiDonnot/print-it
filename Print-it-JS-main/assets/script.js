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

let arrowreactright = document.querySelector(".arrow_right");

arrowreactright.addEventListener("click", (e) => {
  i++;
  let img = document.getElementById("imagechanger");
  img.src = "./assets/images/slideshow/" + slides[i].image;
  let texte = slides[i].tagLine;
  document.getElementById("textechanger").innerHTML = texte;
  if (i === 3) {
    i -= 4;
    let img = document.getElementById("imagechanger");
  }
});

let arrowreactleft = document.querySelector(".arrow_left");

arrowreactleft.addEventListener("click", (e) => {
  i--;
  let img = document.getElementById("imagechanger");
  img.src = "./assets/images/slideshow/" + slides[i].image;
  let texte = slides[i].tagLine;
  document.getElementById("textechanger").innerHTML = texte;
  if (i === 3) {
    i -= 4;
    let img = document.getElementById("imagechanger");
  }
});

var i = 0;
