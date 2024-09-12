/**
 * ? Mon code
 // console.log("📸 galleryApp");

// const image = document.getElementById("monImage");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// const thumbnailsContainer = document.querySelector(".thumbnails-container");

// const imagePath = "static/img/wide/";
// const imageFolder = "static/img/thumbnails/";

// const images = [
//   "gaby1.jpg",
//   "gaby2.jpg",
//   "hiroshima.jpg",
//   "iceland1.jpg",
//   "iceland2.jpg",
//   "japan1.jpg",
//   "jerusalem.jpg",
//   "jocelyn.jpg",
//   "lost.jpg",
//   "sifnos.jpg",
// ];

// let currentIndex = 0;

// function updateImages() {
//   image.src = imagePath + images[currentIndex];
//   updateThumbnails();
// }

// function showNextImage() {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateImages();
// }

// function showPrevImage() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateImages();
// }

// function updateThumbnails() {
//   thumbnailsContainer.innerHTML = "";

//   images.forEach((img, index) => {
//     const thumbnail = document.createElement("img");
//     thumbnail.src = imageFolder + img;
//     thumbnail.addEventListener("click", () => {
//       currentIndex = index;
//       updateImages();
//     });
//     thumbnailsContainer.appendChild(thumbnail);
//   });
// }

// nextBtn.addEventListener("click", showNextImage);
// prevBtn.addEventListener("click", showPrevImage);

// updateImages();

// const playBtn = document.getElementById("play");
// let autoPlayInterval;

// const startAutoPlay = () => {
//   autoPlayInterval = setInterval(showNextImage, 2000); // Changez 2000 par la durée souhaitée entre chaque image (en millisecondes)
// };

// const stopAutoPlay = () => {
//   clearInterval(autoPlayInterval);
// };

// playBtn.addEventListener("click", () => {
//   if (autoPlayInterval) {
//     stopAutoPlay();
//     playBtn.textContent = "Lecture";
//   } else {
//     startAutoPlay();
//     playBtn.textContent = "Pause";
//   }
// });
*/

//  console.log("📸 galleryApp");

// DOM
const monImage = document.querySelector("#monImage");
const [btnPrev, btnPlay, btnNext] = document.querySelectorAll(
  "div.buttons-container > button"
);
const thumbnailsParent = document.querySelector(".thumbnails-container");
const IMAGES_FOLDER = "./static/img/wide/";
const THUMB_FOLDER = "./static/img/thumbnails/";

// DataSet
const images = [
  "gaby1.jpg",
  "gaby2.jpg",
  "hiroshima.jpg",
  "iceland1.jpg",
  "iceland2.jpg",
  "japan1.jpg",
  "jerusalem.jpg",
  "jocelyn.jpg",
  "lost.jpg",
  "sifnos.jpg", // idx 9
];
const thumbnails = [];

let compteur = 0;
let maxIndex = images.length - 1;

// ?? quel est la valeur max de mon compteur ?

const nextImage = () => {
  compteur < maxIndex ? compteur++ : (compteur = 0);

  animation();
};

const prevImage = () => {
  if (compteur > 0) {
    compteur--;
  } else {
    compteur = maxIndex;
  }
  animation();
};

function animation() {
  clearAllThumbnails();
  thumbnails[compteur].classList.add("thumbnails-current");
  updateImage();
}

function updateImage() {
  monImage.src = IMAGES_FOLDER + images[compteur];
}

let monInterval = 0;

function startDiaporama() {
  if (monInterval) {
    clearInterval(monInterval);
    btnPlay.textContent = "▶";
    monInterval = 0;
  } else {
    btnPlay.textContent = "⏸";
    monInterval = setInterval(nextImage, 5000);
  }
}

btnNext.addEventListener("click", nextImage);
btnPrev.addEventListener("click", prevImage);
btnPlay.addEventListener("click", startDiaporama);

console.log(window);

function createThumbnails() {
  images.forEach((thumbnail, idx) => {
    const divTest = document.createElement("div");
    const thumbnailImg = document.createElement("img");
    divTest.appendChild(thumbnailImg);
    thumbnailsParent.appendChild(divTest);
    thumbnailImg.src = THUMB_FOLDER + thumbnail;

    thumbnailImg.addEventListener("click", () => {
      compteur = idx;
      animation();
    });
    thumbnails.push(thumbnailImg);
  });
}

function clearAllThumbnails() {
  const parentThumbnail = document.querySelector(".thumbnails-container");
  const allThumbnails = parentThumbnail.querySelectorAll("div > img");
  console.log(allThumbnails);

  allThumbnails.forEach((vignette) => {
    vignette.classList.remove("thumbnails-current");
  });
}

createThumbnails();
animation();

