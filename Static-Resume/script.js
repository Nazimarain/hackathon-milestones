//let skills_section = document.getElementById('skills')
//let skills_btn = document.getElementById('skills_btn')
//skills_btn?.addEventListener('click', ()=>{
//  skills_section!.classList.toggle('hide')
//})
//let print_btn: HTMLElement | null = document.getElementById('print_btn');
//print_btn?.addEventListener('click', () => {
//  window.print();
//});
// Select the elements
var skillsSection = document.getElementById("skills");
var toggleButton = document.getElementById("skills_btn");
var printButton = document.getElementById("print_btn");
// Toggle visibility of the skills section
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skillsSection) {
        var isHidden = skillsSection.style.display === "none";
        skillsSection.style.display = isHidden ? "block" : "none";
        toggleButton.textContent = isHidden ? "Hide Skills" : "Show Skills";
    }
});
// Print the resume
printButton === null || printButton === void 0 ? void 0 : printButton.addEventListener("click", function () {
    window.print(); // Opens the print dialog for the page
});
