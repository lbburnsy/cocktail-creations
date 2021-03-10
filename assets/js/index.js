// Initialize foundation CSS
$(document).foundation();

// Query the DOM
let drinkBtn = $(".button");

// Function to handle the button clicks
function handleButtonClick(event) {
  // Sets the choice to the text of the button clicked
  let choice = event.target.textContent.toLowerCase();
  // Sets the window location to pass the choice as a paramter
  window.location = `./results.html?alcohol=${choice}`;
}

// Runs the function on the button click
drinkBtn.on("click", (e) => {
  localStorage.removeItem("drinks");
  handleButtonClick(e);
});
