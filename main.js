const inconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu_link');
const iconClose = document.querySelector('.close_icon');

inconToggle.addEventListener('click', () =>{
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
   navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener('click', () =>{
        navbarMenu.classList.remove('active');
    })
})

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/*const typed = document.querySelector('.Auto');

if(typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new typed('.Auto', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000

    });
    
}
/**** */
