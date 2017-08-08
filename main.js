let url = 'http://recipepuppyproxy.herokuapp.com/api/?q=';
let button = document.querySelector('#button');
let output = document.querySelector('.displayOutput');
let input = document.querySelector('#search_bar');


button.addEventListener('click', function(event) {

  let searchInput = input.value;

  input.value = '';
  let newSearch = url;
  recipes_finder(newSearch);
})

function recipes_finder(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(JSON.stringify(data));
      displayNewOutput(data);
    })
}

function displayNewOutput(data) {
  let results = data.results;
  let newContent = '';
  results.forEach(function(recipe) {
    let trueContent = `
      <div class='recipe'>
        <div class='recipeName'>
          ${recipe.title}
        </div>
        <div class='ingredients'>
          ${recipe.ingredients}
        </div>
        <div class='image'>
          <a href='${recipe.href}'><img src='${recipe.thumbnail}'>  </a>
        </div>
      </div>
    `

    newContent += trueContent;
  });
  output.innerHTML = newContent;
}
