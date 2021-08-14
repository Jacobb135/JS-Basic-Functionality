// Query Selectors

const form = document.querySelector("#quiz-form")
const answers = Array.from(document.querySelectorAll(".answer"))

const questions = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert")

// Created Event Listener
// Prevents default form submission
// By default adds incorrect class to check for submitted answers
// Loops through answers to checked if they have been checked
// If correct answer has been selected add class true
// Check length of selected answer array vs questions
// If every answer is true add alert

form.addEventListener("submit", (e) => {
  e.preventDefault()

  questions.forEach((questions) => {
    questions.classList.add("incorrect")
    questions.classList.remove("correct")
  })

  const selectedAnswers = answers.filter((answer) => answer.checked)

  selectedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true"
    const questionItem = answer.closest(".question-item")

    if (isCorrect) {
      questionItem.classList.add("correct")
      questionItem.classList.remove("incorrect")
    } else {
      questionItem.classList.add("incorrect")
      questionItem.classList.remove("correct")
    }

    const allTrue = selectedAnswers.every((answer) => answer.value === "true")
    const allSelected = selectedAnswers.length === questions.length

    if (allTrue && allSelected) {
      alert.classList.add("active")
      setTimeout(() => {
        alert.classList.remove("active")
      }, 1000)
    }
  })
})
