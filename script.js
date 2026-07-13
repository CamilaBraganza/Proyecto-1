document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            const camposRequeridos = form.querySelectorAll('[required]');
            let formularioValido = true;

            camposRequeridos.forEach((campo) => {
                if (!campo.value.trim()) {
                    formularioValido = false;
                }
            });

            if (!formularioValido) {
                event.preventDefault();
                alert('Por favor completá todos los campos obligatorios.');
                return;
            }

            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value.trim();
                const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                if (!emailValido) {
                    event.preventDefault();
                    alert('Ingresá un email válido.');
                }
            }
        });
    });

    document.querySelectorAll('button').forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const enlaceInterno = boton.querySelector('a');
            if (enlaceInterno) {
                return;
            }

            if (boton.type === 'submit' || boton.closest('form')) {
                return;
            }

            event.preventDefault();
            alert('Esta acción estará disponible próximamente.');
        });
    });
});