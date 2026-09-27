document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     SEARCH TABS
  ================================= */

  const searchTabs = document.querySelectorAll(".search-tab");

  searchTabs.forEach(tab => {
    tab.addEventListener("click", () => {

      searchTabs.forEach(item => {
        item.classList.remove("active");
      });

      tab.classList.add("active");
    });
  });


  /* ================================
     HEART BUTTONS
  ================================= */

  const hearts = document.querySelectorAll(".heart-btn");

  hearts.forEach(button => {

    button.addEventListener("click", () => {

      button.classList.toggle("active");

      if (button.classList.contains("active")) {
        button.textContent = "♥";
      } else {
        button.textContent = "♡";
      }

    });

  });



  /* ================================
     NAVBAR SCROLL
  ================================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 20) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }

  });

});


/* ================================
   BUY PAGE
================================ */

function filterCars() {

  alert(
    "Search applied! In this frontend demo, the car listings are static."
  );

}


/* ================================
   SELL PAGE
================================ */

function submitSellForm(event) {

  event.preventDefault();

  alert(
    "Your car details have been submitted successfully! This is a frontend demo, so the information is not stored."
  );

}


/* ================================
   EXCHANGE PAGE
================================ */

function submitExchangeForm(event) {

  event.preventDefault();

}


function showExchangeMessage() {

  alert(
    "Exchange options found! This frontend demo will display matching cars in the next version."
  );

}


/* ================================
   CONTACT PAGE
================================ */

function submitContactForm(event) {

  event.preventDefault();

  alert(
    "Thank you for contacting CarForSale! Your message has been received in this frontend demo."
  );

}