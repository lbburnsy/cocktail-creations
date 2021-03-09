// Initialize foundation
$(document).foundation();

// Sets the search value by pulling from the lin k
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const alcohol = urlParams.get('alcohol');

// Query the DOM

let jumbotronText = $("#jumbotron-text");
let cardContainer = $("#card-container");

$(document).ready(() => {
  jumbotronText.text(alcohol);
  let link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drinksArray = data.drinks;
      shuffleArray(drinksArray);
      displayDrinkCards(drinksArray);
    });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayDrinkCards(array) {
  for (let i = 0; i < 10; i++) {
    let html = `
        <div class="cell small-3">
            <div class="card">
                <div class="card-divider">
                    <h4>${array[i].strDrink}</h4>
                </div>
                <img src="${array[i].strDrinkThumb}"/>
                <div class="card-section">
                    <button class="button" id="btn" value=${array[i].idDrink}>Get Recipe</button>
                </div>
            </div>
        </div>`;
    
    cardContainer.append(html);
  }
}

document.addEventListener('click', function(e) {
  if (e.target && e.target.id == 'btn') {
    window.location = `./recipes.html?alcohol=${e.target.value}`;
  }
})