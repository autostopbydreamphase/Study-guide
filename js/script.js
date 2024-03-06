window.sr = ScrollReveal({
  distance: "60px",
  duration: 800,
  delay: 200,
  reset: true,
});
sr.reveal(".left", { delay: 200, origin: "right" });
sr.reveal(".right", { delay: 200, origin: "left" });