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
    messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    const collectedData = JSON.stringify(user);
    localStorage.setItem('user', collectedData);
  }
}

window.addEventListener('load', () => {
  const parseData = JSON.parse(localStorage.getItem('user'));
  fullName.value = parseData.nameValue;
  email.value = parseData.emailValue;
  message.value = parseData.messageValue;
});

button.addEventListener('click', storeData);
