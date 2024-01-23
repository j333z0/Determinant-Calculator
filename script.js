const inputs = document.querySelectorAll(".input")
const btn = document.querySelector(".btn")
const answer = document.querySelector(".answ")


// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]


btn.addEventListener("click", () => {
    let answerVal = 
    inputs[0].value * inputs[4].value * inputs[8].value
    + 
    inputs[1].value * inputs[5].value * inputs[6].value
    +
    inputs[3].value * inputs[7].value * inputs[2].value
    -
    inputs[6].value * inputs[4].value * inputs[2].value
    -
    inputs[3].value * inputs[1].value * inputs[8].value
    -
    inputs[5].value * inputs[7].value * inputs[0].value


    answer.innerHTML = "Determinant is: " + answerVal
})