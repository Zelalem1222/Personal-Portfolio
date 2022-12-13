const accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i += 1) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}


const nav = document.querySelector('nav');
const main = document.createElement('div');
main.className = 'mob-menu';
nav.appendChild(main);

main.innerHTML = `
<img class="menu-list" src="images/Enabled.png" alt="menu">
`;

const menu = document.querySelector('.menu-list');
menu.addEventListener('click', () => {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <i class="fa-solid fa-xmark close-menu"></i>
    <ul class="menu-tags">
    <li><a class="menu-link1 menu-portfolio" href="">Portfolio</a></li>
    <li><a class="menu-link2 menu-about" href="#about">About</a></li>
    <li><a class="menu-link3 menu-contact" href="#footer">Contact</a></li>
      </ul>
    `;
  const overFlow = document.querySelector('body');
  overFlow.classList.add('scroll');
  const blur = document.querySelector('#blur');
  blur.classList.add('active');
  main.appendChild(popup);

  const close = document.querySelector('.close-menu');
  close.addEventListener('click', () => {
    main.removeChild(popup);
    overFlow.classList.remove('scroll');
    blur.classList.remove('active');
  });

  document.querySelector('.menu-link1').addEventListener('click', () => {
    main.removeChild(popup);
    overFlow.classList.remove('scroll');
    blur.classList.remove('active');
  });
  document.querySelector('.menu-link2').addEventListener('click', () => {
    main.removeChild(popup);
    overFlow.classList.remove('scroll');
    blur.classList.remove('active');
  });
  document.querySelector('.menu-link3').addEventListener('click', () => {
    main.removeChild(popup);
    overFlow.classList.remove('scroll');
    blur.classList.remove('active');
  });
});

// Work popup

const works = [
  {
    id: 1,
    name: 'Budget App',
    experiance: ['CANOPY', 'Backend Dev', '2022'],
    description:
      'This app is a  web application where a user manage its budget: have a list of transactions associated with a category, so that the user can see how much money it spent and on what.',
    languages: ['Html', 'Ruby on Rails', 'CSS', 'Bootstrap'],
    popuplanguage: ['html', 'css', 'javaScript', 'postgresql', 'ruby', 'bootstrap'],
    popDescription:
      'This project is created as part of the rails capstone at Microverse. This app is a web application where a user manage its budget: have a list of transactions associated with a category, so that the user can see how much money it spent and on what.',
    image: 'images/budget-app-4.png',
    seeLive: "https://github.com/Zelalem1222/Budget-app",
    seeSource: "https://github.com/Zelalem1222/Budget-app",
  },
  {
    id: 2,
    name: 'Crypto Tracker',
    experiance: ['Crypto', 'Frontend Dev', '2021'],
    description:
      'In this App, I worked with the real live data from the Crypto API. It displayes a list of different cryptocurrencies and also it showes a detailed information about each coin.',
    languages: ['html', 'Redux', 'css', 'react'],
    popuplanguage: ['html', 'css', 'javaScript', 'react', 'redux', 'bootstrap'],
    popDescription:
      'In this App, I worked with the real live data from the Crypto API. It displayes a list of different cryptocurrencies and also it showes a detailed information about each coin. I used redux to manage the state of the app.',
    image: 'images/crypto-3.png',
    seeLive: 'https://crypto-tracker1222.netlify.app/',
    seeSource: 'https://github.com/Zelalem1222/Crypto-trarcker'
  },
  {
    id: 3,
    name: 'Book Store',
    experiance: ['BookStore', 'Frontend Dev', '2021'],
    description:
      'Store your favorite books in this app. You can add, remove, and update your books. You can also filter your books by category.',
    languages: ['html', 'React', 'css', 'Redux'],
    popuplanguage: ['html', 'css', 'javaScript', 'React', 'Redux', 'bootstrap'],
    popDescription:
      'This app helps to store your favorite books along side with your progress. You can also remove any book you want from the list. I used redux to manage the app state.',
    image: 'images/bookstore-1.png',
    seeLive: 'https://book-store-react-app22.netlify.app/',
    seeSource: 'https://github.com/Zelalem1222/Book-store'
  },
  {
    id: 4,
    name: 'To Do List',
    experiance: ['To Do', 'Frontend Dev', '2021'],
    description:
      'A to do list application that includes adding a new list and deleting the unwanted list. ',
    languages: ['html', 'Webpack', 'css', 'javaScript'],
    popuplanguage: ['html', 'css', 'javaScript', 'local storage', 'webpack', 'bootstrap'],
    popDescription:
      'A to do list application that includes adding a new list and deleting the unwanted list. I used local storage to store the data.',
    image: 'images/todo-list.png',
    seeLive: 'https://zelalem1222.github.io/To-do-list-App/' , 
    seeSource: 'https://github.com/Zelalem1222/To-do-list-App'
  },
];

for (let i = 0; i < works.length; i += 1) {
  let technology = '';
  let experianceList = '';
  for (let j = 0; j < works[i].languages.length; j += 1) {
    technology += `<li >${works[i].languages[j]}</li>`;
  }
  for (let k = 0; k < works[i].experiance.length; k += 1) {
    experianceList
      += k === 0
        ? `<li><h3>${works[i].experiance[k]}</h3></li>`
        : `
    <li class="counter"><img src="images/Counter.png" alt="Backend dev">${works[i].experiance[k]}</li>`;
  }

  document.querySelector('.cards-desktop').innerHTML += `
  <div class="card-d-1" id='work-${works[i].id}' >
  <img class="snapshot-desktop${works[i].id} project-img" src='${works[i].image}'>
  <div class="description">
   <h2>${works[i].name}</h2>  
   <div>
    <ul class="container">
       ${experianceList}
    </ul>
   </div>
   <p>${works[i].description}</p>
   <div>
        <ul class="languages">
        ${technology}
        </ul>
    </div> 
    
 <button class="see-more" type="button" data-index="${i}">See Project</button>
 </div>
   
</div>`;

  document.querySelector('.cards').innerHTML += `
 <div class="card-${works[i].id} card"> 
 <img class="snapshot-mobile${works[i].id}"  src='${works[i].image}' />
 <div>
   <h2>${works[i].name}</h2>
   <div> 
   <ul class="container">
     ${experianceList}
     </ul>
   </div>
   <p>
     ${works[i].description}
   </p>
   <div>
     <ul class="languages">
     ${technology}
     </ul>
   </div>
   <button type="button" class="see-project" data-index="${i}">See Project</button>
 </div>
 </div>
 `;
}

const popModel = document.querySelector('.project-container');
const body = document.querySelector('body');
const displayPopupModal = (i) => {
  let popupTech1 = '';
  let popupTech2 = '';
  let experianceList = '';

  for (let j = 0; j < works[i].popuplanguage.length; j +=1){
    if (j <= 3) {
      popupTech1 += `<li >${works[i].popuplanguage[j]}</li>`;
    } else {
      popupTech2 += `<li >${works[i].popuplanguage[j]}</li>`;
    }
  }

  for (let k = 0; k < works[i].experiance.length; k += 1) {
    experianceList
      += k === 0
        ? `<li><h3>${works[i].experiance[k]}</h3></li>`
        : `<li class="counter"><img src="images/Counter.png" alt="Backend dev">${works[i].experiance[k]}</li>`;
  }
  body.style.overflow = 'hidden';
  document.querySelector('.project-container').innerHTML = `
    <div class='popup-item' id='works-${works[i].id}'>
    <div class='popup-header'>
    <div class="popup-header-left">
    <h2>${works[i].name}</h2>
    <ul class="container">
    ${experianceList}
    </ul>
    </div> 
    <i onclick="closePopupModal()" class="fa-solid fa-xmark close-project" id="close"></i>
    </div>
    <img src='${works[i].image}' class="hero-image">
    <div class='description'> 
    <div>
    </div>
    <div class="popup-footer">
    <p>${works[i].popDescription}</p>
    <div class="popup-footer-right">
    <ul class='languages'>
    ${popupTech1}
   </ul>
   <ul class='languages'>
   ${popupTech2}
  </ul>
  <div class="btn-tags">
  <button class="see-more"><a class="see"  href="${works[i].seeLive}">See Live</a><img src="images/Icon.png" />
  </button>
  <button  class="see-more"><a class="see" href="${works[i].seeSource}">See Source</a><img src="images/vector-github.png" />
  </button>
  </div>
    </div> 
    </div>
    </div>
    </div>
   `;

  popModel.style.display = 'block';
};

const popMobModelMain = document.querySelector('.mobile-project-container');
const displayMobPopup = (i) => {
  let popupTech1 = '';
  let experianceList = '';

  for (let j = 0; j < works[i].popuplanguage.length; j += 1) {
    if (j <= 3) {
      popupTech1 += `<li >${works[i].popuplanguage[j]}</li>`;
    }
  }

  for (let k = 0; k < works[i].experiance.length; k += 1) {
    experianceList
      += k === 0
        ? `<li><h3>${works[i].experiance[k]}</h3></li>`
        : `<li class="counter"><img src="images/Counter.png" alt="Backend dev">${works[i].experiance[k]}</li>`;
  }

  body.style.overflow = 'hidden';

  document.querySelector('.mobile-project-container').innerHTML = `
  <div class='popup-item-mob' id='works-${works[i].id}'>
  <div class='popup-mob-header'>
  <div class="popup-header-left">
  <h2>${works[i].name}</h2>
  <ul class="container">
  ${experianceList}
  </ul>
  </div> 
  <i onclick="closePopupMobModel()" class="fa-solid fa-xmark close-mob-project" id="close-mob"></i>
  </div>
  <img src='${works[i].image}' class="hero-image">
  <div class='description'> 
  <div>
  </div>
  <div class="popup-footer">
  <p>${works[i].popDescription}</p>
  <div class="popup-footer-right">
  <ul class='languages'>
  ${popupTech1}
 </ul>

<div class="btn-tags">
<button class="see-more"><a class="see"  href="${works[i].seeLive}">See Live</a><img src="images/Icon.png" />
</button>
<button  class="see-more"><a class="see" href="${works[i].seeSource}">See Source</a><img src="images/vector-github.png" />
</button>
</div>
  </div> 
  </div>
  </div>
  </div>
 `;
  popMobModelMain.style.display = 'block';
};

const closePopupModal = () => {
  popModel.style.display = 'none';
  body.style.overflow = 'auto';
};
const closePopupMobModel = () => {
  popMobModelMain.style.display = 'none';
  body.style.overflow = 'auto';
};
document.querySelectorAll('.see-more').forEach((element) => element.addEventListener('click', () => {
  displayPopupModal(element.getAttribute('data-index'));
}));
document.querySelectorAll('#close').forEach((element) => element.addEventListener('click', () => {
  closePopupModal(element.getAttribute('data-index'));
}));
document.querySelectorAll('.see-project').forEach((element) => element.addEventListener('click', () => {
  displayMobPopup(element.getAttribute('data-index'));
}));
document.querySelectorAll('#close-mob').forEach((element) => element.addEventListener('click', () => {
  closePopupMobModel(element.getAttribute('data-index'));
}));

