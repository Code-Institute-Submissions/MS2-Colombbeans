# Colombbeans - Testing documentation

[Main README.md file](/README.md)

[View the live project here.](https://mihaelavacarus.github.io/MS2-Colombbeans/)

## Testing

### Code Validators 

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input): no errors found. The validator returns some warnings which, after some quick research, I learned could be safely ignored.

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input): no errors found. The validator returns some "unknown vendor extension" warnings which, after some quick research, I learned could be safely ignored.

- [JShint](https://jshint.com/): no errors found. The validator returns a couple of warnings which, after some quick research, I learned could be safely ignored.

### Testing User Stories from User Experience (UX) Section

- #### As a user I want to find coffee suppliers, so that I can stock up my coffee shop.
    - The website is optimized for SEO search through meta keywords that help users land on my page. 
    - The title of the website is a descriptive wordplay (Colombia and beans), which presents users with a clear expectation of the product.
- #### As a user I want to know where the coffee comes from and what makes it so special, so that I can build prestige/popularity on the quality of the product.
    - The banner type header on the landing page informs users that the coffee is high quality and produced in Colombia.
    - In the second section (the coffee), the key characteristics of the beans are enumerated: Arabica beans ranking as the most superior from all varieties, rich and unique flavors (underlying tones of nutty, chocolaty or fruity aromas).
    - In the third section (the process), it is described how the beans are carefully hand-picked in a traditional way that allows only for the finest quality.
    - In the fourth section (FAQ), the first and fourth questions describe coffee characteristics that directly explain why Colombbeans is so special and how important fair trade is.
- #### As a user I want to know how the coffee is produced, so that I know if the product is suitable for my needs and what my customers want.
    - In the second section, on the back of the images, it is specified which flavors suit the different types of roasts best, so the user can decide based on their specific needs/demand.
    - In the third section, the entire coffee production process is described, so the user can decide if they are interested in a more traditionally produced coffee, depending on their needs/demand.
    - In the fourth section, the final statement encourages users to get in touch, so Colombbeans team can better understand their needs and cater to that, becoming an extension of their business.
- #### As a user, I want to know what the minimum order is, so that I can later decide if I need to increase my supply and how that will affect the costs.
    - In the fourth section, specifically in the last FAQ box, this is answered. Additionally, users are encouraged to get in touch with Colombbeans for discussing their unique needs on a case by case basis. 
- #### As a user, I want to know how the coffee is packaged and shipped, so that I am informed on the product standards.
    - In the third section, it is explained that the beans are sorted by quality and size to later be packed in bags and exported in the shortest of times, to ensure the fresh aroma.
    - In the fourth section, second FAQ, it is specified that regardless of location, delivery times only take up to three days maximum.
- #### As a user I want to be able to make an inquiry based on my needs, so that I can maybe start a business relationship.
    - The final and fifth section (contact) has a dedicated part with the Colombbeans's contact details (email and phone number), as well as a contact form that allows users to formulate their needs and also complete a location field, so that the inquiry is answered in the most relevant way.

- Check [here](./user-stories.pdf) a supporting document with screenshots illustrating the user stories addressed above.

### Further Testing 

- The Chrome extension [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) has been run and checked.
- The [Am I Responsive](http://ami.responsivedesign.is/) website has been used to ensure responsiveness.
- Website tested on [Mobile-Friendly Test - Google Search Console](https://search.google.com/test/mobile-friendly) and validated correctly.
- Run style sheet code through [Autoprefixer CSS online](http://autoprefixer.github.io/) and pasted prefixed code back into the style sheet.
- The website has been checked on several real devices such as large desktop, laptop, tablet, Iphone phones and several Android phones.
- The website has been opened on Safari, Chrome and Mozilla both on phones and laptops to check for any display issues across browsers.
- Family and friends have been asked to provide feedback and click around to flag any potential major issues.

### Manual Testing 

- **Home**
    - Auto-playing slideshow works as expected, showing all images in a smooth transition.
    - Logo is visible and contrasting well with the background. 
    - On portrait view, the section is still correctly displayed with all elements well visible.
    - On desktop navigation, the hovering effect works as expected.

- **The Coffee**
    - Icons display with enough space between text and imagery.
    - Images display at an appropriate size when the viewport is reduced.
    - Flip cards turn as expected and the text behind the images is well readable.
    - Fade in effect works as expected.

- **The Process**
    - Line height for the amount of text is appropriate, giving the reader enough breathing space.
    - Imagery displaying as expected and videos resize responsively when reducing the viewport.
    - Sliding in from the left and fade in on scroll effect work as expected.

- **FAQ**
    - Fade in effect works as expected.
    - FAQ boxes open and close as expected when clicking on the rest of them. Icon for closing/showing turns as expected.
    - Color transition effect works as expected.

- **Contact**
    - Mail hyperlink opens as expected.
    - Form validation for incorrect input works as expected. 
    - Form validation for correct input works as expected. 
    - Modal shows after submission of the form as expected, and the data is cleared from the fields.
    - "Send" button from the contact form prevents users from submitting if the fields are empty and only works if everything is filled in.
    - Email is sent correctly to my linked email address through EmailJS.
    - Google Maps display correctly with the pinned location. 

- **Common checks for all sections**
    - Smooth scroll working as expected.
    - Responsiveness from big to small sized devices.
    - Links redirect to the expected and indicated locations.
    - On desktop, the navigation menu highlights as expected when entering/exiting sections, providing the user with clear feedback where on the page is browsing.
    - On mobile, the navigation menu opens with the animated circle effect as expected and stays fixed to the top.

### Known Bugs
For my iPhone6 device, the mobile navigation menu is not opening as expected. Instead it opens with a delay and the menu flickers when trying to go through the different linked sections. I thought it could be related to this being an old model, but I could verify it works fine on an earlier device (Iphone5). I have connected the iPhone6 device to my laptop and debugged from the mobile view, but I could not resolve this.

After some more research, it seems the iPhone6 had some touch screen issues related to the operating system. Currently, the device runs on iOS 12, specifically, 12.5.1, which does suggest it might be related to a bug that cannot be fixed because the software cannot be updated to the newer iOS versions.

Note: the mobile menu works as expected on responsiveness tests online for iPhone6, so this also suggests it might be related to a bug in the phone OS, which can no longer be updated.