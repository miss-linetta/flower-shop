// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaXR-183ZtpZB5VNHuI51qXLOeip1OiOY",
  authDomain: "flower-shop-47691.firebaseapp.com",
  projectId: "flower-shop-47691",
  storageBucket: "flower-shop-47691.appspot.com",
  messagingSenderId: "744347452166",
  appId: "1:744347452166:web:964abdb25233ef28c8d487",
  measurementId: "G-QX9NTX5JLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function createContentTemplate(flower) {
  const article = 
   `<article class="card" id="content">
      <img src="${flower.image}">
      <section>
        <p>${flower.name}:</p>
        <p>${flower.flovers}</p>
        <p>${flower.price} грн</p>
      </section>
    </article>`;

  return createFragmentTemplate(article);
}


function createFragmentTemplate(str) {
  const template = document.createElement('template');

  template.innerHTML = str;

  return template.content;
}


function appendContent(id, content) {
  const el = document.getElementById(id);

  el.appendChild(content);
}

function init() {
  fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
    .then((res) => res.json())
    .then((data) => {
      const fragment = document.createDocumentFragment();
      
      data.forEach((flower) => {
        fragment.appendChild(createContentTemplate(flower));
    }) 

    appendContent('content', fragment);

    });
}

init();







