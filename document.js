document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const newIndex = (index + totalSlides) % totalSlides;
        const offset = -100 * newIndex;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
        currentIndex = newIndex;
    }

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Opcional: Añadir funcionalidad automática para cambiar de slide
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000); // Cambia cada 5 segundos
});
