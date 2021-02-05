const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const locality = document.getElementById("location");
const message = document.getElementById("message");

// Event listener to prevent default form from being submitted and check inputs
form.addEventListener("submit", (e) => {
    e.preventDefault();

  // Call checkInputs function
    checkInputs();
});

// Function to validate inputs
function checkInputs() {
    const nameValue = name.value;
    const emailValue = email.value;
    const locationValue = locality.value;
    const messageValue = message.value;

    // Validate Name field
    if (!nameValue) {
        setErrorFor(name, "Please enter your name");
    } else {
        setSuccessFor(name);
    }

    // Validate Email field
    if (emailValue === "") {
        setErrorFor(email, "Please enter your email address");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please enter a valid email address");
    } else {
        setSuccessFor(email);
    }

    // Validate Location field
    if (locationValue === "") {
        setErrorFor(locality, "Please enter your location");
    } else {
        setSuccessFor(locality);
    }

    // Validate Message field
    if (messageValue === "") {
        setErrorFor(message, "Please let us know more about your inquiry");
    } else {
        setSuccessFor(message);
    }
}

// Function that adds error class
function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");

    //Add error message inside small tag
    small.innerText = message;
    //Add error class
    formGroup.className = "form-group col-lg-8 col-md-12 col-sm-12 pb-4 error";
}

// Function that adds success class
function setSuccessFor(input) {
    const formGroup = input.parentElement;
    //Add success class
    formGroup.className = "form-group col-lg-8 col-md-12 col-sm-12 pb-4 success";
}

// Function to check if email input is valid
function isEmail(email) {
    // Regex from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

// Function to display modal on form submission
$("#form").on("submit", function (e) {
    var showModal = true;
    $(".form-control").each(function (element) {
        if ($(this).val() == "") {
            showModal = false;
        }
    });
    if (showModal) {
        $("#submitForm").modal("show");
    }
});


// Function to send email via EmailJS
function sendMail(contactForm) {
    emailjs.send("service_ci6295f", "colombbeans", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "location": contactForm.location.value,
        "message": contactForm.message.value
    })
    .then;

        // Reset input fields after submission
        document.getElementById("form").reset();
    return false;
}