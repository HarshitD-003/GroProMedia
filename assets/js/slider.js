let slideIndex = 0;
const slide = document.getElementById('slide');
const lists = slide.querySelectorAll('.item-s');

function showSlide() {
  slideIndex++;
  if (slideIndex >= lists.length) {
    slideIndex = 0;
  }
  slide.appendChild(lists[slideIndex]);
}

// Automatic slide change
setInterval(showSlide, 8000); // Change slide every 8 seconds

// Clicking item-s
for (let i = 0; i < lists.length; i++) {
  lists[i].onclick = function() {
    slideIndex = i;
    slide.appendChild(lists[slideIndex]);
  };
}

document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item-s');
  document.getElementById('slide').appendChild(lists[0]);
  }
  document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item-s');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
  }