$(document).ready(function () {
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