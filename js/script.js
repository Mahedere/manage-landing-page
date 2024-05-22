const btn=document.getElementById('menu-btn')
const nav=document.getElementById('menu')

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('#testimonial');
    const progressBarItems = document.querySelectorAll('#progress-bar div');
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index? 'block' : 'none';
      });
      progressBarItems.forEach((item, i) => {
        item.classList.toggle('bg-gray-300', i!== index);
        item.classList.toggle('bg-BrightRed', i === index);
      });
    }
  
    function handleProgressClick(event) {
      const index = parseInt(event.target.getAttribute('data-index'));
      if (!isNaN(index)) {
        // Return the new index instead of updating a global variable
        return index;
      }
      return null;
    }
  
    // Modify the forEach loop to pass the returned index to showTestimonial
    progressBarItems.forEach(item => {
      item.addEventListener('click', (event) => {
        const newIndex = handleProgressClick(event);
        if (newIndex!== null) {
          showTestimonial(newIndex);
        }
      });
    });
  
    // Show the first testimonial initially
    showTestimonial(0);
  });
  
