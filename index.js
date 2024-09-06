//START OF JAVASCRIPT PAGE FOR APPVENTURES


/*

Mobile Navbar Toggle
This code will add a button to your mobile navbar that toggles the navbar menu when clicked. This can make it easier for users to navigate your website on mobile devices.

document.getElementById("navbar-toggle").addEventListener("click", function() {
    document.getElementById("navbar-menu").classList.toggle("active");
});



This code will make the navbar on your website stick to 
the top of the screen when the user scrolls down. This can 
make navigation easier for users.


Sticky Navbar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
 if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
 } else {
    navbar.classList.remove("sticky");
 }

 User Behavior Tracking
To track user behavior on the landing page, you can use JavaScript
 to capture events and send the data to a server.

 document.getElementById("myButton").addEventListener("click", function() {
    // Send the data to the server
    sendDataToServer({event: "buttonClicked", buttonId: "myButton"});
//scrolls down
    window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        // Send the data to the server
        sendDataToServer({event: "scrollDown", scrollPosition: window.scrollY});
    }
});
});
}*/