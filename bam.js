  // Select the hamburger button and the nav links container
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu on click
  hamburger.addEventListener("click", () => {
    // Show or hide the nav links
    navLinks.classList.toggle("active");

    // Animate hamburger into an "X"
    hamburger.classList.toggle("toggle");
  });