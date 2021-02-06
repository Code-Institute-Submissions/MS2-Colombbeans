/*jshint esversion: 6 */

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const locality = document.getElementById("location");
const message = document.getElementById("message");

// Event listener to prevent default form from being submitted and check inputs
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(checkInputs()) {
        $("#submitForm").modal('show');
        sendMail(form);
        form.reset();
        $(".form-group").removeClass("success");
        return true;
    }

    return false;
});

// Function to validate inputs
function checkInputs() {
    const nameValue = name.value;
    const emailValue = email.value;
    const locationValue = locality.value;
    const messageValue = message.value;

    let result = true;

    // Validate Name field
    if (!nameValue) {
        setErrorFor(name, "Please enter your name");
        result = false;
    } else {
        setSuccessFor(name);
    }

    // Validate Email field
    if (emailValue === "") {
        setErrorFor(email, "Please enter your email address");
        result = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please enter a valid email address");
        result = false;
    } else {
        setSuccessFor(email);
    }

    // Validate Location field
    if (locationValue === "") {
        setErrorFor(locality, "Please enter your location");
        result = false;
    } else {
        setSuccessFor(locality);
    }

    // Validate Message field
    if (messageValue === "") {
        setErrorFor(message, "Please let us know more about your inquiry");
        result = false;
    } else {
        setSuccessFor(message);
    }

    return result;
}

// Function that adds error class
function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");

    //Add error message inside small tag
    small.innerText = message;

    //Add error class and remove success class
    $(formGroup).removeClass("success");
    $(formGroup).addClass("error");
}

// Function that adds success class
function setSuccessFor(input) {
    const formGroup = input.parentElement;

    //Add success class and remove error class
    $(formGroup).removeClass("error");
    $(formGroup).addClass("success");
}

// Function to check if email input is valid
function isEmail(email) {
    // Regex from https://www.w3resource.com/javascript/form/email-validation.php
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

// Function to send email via EmailJS
function sendMail(contactForm) {
    emailjs.send("service_ci6295f", "colombbeans", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "location": contactForm.location.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            });

    return false;
}