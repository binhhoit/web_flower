$(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})
function passf() {
    document.getElementById("nav").className = "navbar-default navbar-fixed-top replace";
}
function passs() {
    document.getElementById("nav").className = "navbar navbar-default navbar-fixed-top";
}

var n = 0;
function info() {

    if (n % 2 == 0) {
        document.getElementById("info").className = 'form-control blog_textc  pass';
        n++;
    }
    else {
        document.getElementById("info").className = 'form-control blog_textc  passnone';
        n++;
    }

}

var temp = "";
function clickR(temp) {

    if (temp == "a") {
        document.getElementById("receiverstore").className = 'form-control blog_textc  pass';
        document.getElementById("receiverHome").className = 'form-control blog_textc  passnone';
    } else {
        if (temp == "b") {
            document.getElementById("receiverHome").className = 'form-control blog_textc  pass';
            document.getElementById("receiverstore").className = 'form-control blog_textc  passnone';
        }

    }

}

function clickP(a) {

    if (a == "b") {
        document.getElementById("pal_inter").className = 'form-control blog_textc  pass';
        document.getElementById("pal_money").className = 'form-control blog_textc  passnone';
        document.getElementById("pal_bank").className = 'form-control blog_textc  passnone';
    } else {
        if (a == "a") {
            document.getElementById("pal_money").className = 'form-control blog_textc  pass';
            document.getElementById("pal_bank").className = 'form-control blog_textc  passnone';
            document.getElementById("pal_inter").className = 'form-control blog_textc  passnone';
        } else {
            if (a == "c") {
                document.getElementById("pal_bank").className = 'form-control blog_textc  pass';
                document.getElementById("pal_money").className = 'form-control blog_textc  passnone';
                document.getElementById("pal_inter").className = 'form-control blog_textc  passnone';
            }
        }
    }
}