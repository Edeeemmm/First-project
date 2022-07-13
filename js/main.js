const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-button');
const navBtnImg = document.querySelector('.nav-btn-img');


navBtn.addEventListener('click', () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = './img/icon/nav-close.png';
    } else {
        navBtnImg.src = './img/icon/nav-open.svg';
    }
})

AOS.init();
