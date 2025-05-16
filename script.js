document.addEventListener("DOMContentLoaded", function () {
  // Existing functionality for testimonials
  let testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonialIndex = 0;

  function changeTestimonial() {
    // Hide the current testimonial
    testimonials[currentTestimonialIndex].classList.remove('active');

    // Increment to show the next testimonial
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;

    // Show the next testimonial
    testimonials[currentTestimonialIndex].classList.add('active');
  }

  // Initially show the first testimonial
  testimonials[currentTestimonialIndex].classList.add('active');

  // Change testimonial every 5 seconds
  setInterval(changeTestimonial, 5000);

  // New functionality for toggling sections with fading effect (What Sets Us Apart and Our Core Principles)
  let currentIndex = 0;
  const sections = document.querySelectorAll('.toggle-section'); // Make sure both sections have this class

  // Function to toggle sections
  function toggleSections() {
    // Hide the current section with fade-out
    sections[currentIndex].classList.remove('visible');
    
    // Update index to the next section in a circular fashion
    currentIndex = (currentIndex + 1) % sections.length;

    // Show the next section with fade-in
    sections[currentIndex].classList.add('visible');
  }

  // Initially show the first section
  sections[0].classList.add('visible');

  // Call toggleSections every 5 seconds (change as per your preference)
  setInterval(toggleSections, 5000);

});

function revealPhilosophy() {
  const section = document.getElementById('philosophySection');
  section.classList.add('show');
  section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const section = document.getElementById('philosophySection');
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.75) {
    section.classList.add('show');
  }
});

const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg' // Total 4 images
];

let index = 0; // To track the current image

function rotateImage() {
  const imgElement = document.getElementById('equipment-img');
  
  // Rotate to the next image, wrapping around at the end of the array
  index = (index + 1) % images.length;
  imgElement.src = images[index]; // Update image source
}

// Change the image every 4 seconds (4000 milliseconds)
setInterval(rotateImage, 4000);
