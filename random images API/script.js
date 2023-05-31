const imageContainer = document.querySelector(".image-container");
const BTN = document.querySelector(".btn");

randomNum = Math.floor(Math.random() * 200);

BTN.addEventListener("click", () => {
  imageNum = 5;
  addNewImages();
});

/////
function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainer.appendChild(newImage);
  }
}
