// Obtener referencia al botón de registrar
let btnRegistrar = document.querySelector('#btnRegistrar');

// Nos servirá para construir el tbody de la tabla denominada tablaVisitantes
let tbody = document.querySelector('#tablaVisitantes tbody');

// Líneas para identificar lo que tienen los inputs por id
let cedulaInput = document.querySelector('#cedula');
let nombreInput = document.querySelector('#nombre');
let apellidoInput = document.querySelector('#apellido');
let visitaInput = document.querySelector('#visita');
let motivoInput = document.querySelector('#motivo');

// Ahora con ayuda de btnRegistrar hacemos un evento "click" que creará las filas con la información de los inputs
btnRegistrar.addEventListener('click', () => {

    // Limpiar errores anteriores
    document.querySelectorAll('.error-msg').forEach(e => e.remove());
    document.querySelectorAll('.error').forEach(e => e.classList.remove('error'));
    let hayErrores = false;

    // Función para mostrar error debajo del input
    const mostrarError = (input, mensaje) => {
        const error = document.createElement('div');
        error.className = 'error-msg show';
        error.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-4.25h-1.5v-1.5h1.5v1.5zm0-3.5h-1.5v-5h1.5v5z"/>
            </svg>
            ${mensaje}`;
        input.classList.add('error');
        input.parentNode.insertBefore(error, input.nextSibling);
        hayErrores = true;
    };

    // Se lee lo que hay dentro de los inputs
    let cedula = cedulaInput.value.trim();
    let nombre = nombreInput.value.trim();
    let apellido = apellidoInput.value.trim();
    let visita = visitaInput.value;
    let motivo = motivoInput.value.trim();

    // Validaciones
    if (cedula === '' || !/^\d{3}-\d{6}-\d{4}[A-Za-z]$/.test(cedula)) {
        mostrarError(cedulaInput, 'Cédula inválida. Formato: 000-000000-0000X');
    }

    if (nombre === '') mostrarError(nombreInput, 'Ingrese el nombre');
    if (apellido === '') mostrarError(apellidoInput, 'Ingrese el apellido');
    if (visita === '') mostrarError(visitaInput, 'Seleccione un departamento');
    if (motivo === '') mostrarError(motivoInput, 'Ingrese el motivo de la visita');

    // Si hay errores, no registrar
    if (hayErrores) return;

    // Plantilla de HTML para crear las filas de la tabla
    let plantilla = `
        <tr>
            <td>${cedula}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${visita}</td>
            <td>${motivo}</td>
        </tr>
    `;

    // Con ayuda de la plantilla, se agrega una nueva fila a la tabla
    tbody.innerHTML += plantilla;

    // Limpiar formulario
    cedulaInput.value = '';
    nombreInput.value = '';
    apellidoInput.value = '';
    visitaInput.value = '';
    motivoInput.value = '';
});
