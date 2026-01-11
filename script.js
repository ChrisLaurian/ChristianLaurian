// Seleccionamos el botón
const btn = document.getElementById('theme-toggle');

// Escuchamos el evento click
btn.addEventListener('click', () => {
    // Alternamos una clase llamada "dark-mode" en el body
    document.body.classList.toggle('dark-mode');
    
    // Guardamos la preferencia en el navegador (opcional pero pro)
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Aplicar el tema guardado al cargar la página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

const text = "Christian A. Laurian"
const speed = 150;
let i = 0;

function typewriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

window.onload = typewriter;