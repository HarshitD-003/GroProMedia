const counters = document.querySelectorAll(".counter");

const updateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;
  const increment = target / 300;

  if (count < target) {
    counter.innerText = `${Math.ceil(count + increment)}`;
    setTimeout(() => updateCounter(counter), 1);
  } else {
    counter.innerText = target;
  }
};

const resetCounter = (counter) => {
  counter.innerText = "0";
};

const isFullyVisible = (element) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return rect.top >= 0 && rect.bottom <= windowHeight;
};

const handleScroll = () => {
  counters.forEach((counter) => {
    if (isFullyVisible(counter)) {
      if (counter.innerText === "0") {
        updateCounter(counter);
      }
    } else {
      resetCounter(counter);
    }
  });
};

window.addEventListener("scroll", handleScroll);
