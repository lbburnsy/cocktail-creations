// Initialize foundation
$(document).foundation();

// Query the DOM

let jumbotronText = $("#jumbotron-text");
let cardContainer = $("#card-container");

$(document).ready(() => {
  let link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drinksArray = data.drinks;
      shuffleArray(drinksArray);
      console.log(drinksArray[0]);
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
                    <button class="button" value=${array[i].idDrink}>Get Recipe</button>
                </div>
            </div>
        </div>`;
    cardContainer.append(html);
  }
}
