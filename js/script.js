var leftElements = document.querySelectorAll(".left");
var rightElements = document.querySelectorAll(".right");
var subscribeFormElement = document.querySelectorAll(".subscribe-form");
if (
  leftElements.length > 0 &&
  rightElements.length > 0 &&
  subscribeFormElement.length > 0
) {
  window.sr = ScrollReveal({
    distance: "60px",
    duration: 800,
    delay: 200,
    reset: false,
  });

  sr.reveal(".left", { delay: 150, origin: "right" });
  sr.reveal(".right", { delay: 150, origin: "left" });
  sr.reveal(".subscribe-form", { delay: 200, origin: "bottom" });
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

