// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var topnav = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = topnav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}