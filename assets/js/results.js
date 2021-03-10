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
  jumbotronText.text(alcohol.toUpperCase());
  let link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      let drinksArray = data.drinks;
      shuffleArray(drinksArray);
      // displayDrinkCards(drinksArray);
      let storedArray = JSON.parse(localStorage.getItem("drinks"));
      if (storedArray == undefined) {
        setLocalStorage(drinksArray);
        displayDrinkCards(drinksArray);
      } else {
        displayDrinkCards(storedArray);
      };
    });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayDrinkCards(array) {
  for (let i = 0; i < 8; i++) {
    let html = `
        <div class="cell large-3 medium-6">
            <div class="card">
                <div class="card-divider align-center">
                    <h4>${array[i].strDrink}</h4>
                </div>
                <img src="${array[i].strDrinkThumb}"/>
                <div class="card-section text-center">
                    <button class="hollow button align-self-center" id="btn" value=${array[i].idDrink}>Get Recipe</button>
                </div>
            </div>
        </div>`;
    
    cardContainer.append(html);
  }
}

function setLocalStorage(array) {
  let newArray = [];
  for (let i=0; i < 8; i++) {
    newArray.push(array[i]);
  }
  localStorage.setItem("drinks", JSON.stringify(newArray));
}

document.addEventListener('click', function(e) {
  if (e.target && e.target.id == 'btn') {
    window.location = `./recipes.html?id=${e.target.value}&alcohol=${alcohol}`;
  }
})