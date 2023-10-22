const mobileMenuBtnElement=document.getElementsById('mobile-menu-btn');
const mobileMenuElement=document.getElementsById('mobile-menu');

function toggleMoblieMenu(){
    mobileMenuElement.classList.toggle('open');
}

mobileMenuBtnElement.addEventListener('click',toggleMoblieMenu);