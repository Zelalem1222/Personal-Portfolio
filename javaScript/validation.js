
//  function showMessage (input , message , type) {
//      const msg = input.parentNode.querySelector('small');
//      msg.innerText = message;
//      input.className = type ? 'sucess' : 'error';

//      return type;
//  }

//  function showError (input , message) {
//      return showMessage(input,message,false);
//  }

//  function showSuccess (input){
//      return showMessage(input,'',true);
//  }

//  function hasValue(input, message) {
//      if(input.value.trim()){
//        return showError(input,message)
//      }
//      return showSuccess(input);
//  }

//  function validateEmail(input,requiredMsg,invalidMsg){
//      if (!hasValue(input,requiredMsg)){
//            return false;
//      }

//      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
//       const email = input.value.trim();
//       if(!emailRegex.test(email)){
//           return showError(input,invalidMsg);
//       }  
//       return true;
//     }

//     const form = document.querySelector('form');

//     const NAME_REQUIRED = 'Please Enter Your Name';
//     const EMAIL_REQUIRED = 'Please Enter Your Email';
//     const EMAIL_INVALID = "Please enter a correct email address format";
//     const TEXTAREA_REQUIRED = 'please enter your message';

//     form.addEventListener('submit' , function (event){
//        event.preventDefault();
//        let nameValid = hasValue(form.elements['name'] , NAME_REQUIRED);
//        let emailValid = hasValue(form.elements['email'] , EMAIL_REQUIRED, EMAIL_INVALID);
//        let textareaValid = hasValue(form.elements['textarea'] , TEXTAREA_REQUIRED);

//        if(nameValid && emailValid && textareaValid){
//            form.submit();
//        }
//     });

//     console.log(form.elements['name']);

const form = document.getElementById('form');
const divError = document.getElementById('div-error');
const errorMsg = document.querySelector('error-msg');
const emailForm = document.getElementById('email');

form.addEventListener('submit', (e) => {
  if (emailForm.value.match(/^[a-z@.0-9-_]*$/)) {
    divError.style.display = 'none';
  } else {
    e.preventDefault();
    emailForm.style.border = '2px solid red';
    divError.style.display = 'flex';
    divError.innerHTML = 'Enter the email in lower case to continue';
  }
 
});