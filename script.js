// Select elements from the DOM
let autotype = document.querySelector("#auto-type");
let closeMenu = document.querySelector("#closeMenu");
let openMenu = document.querySelector("#openMenu");
let menu = document.querySelector("#menu");
let slidelink = document.querySelectorAll(".header-container nav ul li a");

// Close the menu when a link is clicked
slidelink.forEach((el) => {
  el.addEventListener("click", () => {
    menu.style.right = "-500px";
  });
});

// Function to toggle the menu slide
function toggleSlide() {
  if (menu.style.right === "0px") {
    menu.style.right = "-500px";
  } else {
    menu.style.right = "0";
  }
}

// Event listeners for opening and closing the menu
openMenu.addEventListener("click", toggleSlide);
closeMenu.addEventListener("click", toggleSlide);

// Initialize the typed.js effect
var typed = new Typed(autotype, {
  strings: [
    "DevOps Engineer",
    "Cloud Engineer",
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

// Card styling using GSAP
const card = document.querySelector(".card-content");
const img = card.querySelector("img");

// Mouse move effect for the card
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (centerY - y) / 10;
  const rotateY = (x - centerX) / 10;

  gsap.to(card, {
    duration: 0.5,
    rotateX: rotateX,
    rotateY: rotateY,
    ease: "power1.out",
  });

  gsap.to(img, {
    duration: 0.5,
    translateZ: 50,
    ease: "power1.out",
  });
});

// Reset card rotation on mouse leave
card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    duration: 0.5,
    rotateX: 0,
    rotateY: 0,
    ease: "power1.out",
  });

  gsap.to(img, {
    duration: 0.5,
    translateZ: 0,
    ease: "power1.out",
  });
});

// About Card styling using GSAP
const aboutCard = document.querySelector(".about-card");
const aboutImg = aboutCard.querySelector("img");

// Mouse move effect for the about card
aboutCard.addEventListener("mousemove", (e) => {
  const rect = aboutCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (centerY - y) / 10;
  const rotateY = (x - centerX) / 10;

  gsap.to(aboutCard, {
    duration: 0.5,
    rotateX: rotateX,
    rotateY: rotateY,
    ease: "power1.out",
  });

  gsap.to(aboutImg, {
    duration: 0.5,
    translateZ: 50,
    ease: "power1.out",
  });
});

// Reset about card rotation on mouse leave
aboutCard.addEventListener("mouseleave", () => {
  gsap.to(aboutCard, {
    duration: 0.5,
    rotateX: 0,
    rotateY: 0,
    ease: "power1.out",
  });

  gsap.to(aboutImg, {
    duration: 0.5,
    translateZ: 0,
    ease: "power1.out",
  });
});

// Tab functionality
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  // Remove active class from all tab links
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  // Hide all tab contents
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  // Add active class to the clicked tab link and show the corresponding content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
