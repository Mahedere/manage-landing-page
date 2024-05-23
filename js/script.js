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

  function showTestimonial(index, screenSize) {
      if (screenSize === 'small') {
          testimonials.forEach((testimonial, i) => {
              testimonial.style.display = i === index ? 'block' : 'none';
          });
      } else {
          testimonials.forEach((testimonial) => {
              testimonial.style.display = 'block';
          });
      }
      progressBarItems.forEach((item, i) => {
          item.classList.toggle('bg-gray-300', i !== index);
          item.classList.toggle('bg-BrightRed', i === index);
      });
  }

  function handleProgressClick(event) {
      const index = parseInt(event.target.getAttribute('data-index'));
      if (!isNaN(index)) {
          return index;
      }
      return null;
  }

  function determineScreenSize() {
      return window.innerWidth <= 768 ? 'small' : 'large';
  }

  progressBarItems.forEach(item => {
      item.addEventListener('click', (event) => {
          const newIndex = handleProgressClick(event);
          if (newIndex !== null) {
              showTestimonial(newIndex, determineScreenSize());
          }
      });
  });

  window.addEventListener('resize', () => {
      const currentIndex = Array.from(progressBarItems).findIndex(item => item.classList.contains('bg-BrightRed'));
      showTestimonial(currentIndex, determineScreenSize());
  });

  showTestimonial(0, determineScreenSize());
});
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const inputField = document.getElementById('emailInput');
    const validationMessageContainer = document.getElementById('validationMessageContainer');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (inputField.value.trim() === '') {
            validationMessageContainer.textContent = 'The input field cannot be empty.';
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(inputField.value)) {
            validationMessageContainer.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            validationMessageContainer.textContent = ''; 
        }
        console.log('Form submitted successfully!');
    });
});