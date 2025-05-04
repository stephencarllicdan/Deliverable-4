function goToMenu() {
    alert("Navigating to menu...");
    // You can replace this with: window.location.href = 'menu.html';
  }
  
  let currentSlide = 0;
  
  function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
  
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });
  
  // Optional: auto play every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);


  function goToMenu() {
    // Scroll to the first carousel section (the one with coffee items)
    const menuSection = document.querySelector(".carousel-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  

  

