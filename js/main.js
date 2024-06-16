
$(document).ready(function() {
    // Set initial title and background image
    $('#titleWeb').text(CONFIG.titleWeb);
    setInitialBackground();

    // Function to set background image based on viewport width
    function setInitialBackground() {
        // Check if viewport width is less than or equal to 768px (considered as mobile view)
        if ($(window).width() <= 768) {
            $('body').css('background-image', 'url(./images/background2.jpg)');
        } else {
            $('body').css('background-image', 'url(./images/' + CONFIG.background + ')');
        }
    }

    // Event listener for window resize to dynamically update background image
    $(window).resize(function() {
        setInitialBackground();
    });

    // Set images for minbox and maxbox
    for (let i = 1; i <= 6; i++) {
        $('#min' + i).css('background-image', 'url(./images/' + CONFIG['min' + i] + ')');
    }

    for (let i = 1; i <= 6; i++) {
        $('#max' + i).css('background-image', 'url(./images/' + CONFIG['max' + i] + ')');
    }
});