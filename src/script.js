// nav
const menu = document.querySelector('.mobile-menu');
const icon = document.querySelector('.mobile-icon');

icon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function showText() {
    document.querySelector('.text-div').classList.remove('md:hidden');
}

function hideText() {
    document.querySelector('.text-div').classList.add('md:hidden');
}

function showSlideInDiv() {
    const slideInDiv = document.querySelector('.slide-in-div');
    slideInDiv.classList.remove('translate-x-full');
}

function showSlideOutDiv() {
    const slideInDiv = document.querySelector('.slide-in-div');
    slideInDiv.classList.add('translate-x-full');
}