$(document).ready(function () {
    //Function to animate the slideshow overlay from the home section
    $(".home-gallery > div:gt(0)").hide();
    setInterval(function () {
        $(".home-gallery > div:first")
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end(3000)
            .appendTo(".home-gallery");
    }, 5000);
});

//Function to make the hamburger button display the navigation menu
const hamburger = document.querySelector(".hamburger");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const mobileLinks = document.querySelectorAll(".mobile-nav-links li");

hamburger.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("open");
    mobileLinks.forEach(link => {
    link.classList.toggle("fade");
    });
});

mobileNavLinks.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("open");
    mobileLinks.forEach(link => {
        link.classList.toggle("fade");
    });
});

//Function for fade-in and slide-in animation effects
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px -250px 0px 0px"
    };
const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, 
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
