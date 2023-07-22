// Obtener el formulario y el botón de enviar
const formularioHoteles = document.getElementById('formularioHoteles');
const btnEnviar = formularioHoteles.querySelector('input[type="submit"]');

// Evento para enviar el formulario
formularioHoteles.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los datos del formulario
    const nombre = formularioHoteles.querySelector('#nombre').value;
    const email = formularioHoteles.querySelector('#email').value;
    const telefono = formularioHoteles.querySelector('#telefono').value;
    const fechaEntrada = formularioHoteles.querySelector('#fecha_entrada').value;
    const fechaSalida = formularioHoteles.querySelector('#fecha_salida').value;
    const numPersonas = formularioHoteles.querySelector('#num_personas').value;
    const tipoHabitacion = formularioHoteles.querySelector('#tipo_habitacion').value;
    const instalaciones = [];
    formularioHoteles.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        instalaciones.push(checkbox.value);
    });

    // Aquí puedes realizar acciones con los datos ingresados, por ejemplo:
    // - Enviar los datos a un servidor para realizar la búsqueda de hoteles
    // - Guardar los datos en una base de datos para futuras referencias

    // Ejemplo de mostrar los datos en la sección de resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ""; // Limpiamos el contenido anterior

    // Mensaje de resultados basado en las selecciones del usuario
    let mensajeResultados = `<h2>Resultados de búsqueda:</h2>`;
    mensajeResultados += `<p>Nombre: ${nombre}</p>`;
    mensajeResultados += `<p>Correo electrónico: ${email}</p>`;
    mensajeResultados += `<p>Teléfono: ${telefono}</p>`;
    mensajeResultados += `<p>Fecha de entrada: ${fechaEntrada}</p>`;
    mensajeResultados += `<p>Fecha de salida: ${fechaSalida}</p>`;
    mensajeResultados += `<p>Número de personas: ${numPersonas}</p>`;
    mensajeResultados += `<p>Tipo de habitación: ${tipoHabitacion}</p>`;
    mensajeResultados += `<p>Instalaciones adicionales seleccionadas: ${instalaciones.join(', ')}</p>`;

    resultadosDiv.innerHTML = mensajeResultados;
});
