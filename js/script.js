const btn=document.getElementById('menu-btn')
const nav=document.getElementById('menu')

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('testimonials');
    const progressBar = document.getElementById('progress-bar');
    const circles = progressBar.querySelectorAll('div');

    function updateProgress() {
        const containerWidth = container.scrollWidth - container.clientWidth;
        const scrollLeft = container.scrollLeft;
        const scrollFraction = scrollLeft / containerWidth;

        const activeIndex = Math.round(scrollFraction * (circles.length - 1));

        circles.forEach((circle, index) => {
            if (index === activeIndex) {
                circle.classList.add('bg-BrightRed');
                circle.classList.remove('bg-gray-300');
            } else {
                circle.classList.add('bg-gray-300');
                circle.classList.remove('bg-BrightRed');
            }
        });
    }

    container.addEventListener('scroll', updateProgress);
    updateProgress();
});