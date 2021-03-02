//query selectors
const buttons = document.querySelectorAll('.button1');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileBtns = document.querySelectorAll('.mobile-nav-item');

const updateButtonBG = (e) => {
    //update background color of currently pressed button
    e.target.parentNode.classList.add('bg-light-blue');
}

const resetAllButtonBG = (e) => {
    //reset all button background colors to base
    buttons.forEach(el => {
       el.classList.remove('bg-light-blue'); 
    });
    //bg color update on click
    updateButtonBG(e);
}

const toggleMobileMenu = (e) => {
    if(!mobileNav.classList.contains('hidden')){
        mobileNav.classList.add('hidden');
    }else{
        mobileNav.classList.remove('hidden');
    }
}

const addEventListeners = () => {
    
    //nav buttons
    buttons.forEach( el => {
        el.addEventListener('click', resetAllButtonBG);
    });

    //hamburger button
    mobileMenu.addEventListener('click', toggleMobileMenu);

    //mobile buttons
    mobileBtns.forEach(el => {
        el.addEventListener('click', toggleMobileMenu);
    });
}

//run
addEventListeners();