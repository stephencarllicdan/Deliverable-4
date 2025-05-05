document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;

  function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (!track) return;

    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  }

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);

  
  const menuBtn = document.getElementById('MenuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      window.location.href = "Menu.html"; 
    });
  }
});


  

  
  
  

  
  
  

  

