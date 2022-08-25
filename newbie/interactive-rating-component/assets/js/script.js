/* Elements */
const rating = document.getElementsByClassName("rating")[0];
const ratingNumber = document.querySelectorAll(".rating-number");
let ratingState = false;
let ratingValue = 0;

const thanks = document.getElementsByClassName("thanks")[0];
let thanksSelectedValue = document.getElementsByClassName("thanks-selected-value")[0];

/* Rate */ 
function rate(number) {
    // Remove the active state
    ratingNumber.forEach(element => {
        element.classList.remove("rating-number-active");
    });

    // Add the active state to the current number
    ratingNumber[number - 1].classList.add("rating-number-active");

    // Set the state to true
    ratingState = true;

    // Set the value to the selected value
    ratingValue = number;
}

/* Submit */
function submit() {
    // If the state is true
    if(ratingState === true) {
        // Change the step
        rating.classList.add("rating-hide");
        thanks.classList.add("thanks-show");

        // Set the selected value
        thanksSelectedValue.innerText = ratingValue;
    }
}