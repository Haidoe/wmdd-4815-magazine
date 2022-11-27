console.log(" INDEX!");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("show");
});

searchForm.addEventListener("submit", (e) => e.preventDefault());
