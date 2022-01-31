const navToggle = document.querySelector(".mobile-nav-toggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  const visibility = navbar.getAttribute("data-visible");

  if (visibility === "false") {
    navbar.setAttribute("data-visible", true);
    console.log(visibility);
  } else if (visibility === "true") {
    navbar.setAttribute("data-visible", false);
    console.log(visibility);
  }
});
