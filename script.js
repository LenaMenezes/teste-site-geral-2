let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializa o carrossel com a primeira imagem ativa
showSlide(currentSlide);
