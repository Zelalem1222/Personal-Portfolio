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