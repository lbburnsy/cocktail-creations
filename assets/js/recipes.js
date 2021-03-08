// Initialize foundation
$(document).foundation();

// Query the DOM
let drinkName = $("#drink-name");
let ingredientList = $("#ingredient-list");
let directions = $("#directions");

$(document).ready(() => {
  let link = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15346`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drink = data.drinks[0];
      writeName(drink);
      writeIngredients(drink);
    });
});

function writeName(drink) {
  drinkName.text(drink.strDrink);
}

function writeIngredients(drink) {
  for (let i = 1; i < 16; i++) {
    let ingredient = "strIngredient" + i.toString();
    if (drink[ingredient] !== null) {
        console.log("good ingredient")
    }
  }
}

// if (drink.strIngredient + i !== null) {
//     console.log(drink.strIngredient + i)
// }
// let html = `
//             <p>${drink.strMeasure[i]} ${drink.strIngredient[i]}</p>
//         }`;
//         ingredientList.append(html);
