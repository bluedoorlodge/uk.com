document.addEventListener("DOMContentLoaded", function () {

/* ==============================
   TESTIMONIAL ROTATION (FINAL)
============================== */
const testimonials = document.querySelectorAll('.testimonial');

if (testimonials.length > 0) {
  let index = 0;

  // force clean start
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[0].classList.add('active');

  setInterval(() => {
    testimonials[index].classList.remove('active');

    index = (index + 1) % testimonials.length;

    testimonials[index].classList.add('active');

  }, 5000);
}

  /* ==============================
     TOGGLE SECTIONS (FADE)
  ============================== */
  const sections = document.querySelectorAll('.toggle-section');
  let currentIndex = 0;

  if (sections.length > 0) {
    sections[currentIndex].classList.add('visible');

    setInterval(() => {
      sections[currentIndex].classList.remove('visible');
      currentIndex = (currentIndex + 1) % sections.length;
      sections[currentIndex].classList.add('visible');
    }, 5000);
  }

  /* ==============================
     IMAGE ROTATION (EQUIPMENT)
  ============================== */
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
  ];

  let imageIndex = 0;
  const imgElement = document.getElementById('equipment-img');

  if (imgElement) {
    setInterval(() => {
      imageIndex = (imageIndex + 1) % images.length;
      imgElement.src = images[imageIndex];
    }, 4000);
  }

});


/* ==============================
   PHILOSOPHY REVEAL (CLICK)
============================== */
function revealPhilosophy() {
  const section = document.getElementById('philosophySection');
  if (section) {
    section.classList.add('show');
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


/* ==============================
   SCROLL REVEAL
============================== */
window.addEventListener('scroll', () => {
  const section = document.getElementById('philosophySection');
  
  if (!section) return;

  const rect = section.getBoundingClientRect();

  if (rect.top <= window.innerHeight * 0.75) {
    section.classList.add('show');
  }
});
