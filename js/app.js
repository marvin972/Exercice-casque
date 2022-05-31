let titre = document.querySelector('#titre');
let position = document.querySelector('header');
let h1 = document.querySelector('h1');

window.addEventListener('scroll', () => {
    let scroll_y = this.scrollY;
    if (scroll_y  != 0) {
        console.log(scroll_y);
        titre.style.display = 'none';
    }
    else {
        setTimeout('titre.style.display = \'contents\'', 2000);
    }
});