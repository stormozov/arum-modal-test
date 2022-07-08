const body = document.querySelector('body');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-intro-video__close');

const openModal = () => {
    setTimeout( () => {
        body.classList.add('modal-open');
        modalOverlay.classList.add('open');
    }, 2000)    
};

const closeModal = () => {
    body.classList.remove('modal-open');
    modalOverlay.classList.remove('open');
    // localStorage.setItem('modalOpen', JSON.stringify('modalOpen'));
};

if ( localStorage.getItem('modalOpen') == null ) {
    window.addEventListener('DOMContentLoaded', openModal);
    modalClose.addEventListener('click', closeModal);
}