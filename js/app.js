

window.onload = function() {

    let emailModal = document.getElementsByClassName('email-modal') [0];

    let closeModal = document.getElementsByClassName('email-modal__close-btn') [0];
    console.log(closeModal);

    console.log(emailModal);
    document.addEventListener('mouseleave', () => {
        emailModal.classList.add('email-modal__visible');
        console.log('mouse left')

    });

    document.addEventListener('click', () => {
        emailModal.classList.remove('email-modal__visible')
    } )

    
    console.log(document);
}


