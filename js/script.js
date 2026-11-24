// --- CÓDIGO DEL MENÚ DESPLEGABLE ---
const abrirMenuBtn = document.getElementById('abrirMenu');
const cerrarMenuBtn = document.getElementById('cerrarMenu');
const menuLateral = document.getElementById('menuLateral');

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

// --- FORMULARIO DE CONTACTO ASÍNCRONO (FORMSUBMIT VÍA AJAX) ---
const contactoForm = document.getElementById('contactoForm');
const contactoEstado = document.getElementById('contactoEstado');
const btnSubmit = document.getElementById('btnSubmitForm');

if (contactoForm && contactoEstado && btnSubmit) {
    contactoForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Comprobación de honeypot invisible (anti-spam para bots)
        const honeyInput = contactoForm.querySelector('input[name="_honey"]');
        if (honeyInput && honeyInput.value.trim() !== '') {
            return; // Bloqueo silencioso de bots
        }

        const btnTextEl = btnSubmit.querySelector('.btn-submit-text') || btnSubmit;
        const originalText = btnTextEl.textContent;

        btnSubmit.disabled = true;
        btnTextEl.textContent = 'TRANSMITIENDO SEÑAL...';
        contactoEstado.className = 'contacto-estado estado-enviando';
        contactoEstado.textContent = 'Enviando mensaje al servidor...';

        const formData = new FormData(contactoForm);

        try {
            const response = await fetch('https://formsubmit.co/ajax/pamoncayo@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    _subject: `Nuevo contacto desde Portfolio: ${formData.get('name')}`
                })
            });

            if (response.ok) {
                contactoEstado.className = 'contacto-estado estado-exito';
                contactoEstado.textContent = '✔ Mensaje transmitido con éxito. Te responderé a la brevedad.';
                contactoForm.reset();
            } else {
                throw new Error('Respuesta no válida del servicio de mensajería');
            }
        } catch (error) {
            contactoEstado.className = 'contacto-estado estado-error';
            contactoEstado.innerHTML = '✖ No se pudo completar el envío automático. Puedes escribirme directamente a <a href="mailto:pamoncayo@gmail.com" class="error-mailto-link">pamoncayo@gmail.com</a>.';
        } finally {
            btnSubmit.disabled = false;
            btnTextEl.textContent = originalText;
        }
    });
}

// --- AÑO DINÁMICO EN EL COPYRIGHT ---
const yearEl = document.getElementById('currentYear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}