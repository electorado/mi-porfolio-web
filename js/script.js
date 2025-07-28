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
        abrirMenuBtn.style.visibility = 'hidden'; 
    }
    if (legalDiv) {
        legalDiv.classList.add('menu-abierto');
    }
}

function cerrarMenu() {
    if (menuLateral) {
        menuLateral.classList.remove('activo');
    }
    if (abrirMenuBtn) {
        abrirMenuBtn.style.visibility = 'visible'; 
    }
    if (legalDiv) {
        legalDiv.classList.remove('menu-abierto');
    }
}

// Solo ejecuta el código del menú si los botones existen
if (abrirMenuBtn && cerrarMenuBtn && menuLateral) {
    abrirMenuBtn.addEventListener('click', abrirMenu);
    cerrarMenuBtn.addEventListener('click', cerrarMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });
}

const acordeonItems = document.querySelectorAll('.acordeon-item');

acordeonItems.forEach(item => {
  item.addEventListener('toggle', (event) => {
    // Si el item se ha abierto...
    if (item.open) {
      // ...cierra todos los demás
      acordeonItems.forEach(otroItem => {
        if (otroItem !== item) {
          otroItem.open = false;
        }
      });
    }
  });
});