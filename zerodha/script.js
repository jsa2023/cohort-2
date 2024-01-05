const hamburger = document.getElementById('hamburger');
const secondMenu = document.getElementById('second-menu');

hamburger.addEventListener('click', () => {
    secondMenu.classList.toggle('hide');
});