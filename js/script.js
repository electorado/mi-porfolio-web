document.addEventListener('DOMContentLoaded', () => {
    const abrirMenuBtn = document.getElementById('abrirMenu');
    const cerrarMenuBtn = document.getElementById('cerrarMenu');
    const menuLateral = document.getElementById('menuLateral');
    // Obtenemos la referencia al div de los enlaces legales
    const legalDiv = document.querySelector('.legal'); 

    function abrirMenu() {
        menuLateral.classList.add('activo');
        document.body.style.overflow = 'hidden';
        // Añade la clase para cambiar el color del texto legal
        if (legalDiv) { 
            legalDiv.classList.add('menu-abierto');
        }
    }

    function cerrarMenu() {
        menuLateral.classList.remove('activo');
        document.body.style.overflow = '';
        // Quita la clase para volver al color original del texto legal
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