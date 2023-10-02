const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("to-right");
      entry.target.classList.add("to-left");
      entry.target.classList.add("zoom");
    } else {
      // entry.target.classList.remove("show");
      entry.target.classList.remove("to-right");
      entry.target.classList.remove("to-left");
      entry.target.classList.remove("zoom");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const fromLeftElements = document.querySelectorAll(".from-left");
const fromRightElements = document.querySelectorAll(".from-right");
const zoomInElements = document.querySelectorAll(".zoom-in");
// const slide = document.querySelector(".slide");
// const slides = [
//   "assets/Illustrations/Bathome11.png",
//   "assets/Illustrations/Bathome15.jpg",
//   "assets/Illustrations/Bathome16.jpg",
//   "assets/Illustrations/Bathome17.jpg",
// ];

// setInterval(function () {
//   let random = Math.floor(Math.random() * 4);
//   slide.backgroundImage = `url(${slides[random]})`;
// }, 800);

hiddenElements.forEach((element) => observer.observe(element));
fromLeftElements.forEach((element) => observer.observe(element));
fromRightElements.forEach((element) => observer.observe(element));
zoomInElements.forEach((element) => observer.observe(element));
