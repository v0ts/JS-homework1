// first

const firstTextEl = document.querySelector('.first__text')
const firstButtonEl = document.querySelector('.first__button')
firstButtonEl.textContent = firstTextEl.textContent


// second 
const imgEL = document.querySelector(".second__img");
imgEL.src = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfba6f2477bfa42be69ddfdffbd421d3943d20bf.1920x1080.jpg?t=1717621493';


// third

const linkEL = document.querySelector('.third__link'); 
const thirdImgEL = document.querySelector('.third__img')

linkEL.href = 'https:/youtube.com'; 
thirdImgEL.alt = 'link to YouTube'


// fourth 

const fourthListEL = document.querySelector('.fourth__list');
const firstEL = fourthListEL.firstElementChild.firstElementChild;
firstEL.textContent = 'first element'