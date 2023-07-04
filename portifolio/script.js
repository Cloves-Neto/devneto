// Animação transição de texto com biblioteca Typeit



  // Animação menu-mobile ( Inserir Classe para estilizar)


function ativar(){
    let menuMobile = document.getElementById('moba');

    menuMobile.classList.toggle('menu-ativo');     
}


window.addEventListener('scroll', ()=>{

    let menuMobile = document.getElementById('moba');

    menuMobile.classList.remove('menu-ativo');
})


// Style referencia de sessão do menu

document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', menuAtivo);

    function menuAtivo(){
        
        let sections = document.querySelectorAll('.section');

        let navLinks = document.querySelectorAll('header div nav ul li');

        let len = sections.length;

        while(--len && window.scrollY + 97 < sections[len].offsetTop){}
        navLinks.forEach(nvl => nvl.classList.remove('ativo'));
        navLinks[len].classList.add('ativo');

    }
    menuAtivo();

})

