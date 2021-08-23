// Query select for all buttons
const buttons = document.querySelectorAll(".expand-button")

// Loop through each button and add an event listener
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Find closest card to click event and save to variable
    const card = e.target.closest(".card")
    // Query select card
    const cardBody = card.querySelector(".card-body")
    // If/else to change text of button and to expand/collapse elements
    if (button.innerHTML === "Expand") {
      button.innerHTML = "Collapse"
      cardBody.classList.add("show")
    } else {
      button.innerHTML = "Expand"
      cardBody.classList.remove("show")
    }
  })
})
