var leftElements = document.querySelectorAll(".left");
var rightElements = document.querySelectorAll(".right");
if (leftElements.length > 0 && rightElements.length > 0) {
  window.sr = ScrollReveal({
    distance: "60px",
    duration: 800,
    delay: 200,
    reset: true,
  });

  // Применяем анимацию к элементам
  sr.reveal(".left", { delay: 200, origin: "right" });
  sr.reveal(".right", { delay: 200, origin: "left" });
}


var header = document.querySelector("header");
var sidebar = document.querySelector(".nav-panel");


if(header && sidebar)
{
  window.addEventListener("scroll", function() {
    var headerHeight = header.getBoundingClientRect().bottom;
    if(headerHeight>=0)
    {
      sidebar.style.top = headerHeight + "px";
    }
    if(header.getBoundingClientRect().bottom <= 0) {
      sidebar.style.top = 0 + "px";
    }
    
  });
}
