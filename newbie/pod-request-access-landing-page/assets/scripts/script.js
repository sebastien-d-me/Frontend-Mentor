/* Elements */
const emailAddress = document.getElementsByName("email-address")[0];
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputError = document.getElementById("landing-form-error");

/* Messages */
const messages = ["Oops! Please add your email", "Oops! Please check your email"];

/* Button */
function request() {
    if(emailAddress.value === "") {
        inputError.innerText = messages[0];
    } else {
        inputError.innerText = "";
    }

    if(emailAddress.value !== "") {
        if(regex.test(emailAddress.value) === false) {
            inputError.innerText = messages[1];
        } else {
            inputError.innerText = "";
        }
    }
}