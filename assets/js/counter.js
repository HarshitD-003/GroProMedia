const counters = document.querySelectorAll(".counter");
let isChartLoaded = false;

const updateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;
  const increment = target / 10000;

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

  // Check if the chart is fully visible
  const chart = document.querySelector(".chart");
  if (isFullyVisible(chart) && !isChartLoaded) {
    loadChart();
    isChartLoaded = true;
  }
};

window.addEventListener("scroll", handleScroll);

const loadChart = () => {
  const body = document.querySelector("body");
  body.classList.remove("loaded");

  setTimeout(() => {
    body.classList.add("loaded");
  }, 500);
};

const doItAgainButton = document.querySelector(".js-do-it-again");
doItAgainButton.addEventListener("click", loadChart);

loadChart();
