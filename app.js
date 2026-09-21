const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar");

menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");
  menuBtn.classList.toggle("open", isOpen);
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
