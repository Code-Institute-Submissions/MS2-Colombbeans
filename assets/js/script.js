/*jshint esversion: 6 */

$(document).ready(function () {
    //Function to animate the slideshow overlay from the home section
    //Credit for inspo from: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
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
//Credit for inspo from: https://www.youtube.com/watch?v=H4MkGzoACpQ
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
//Credit for inspo from: https://www.youtube.com/watch?v=huVJW23JHKQ
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

// Script to enable pseudoelements to work with Fontawesome
// Credit for solution from https://stackoverflow.com/questions/47712987/font-awesome-5-on-pseudo-elements
window.FontAwesomeConfig = {
    searchPseudoElements: true
};

//Function to make the accordion containers open and close onclick
//Credit for inspo from: https://codepen.io/johnhubler/pen/bGpMYwq
$('.accordion-container > li > .faq-answer').hide();
$('.accordion-container > li').click(function() {
        if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".faq-answer").slideUp();
        } else {
        $(".accordion-container > li.active .faq-answer").slideUp();
        $(".accordion-container > li.active").removeClass("active");
        $(this).addClass("active").find(".faq-answer").slideDown();
    }
    return false;
});

//Function to display map of coordinates
//Documentation used as inspo for running the maps code from: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-typescript
function initMap() {
  // The location of Colombbeans
    const Colombbeans = { lat: 6.558530, lng: -75.827629 };
    // The map, centered at Colombbeans
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: Colombbeans,
    });
    // The marker, positioned at Colombbeans
    const marker = new google.maps.Marker({
        position: Colombbeans,
        map: map,
    });
}

//Function to flip features cards
const card = document.querySelectorAll('.features-card');
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
        card[i].classList.toggle("active");
    });
}

//Function to mark active class on desktop navigation based on position
//Credit for inspo to Kevin Powell explaining intersection observer and how to use it here https://www.youtube.com/watch?v=T8EYosX4NOo and https://www.youtube.com/watch?v=huVJW23JHKQ
const options = {
    threshold: 0.6,
};
const activeNav = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            let currentActiveNav = document.querySelector("#desktop-nav div a.active");

            if (currentActiveNav) {
                currentActiveNav.classList.remove("active");
            }

            let newActiveNav = document.querySelector(
                `#desktop-nav div a[href="#${entry.target.getAttribute("id")}"]`
            );
            newActiveNav.classList.add("active");
        }
    });
};

const observer = new IntersectionObserver(activeNav, options);
const sections = document.querySelectorAll("section");

sections.forEach((section)=> {
    observer.observe(section);
});