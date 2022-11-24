const image = document.querySelector(".image");
const likesNumber = document.querySelector(".likesNumber");

let currentLikesNumber = 0;

image.addEventListener("dblclick", (e) => {
  e.preventDefault();
  likeImage(e);
  likesNumberCounter();
});

const likeImage = (e) => {
  let xPosition = e.clientX;
  let yPosition = e.clientY;

  const heart = document.createElement("i");
  heart.classList.add("fa-solid");
  heart.classList.add("fa-heart");
  heart.style.cssText = `top:${yPosition - image.offsetTop}px; left:${
    xPosition - image.offsetLeft
  }px`;
  image.append(heart);
};

const likesNumberCounter = () => {
  currentLikesNumber++;
  likesNumber.innerHTML = currentLikesNumber;
};
