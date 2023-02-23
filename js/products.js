		// get all the accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// add a click event listener to each header
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // toggle the active class on the accordion item
    header.parentElement.classList.toggle('active');
  });
});