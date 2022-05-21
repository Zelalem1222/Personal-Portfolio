const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('textarea');
const button = document.getElementById('submit-button');

function storeData() {
    const nameValue = fullName.value;
    const emailValue = email.value;
    const messageValue = message.value;

    const user = {
        nameValue,
        emailValue,
        message,
    }

    if(nameValue && emailValue && messageValue) {
        const collectedData = JSON.stringify(user);
        localStorage.setItem('user' , collectedData);
    }
}

button.addEventListener('click' , storeData);
fullName.addEventListener('keyup',storeData);
email.addEventListener('keyup',storeData);
message.addEventListener('keyup',storeData);
