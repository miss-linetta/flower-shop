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







