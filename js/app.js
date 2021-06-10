

window.onload = function() {

    let emailModal = document.getElementsByClassName('email-modal') [0];

    let closeModal = document.getElementsByClassName('email-modal__close-btn') [0];
 
    document.addEventListener('mouseleave', () => {
        emailModal.classList.add('email-modal__visible');
        console.log('mouse left')

    });

    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal__visible')
    });

    
    console.log(document);
}


