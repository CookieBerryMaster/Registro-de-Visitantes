let btnRegistrar = document.querySelector('#btnRegistrar');
//nos servira para construir el tbody de la tabla denominada tablaVisitantes
let tbody = document.querySelector('#tablaVisitantes tbody');

//lineas para identificar lo que tiene los inputs por id
let cedulaInput = document.querySelector('#cedula');
let nombreInput = document.querySelector('#nombre');
let apellidoInput = document.querySelector('#apellido');
let visitaInput = document.querySelector('#visita');
let motivoInput = document.querySelector('#motivo');

//ahora con ayuda de btnRegistrar hacemos un evento "click" que creara las filas con la informacion de los inputs
btnRegistrar.addEventListener('click', () => {

    // Limpiar errores anteriores
    document.querySelectorAll('.error-msg').forEach(e => e.remove());
    let hayErrores = false;

    // Función para mostrar error debajo del input
    const mostrarError = (inputId, mensaje) => {
        const input = document.getElementById(inputId);
        const error = document.createElement('div');
        error.className = 'error-msg';
        error.style.color = 'red';
        error.style.fontSize = '0.85em';
        error.textContent = mensaje;
        input.parentNode.insertBefore(error, input.nextSibling);
        hayErrores = true;
    };

    //se lee lo que hay dentro de los inputs!
    let cedula = cedulaInput.value.trim();
    let nombre = nombreInput.value.trim();
    let apellido = apellidoInput.value.trim();
    let visita = visitaInput.value;
    let motivo = motivoInput.value.trim();

    // Validaciones 
    if (cedula === '' || !/^\d{3}-\d{6}-\d{4}[A-Za-z]$/.test(cedula)) {
        mostrarError('cedula', 'Cédula inválida. Formato: 000-000000-0000X');
    }

    if (nombre === '') mostrarError('nombre', 'Ingrese el nombre');
    if (apellido === '') mostrarError('apellido', 'Ingrese el apellido');
    if (visita === '') mostrarError('visita', 'Seleccione un departamento');
    if (motivo === '') mostrarError('motivo', 'Ingrese el motivo de la visita');

    // Si hay errores, no registrar
    if (hayErrores) return;

    //plantilla de html para crear las filas de las tablas
    let plantilla = `
        <tr>
            <td>${cedula}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${visita}</td>
            <td>${motivo}</td>
        </tr>
    `;

    //con ayuda de la plantilla, se agrega una nueva fila a la tabla
    tbody.innerHTML += plantilla;

    // Limpiar formulario
    cedulaInput.value = '';
    nombreInput.value = '';
    apellidoInput.value = '';
    visitaInput.value = '';
    motivoInput.value = '';
});
