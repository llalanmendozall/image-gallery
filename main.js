const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", "images/" + images[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function () {
    displayedImage.setAttribute("src", "images/" + images[i]);
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function () {
  let option = btn.getAttribute("class");
  switch (option) {
    case "dark":
      btn.setAttribute("class", "light");
      btn.textContent = "ligthen";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
      break;
      
    case "light":
      btn.setAttribute("class", "dark");
      btn.textContent = "darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
      break;
  }
});
