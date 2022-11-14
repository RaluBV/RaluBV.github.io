// adding an event listener for Enter keypress on the search input field
var searchInput = document.getElementById("searchBar");
searchInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
        search();
    }
});

// function to search for a given text inside the document
function findString(text) {
    document.querySelector("#output").textContent=`String found? ${window.find(text)}`;
}

// function that adds the search action to the button/Enter keypres
function search() {
    let input = document.getElementById('searchBar').value
    input=input.toLowerCase();
    findString(input);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}



checkDarkMode();

  

function enableLightMode(){

  document.body.classList.remove("dark");

  localStorage.darkMode = false;

}

function enableDarkMode(){

  document.body.classList.add("dark");

  localStorage.darkMode = true;

}

function checkDarkMode(){

  if(localStorage.darkMode){

    document.body.classList.add("dark");

  }

  else{

    document.body.classList.remove("dark");

  }

}
//navbar
const navSlide = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  menu.addEventListener('click', () => {

      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          }
          else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });

  });

}

navSlide();
