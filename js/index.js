
const form = document.forms[0],
    email = document.getElementById("email"),
    emailError = document.querySelector("span.error"),
    button = document.querySelector("button[type='submit']"),
    iconError = document.querySelector('.error-icon');

email.addEventListener('input', e => {
    if(email.validity.valid) {
        emailError.innerHTML = "";
        emailError.classList = "error"
        button.style.transform = "translateX(0)"
        iconError.style.zIndex = "-1";
    } else {
        showError();
    }
})

form.addEventListener('submit', e => {
    if(!email.validity.valid) {
        showError();
        e.preventDefault();
    }
})

function showError() {
    if(email.validity.valueMissing) {
        emailError.innerHTML = "you must enter an email"
    } else if (email.validity.typeMismatch) {
        emailError.innerHTML = "Please provide a valid email"
        button.style.transform = "translateX(35px)";
        button.style.padding = "0.78em 2.5em";
        iconError.style.zIndex = "1"
    }
    emailError.classList = "error active";
}
