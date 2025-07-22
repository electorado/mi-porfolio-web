document.addEventListener('DOMContentLoaded', () => {
    const abrirMenuBtn = document.getElementById('abrirMenu');
    const cerrarMenuBtn = document.getElementById('cerrarMenu');
    const menuLateral = document.getElementById('menuLateral');
    // Obtenemos la referencia al div de los enlaces legales
    const legalDiv = document.querySelector('.legal'); 

    function abrirMenu() {
    menuLateral.classList.add('activo');
    // document.documentElement.style.overflow = 'hidden'; /* <-- ELIMINA ESTA LÍNEA */
    if (legalDiv) { 
        legalDiv.classList.add('menu-abierto');
    }
}

    function cerrarMenu() {
    menuLateral.classList.remove('activo');
    // document.documentElement.style.overflow = ''; /* <-- ELIMINA ESTA LÍNEA */
    if (legalDiv) { 
        legalDiv.classList.remove('menu-abierto');
    }
}

    if (abrirMenuBtn) {
        abrirMenuBtn.addEventListener('click', abrirMenu);
    }

    if (cerrarMenuBtn) {
        cerrarMenuBtn.addEventListener('click', cerrarMenu);
    }

    const menuLinks = menuLateral.querySelectorAll('.items-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });
});