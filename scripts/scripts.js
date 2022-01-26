// const button = document.querySelector('.form__button')
const headerForm = document.querySelector('.header__form')
const buttonHeader = headerForm.querySelector('.form__button')

const footerForm = document.querySelector('.footer__form')
const buttonFooter = footerForm.querySelector('.form__button')

const line = document.querySelector('.form__line')
//   button.addEventListener('click', function() {
//     const element = document.querySelector('.speshial');
//     const text = document.querySelector('.invsbl');

//     element.remove();

//     text.classList.toggle('invsbl');

// }, {once: true}); 

function validate_form_header () {
  if (line.length != '') {
    buttonHeader.disabled = false;
    buttonHeader.addEventListener('click', function() {
      const element = document.querySelector('.speshial');
      const text = document.querySelector('.invsbl');
      
      element.remove();
  
      text.classList.toggle('invsbl');
  
  }, {once: true}); 
  }
}


validate_form_header ()


function validate_form_footer () {
  if (line.length != '') {
    buttonFooter.disabled = false;
    buttonFooter.addEventListener('click', function() {
      const element = document.querySelector('.speshial');
      const text = document.querySelector('.invsbl');
      
      element.remove();
  
      text.classList.toggle('invsbl');
  
  }, {once: true}); 
  }
}

validate_form_footer ()