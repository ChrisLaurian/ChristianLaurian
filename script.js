


/**
 * 2. EFECTO TYPEWRITER INFINITO
 */
const textElement = document.getElementById('typewriter');
const phrases = [
    "Christian Laurian", 
    "Full-Stack Developer", 
    "ServiceNow Developer", 
    "Ingeniero en Sistemas",
    "Maker STEAM"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Lógica de transición
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pausa al final de la frase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

/**
 * 3. OBSERVER PARA ANIMACIONES AL HACER SCROLL
 */
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

/**
 * 4. INICIALIZACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar Typewriter
    type();

    // Configurar elementos para animación de entrada
    const hiddenElements = document.querySelectorAll('.card, .skill-card, .timeline-item, .cert-card, h2');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-fade');
        scrollObserver.observe(el);
    });
});

