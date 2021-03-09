// Initialize foundation
$(document).foundation();

// Query the DOM
let drinkName = $("#drink-name");
let ingredientList = $("#ingredient-list");
let directionsList = $("#directions-list");

$(document).ready(() => {
  let link = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15346`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drink = data.drinks[0];
      writeName(drink);
      writeIngredients(drink);
      writeDirections(drink);
    });
});

function writeName(drink) {
  drinkName.text(drink.strDrink);
}

function writeIngredients(drink) {
  for (let i = 1; i < 16; i++) {
    let measure = "strMeasure" + i.toString();
    let ingredient = "strIngredient" + i.toString();
    if (drink[ingredient] !== null) {
        let output = $("<p>");
        output.text(`${drink[measure]} ${drink[ingredient]}`);
        ingredientList.append(output);
    }
  }
}

function writeDirections(drink) {
    let output = $("<p>");
    output.text(drink.strInstructions);
    directionsList.append(output);
}
