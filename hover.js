const cols = document.querySelectorAll(".col");
const imageContainer = document.querySelector(".image-container");
const image = document.getElementById("movingImage");

cols.forEach((col, index) => {
  col.addEventListener("mouseenter", () => {

    // Move image horizontally
    imageContainer.style.transform = `translateX(${index * 100}%)`;

    // Change image
    const newImg = col.getAttribute("data-img");
    image.src = newImg;
  });
});