// Document Selectors

const form = document.querySelector("#form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#password-confirmation")
const terms = document.querySelector("#terms")
const errorsList = document.querySelector(".errors-list")
const errorContainer = document.querySelector(".errors")

// Create empty array to hold error message
// Call clearError function to check for any errors
// If else statements to push error messages to error message array
// If array has an values prevent form from submitting

form.addEventListener("submit", (e) => {
  const errorMessages = []
  clearErrors()
  if (username.value.length < 6) {
    errorMessages.push("Username must be at least than 6 characters")
  }
  if (password.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters")
  }
  if (password.value != passwordConfirmation.value) {
    errorMessages.push("Passwords must match")
  }
  if (!terms.checked) {
    errorMessages.push("Must agree to terms")
  }
  showErrors(errorMessages)

  if (errorMessages.length > 0) {
    e.preventDefault()
  }
})

// Practice with while loop
// Check for children in array. If so remove until array has zero values
// Remove show class to hide container

function clearErrors() {
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0])
  }

  errorContainer.classList.remove("show")
}

// Loop through array and create list elements
// Set list text to error message and add to the error list
// Add show to container to present error messages

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li")
    li.innerText = errorMessage
    errorsList.appendChild(li)
  })
  errorContainer.classList.add("show")
}
