const link = document.querySelector(".linkx");
const pink = document.querySelector(".colorx");

let timeoutId;

link.addEventListener("mouseenter", () => {
  clearTimeout(timeoutId); 
  pink.style.transition = "width 0.4s ease";
  pink.style.width = "100%";

  timeoutId = setTimeout(() => {
    pink.style.transition = "width 0.4s ease, left 0.6s ease";
    pink.style.width = "2em";
    pink.style.left = "calc(100% - 1.45em)";
  }, 400);
});

link.addEventListener("mouseleave", () => {
  clearTimeout(timeoutId); 
  pink.style.transition = "width 0.4s ease, left 0.6s ease";
  pink.style.width = "";
  pink.style.left = "";

  
  setTimeout(() => {
    pink.style.transition = "width 0.4s ease";
  }, 400);
});