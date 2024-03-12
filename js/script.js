var leftElements = document.querySelectorAll(".left");
var rightElements = document.querySelectorAll(".right");
if (leftElements.length > 0 && rightElements.length > 0) {
  window.sr = ScrollReveal({
    distance: "60px",
    duration: 800,
    delay: 200,
    reset: true,
  });

  sr.reveal(".left", { delay: 200, origin: "right" });
  sr.reveal(".right", { delay: 200, origin: "left" });
}

var header = document.querySelector("header");
var sidebar = document.querySelector(".nav-panel");
var footer = document.querySelector("footer");

if (header && sidebar && footer) {
  window.addEventListener("scroll", function () {
    var headerHeight = header.getBoundingClientRect().bottom;
    var footerTop = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (headerHeight >= 0) {
      sidebar.style.top = headerHeight + "px";
    }

    if (headerHeight <= 0) {
      sidebar.style.top = "0px";
    }
    if (footerTop < windowHeight) {
      var overlap = windowHeight - footerTop;
      sidebar.style.bottom = overlap + "px";
    } else {
      sidebar.style.bottom = "0px";
    }
  });
}