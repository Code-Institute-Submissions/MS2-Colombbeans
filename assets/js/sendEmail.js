function sendMail(contactForm) {
    emailjs.send("service_ci6295f", "colombbeans", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "location": contactForm.location.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        });

        return false;
}