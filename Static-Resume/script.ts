

const skillsSection = document.getElementById("skills");
const toggleButton = document.getElementById("skills_btn");
const printButton = document.getElementById("print_btn");

toggleButton?.addEventListener("click", () => {
  if (skillsSection) {
    const isHidden = skillsSection.style.display === "none";
    skillsSection.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Hide Skills" : "Show Skills";
  }
});

printButton?.addEventListener("click", () => {
  window.print(); 
});



