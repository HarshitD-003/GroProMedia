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

(function() {
  var load_chart;

  load_chart = function() {
    $("body").removeClass("loaded");
    return setTimeout(function() {
      return $("body").addClass("loaded");
    }, 500);
  };

  $(".js-do-it-again").on("click", function() {
    return load_chart();
  });

  load_chart();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtJQUNYLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLFFBQXRCO1dBQ0EsVUFBQSxDQUFZLFFBQUEsQ0FBQSxDQUFBO2FBQ1YsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsUUFBbkI7SUFEVSxDQUFaLEVBRUUsR0FGRjtFQUZXOztFQU1iLENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFFBQUEsQ0FBQSxDQUFBO1dBQy9CLFVBQUEsQ0FBQTtFQUQrQixDQUFqQzs7RUFHQSxVQUFBLENBQUE7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbImxvYWRfY2hhcnQgPSAoKSAtPlxuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxvYWRlZFwiKVxuICBzZXRUaW1lb3V0KCAoKSAtPlxuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibG9hZGVkXCIpXG4gICwgNTAwKVxuXG4kKFwiLmpzLWRvLWl0LWFnYWluXCIpLm9uIFwiY2xpY2tcIiwgKCkgLT5cbiAgbG9hZF9jaGFydCgpXG4gIFxubG9hZF9jaGFydCgpIl19
//# sourceURL=coffeescript