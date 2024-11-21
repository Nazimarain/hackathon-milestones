

let skills_section = document.getElementById('skills')
let skills_btn = document.getElementById('skills_btn')

skills_btn?.addEventListener('click', ()=>{
    skills_section!.classList.toggle('hide')
})

let print_btn: HTMLElement | null = document.getElementById('print_btn');






print_btn?.addEventListener('click', () => {
    
    window.print();
});