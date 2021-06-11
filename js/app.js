

window.onload = function() {

    let emailState = false;

    let emailModal = document.getElementsByClassName('email-modal') [0];

    let closeModal = document.getElementsByClassName('email-modal__close-btn') [0];

    let emailInput = document.getElementsByClassName('email-modal__input') [0];
    
    let emailButton = document.getElementsByClassName('email-modal__button') [0];
    
   function emailIsValid (email) {
       return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
   }

    emailButton.addEventListener('click', () => {
        if (emailIsValid(emailInput.value)) {
            console.log(emailInput.value)
        } else {
            document.getElementsByClassName('email-modal__form-group') [0].classList.add('email-modal__form-group--error');
            document.getElementsByClassName('email-modal__error-message') [0].classList.add('email-modal__error-message--active');
        }

        console.log(emailInput.value)
    });

     closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal__visible')
    });

    let showModal = () => {
         if (emailState === false ) {
            
        emailModal.classList.add('email-modal__visible');
        emailState = true;

        }
    };
 
    document.body.addEventListener('mouseleave', () => {

     showModal();
    });

   

    

    
    console.log(document);
}


