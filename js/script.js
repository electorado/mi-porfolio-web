// --- CÓDIGO DEL POPUP DE COOKIES ---
const cookiePopup = document.getElementById('cookie-popup');
const acceptBtn = document.getElementById('accept-cookies-btn');

// Solo ejecuta el código de cookies si el popup existe en la página
if (cookiePopup && acceptBtn) {
    // Comprueba si el usuario ya ha aceptado las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Si no las ha aceptado, muestra el popup
        cookiePopup.classList.add('show');
    }

    // Cuando el usuario hace clic en "Aceptar"
    acceptBtn.addEventListener('click', () => {
        // Guarda la preferencia en el almacenamiento local del navegador
        localStorage.setItem('cookiesAccepted', 'true');
        // Oculta el popup
        cookiePopup.classList.remove('show');
    });
}

// --- CÓDIGO DEL MENÚ DESPLEGABLE ---
const abrirMenuBtn = document.getElementById('abrirMenu');
const cerrarMenuBtn = document.getElementById('cerrarMenu');
const menuLateral = document.getElementById('menuLateral');
const legalDiv = document.querySelector('.legal');
const menuLinks = document.querySelectorAll('#menuLateral .items-menu a');

function abrirMenu() {
    if (menuLateral) {
        menuLateral.classList.add('activo');
    }
    if (abrirMenuBtn) {
        abrirMenuBtn.setAttribute('aria-expanded', 'true');
        abrirMenuBtn.style.visibility = 'hidden';
    }
    document.body.classList.add('menu-abierto');
    if (cerrarMenuBtn) {
        cerrarMenuBtn.focus();
    }
}

function cerrarMenu(returnFocus = true) {
    if (menuLateral) {
        menuLateral.classList.remove('activo');
    }
    if (abrirMenuBtn) {
        abrirMenuBtn.setAttribute('aria-expanded', 'false');
        abrirMenuBtn.style.visibility = 'visible';
        if (returnFocus) {
            abrirMenuBtn.focus();
        }
    }
    document.body.classList.remove('menu-abierto');
}

// Solo ejecuta el código del menú si los elementos existen
if (abrirMenuBtn && cerrarMenuBtn && menuLateral) {
    abrirMenuBtn.addEventListener('click', abrirMenu);

    cerrarMenuBtn.addEventListener('click', () => {
        cerrarMenu(true);
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            cerrarMenu(false);
        });
    });

    // Soporte para teclado: cerrar menú lateral con Escape y devolver el foco
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuLateral.classList.contains('activo')) {
            cerrarMenu(true);
        }
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (
            menuLateral.classList.contains('activo') &&
            !menuLateral.contains(event.target) &&
            !abrirMenuBtn.contains(event.target)
        ) {
            cerrarMenu(false);
        }
    });
}