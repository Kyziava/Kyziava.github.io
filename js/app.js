
function scrollRight() {
  const scrollAmount = 600; 
  const gallery = document.getElementById('imageGallery');
  gallery.scrollBy({
    left: -scrollAmount, // Scroll left by 200
    behavior: 'smooth' // Smooth scrolling
  });
}

function scrollRight2() {
  const scrollAmount = 600; 
  const gallery = document.getElementById('imageGallery');
  gallery.scrollBy({
    left: scrollAmount, // Scroll right by 200
    behavior: 'smooth' // Smooth scrolling
  });
}