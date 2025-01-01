document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const logo = document.getElementById("logo");

  // Enable dark mode by default
  if (body.classList.add("dark-mode") ) {
    logo.src = "Assets/logoBlack.png";
    toggleIcon.classList.add("fas", "fa-sun");
  } else {
    logo.src = "Assets/logoScreen.png";
    toggleIcon.classList.add("fas", "fa-moon"); 
  }
  logo.src = "Assets/logoBlack.png"; // Set the dark mode logo by default
});


// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;
//   const toggleIcon = document.getElementById("toggleIcon");

//   // Check if dark-mode class exists and set the initial icon
//   if (body.classList.contains("dark-mode")) {
//     toggleIcon.classList.add("fas", "fa-sun"); // Light mode icon
//   } else {
//     toggleIcon.classList.add("fas", "fa-moon"); // Dark mode icon
//   }
// });

function toggleDarkModeMobile() {
  const body = document.body;
const logo = document.getElementById("logo");
const toggleIcon = document.getElementById("toggleIcon");

// Toggle dark mode class on body
body.classList.toggle("dark-mode");

// Change logo based on the mode
if (body.classList.contains("dark-mode")) {
  logo.src = "Assets/logoBlack.png"; // Path to your dark mode logo
  toggleIcon.classList.replace("fa-moon", "fa-sun"); // Update icon to sun
} else {
  logo.src = "Assets/logoScreen.png"; // Path to your light mode logo
  toggleIcon.classList.replace("fa-sun", "fa-moon"); // Update icon to moon
}

}

function toggleDarkMode() {
  const body = document.body;
  const logo = document.getElementById("logo");

  // Toggle dark mode class on body
  body.classList.toggle("dark-mode");

  // Change logo based on the mode
  if (body.classList.contains("dark-mode")) {
    logo.src = "Assets/logoBlack.png"; // Path to your dark mode logo
  } else {
    logo.src = "Assets/logoScreen.png"; // Path to your light mode logo
  }
}
  
  

  const carousel = document.querySelector('.carousel');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let scrollAmount = 0;
  let cardMoved = 0;
  const scrollStep = document.querySelector('.card').offsetWidth ; // Card width + gap
  const totalCards = document.querySelectorAll('.card').length;
  console.log("card totoal",totalCards);
  console.log("scroll step",document.querySelector('.card').offsetWidth);
  

  nextButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    cardMoved = cardMoved + 1;
    if (cardMoved >= totalCards) {
      scrollAmount = 0;
      cardMoved = 0;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    cardMoved = cardMoved - 1;
    if (cardMoved < 0 || scrollAmount < 0) {
      scrollAmount = 0;
      cardMoved = 0;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

 


  const toggleBtn = document.querySelector(".toggle_btn");
      const toggleBtnIcon = document.querySelector(".toggle_btn i");
      const dropDownMenu = document.querySelector(".dropdown_menu");
      toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle("open");
        const isOpen = dropDownMenu.classList.contains("open");
        toggleBtnIcon.classList = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      };

  const onToggleClose = () => {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  };