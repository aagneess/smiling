// Scroll to event
const down = document.querySelector(".scroll-down");
const element = document.querySelector(".event-page");

  down.addEventListener("click", () => {
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
  });

// Scroll to top
scrollButton = document.getElementById("btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}



// PREVENT RELOAD ON EVENT-BUTTON + CONFIRMATION
function preventClick(event) {
  event.preventDefault();
}
document.querySelector(".event-button").addEventListener("click",preventClick);

function confirmation() {
  alert('Tack för din anmälan!');
}


// READ MORE...
function preventClick(event) {
  event.preventDefault();
}
document.getElementById("myBtn").addEventListener("click",preventClick);

function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Läs mer"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Läs mindre"; 
    moreText.style.display = "inline";
  }
}




// Get-info
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const firstName = urlParams.get('f')
const lastName = urlParams.get('l')
const email = urlParams.get('email')
const occupation = urlParams.get('occupation')

console.log(firstName, lastName, email, occupation);

// http://127.0.0.1:5500/index.html?name=janedoe&email=example@gmail.com&occupation=influencer

const name = document.querySelector(first-name);


