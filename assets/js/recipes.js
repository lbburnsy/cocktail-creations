// Initialize foundation
$(document).foundation();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const alcohol = urlParams.get('alcohol');

// Query the DOM
let drinkName = $("#jumbotron-text");
let ingredientList = $("#ingredient-list");
let directionsList = $("#directions-list");
let thumbnail = $("#thumbnail")

$(document).ready(() => {
  let link = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${alcohol}`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drink = data.drinks[0];
      writeName(drink);
      writeIngredients(drink);
      writeDirections(drink);
      writeThumbnail(drink);
    });
});

function writeName(drink) {
  drinkName.text(drink.strDrink);
}

function writeIngredients(drink) {
  for (let i = 1; i < 16; i++) {
    let measure = "strMeasure" + i.toString();
    let ingredient = "strIngredient" + i.toString();
    let output = $("<p>");
    if (drink[ingredient] !== null && drink[measure] !== null) {
        output.text(`${drink[measure]} ${drink[ingredient]}`);
        ingredientList.append(output);
    } else {
      output.text(`${drink[ingredient]}`);
    }
  }
}

function writeDirections(drink) {
    let output = $("<p>");
    output.text(drink.strInstructions);
    directionsList.append(output);
}

function writeThumbnail(drink) {
  let output = $("<img>");
  output.attr("src", drink.strDrinkThumb);
  thumbnail.append(output);
}