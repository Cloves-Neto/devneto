// Animação transição de texto com biblioteca Typeit
document.addEventListener("DOMContentLoaded",  () => {
    new TypeIt("#digitando", {
        speed: 200,
        // strings: ["Web Developer", "Ui Designer"],
        loop: true
        }).type('Web Developer', {delay: 900}).delete(13)
        .type('Ui/Ux Designer', {delay: 900})
        .go();
});

  // Animação menu-mobile ( Inserir Classe para estilizar)
function ativar(){
    const menuMobile = document.getElementById('moba');
    menuMobile.addEventListener('click', ()=>{
        menuMobile.classList.toggle('menu-ativo');
    })  
}

// Style referencia de sessão do menu
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li');

function menuAtivo(){
    let len = sections.length;
    while(--len && window.scrollY + 97 < sections[len].offsetTop){}
    navLinks.forEach(nvl => nvl.classList.remove('ativo'));
    navLinks[len].classList.add('ativo');
}
menuAtivo();
window.addEventListener("scroll", menuAtivo);
