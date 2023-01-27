const div = document.getElementById('responses');
const template = document.getElementById('templateResponses');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://run.mocky.io/v3/96769b9a-9647-4e9a-a4a7-5099894fc877');

xhr.responseType = 'json';

xhr.onload = function() {
  const res = xhr.response;

  for(const item of res) {
    const el = document.importNode(template.responses);

    const h5 = document.querySelector('h5');
    h5.textContent = item.name;

    const p = el.querySelector('p');
    p.textContent = item.body;

    div.append(el);
  }

}

xhr.send();


// function createFigureTemplate(response) {
//   const figure = 
//    `<figure class="response" id="response">
//       <h5>${response.name}</h5>
//       <p>${response.body}</p>
//     </figure>`;

//   return createFragmentFigTemplate(figure);
// }


// function createFragmentFigTemplate(str) {
//   const templateFigure = document.createElement('template');

//   templateFigure.innerHTML = str;

//   return templateFigure.responses;
// }


// function appendFigure(id, responses) {
//   const elem = document.getElementById(id);

//   elem.appendChild(responses);
// }

// function init() {
//   fetch('https://run.mocky.io/v3/96769b9a-9647-4e9a-a4a7-5099894fc877')
//     .then((res) => {
//       res.ok;
//       res.json();
//     })

//     .then((data) => {
//       const fragmentFigure = document.createDocumentFragment();
      
//       data.forEach((response) => {
//         fragmentFigure.appendChild(createFigureTemplate(response));
//     }) 

//     appendFigure('responses', fragmentFigure);

//     });
// }

// init();