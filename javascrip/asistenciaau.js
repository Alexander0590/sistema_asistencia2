window.onload = function() {
    let caja = document.getElementById('adni');
    caja.focus();

    // Mantener el foco
    caja.addEventListener('blur', function() {
        setTimeout(() => caja.focus(), 0);
    });

    // // Bloquear Inspección con teclas F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    // document.addEventListener('keydown', function(event) {
    //     if (event.keyCode === 123 || 
    //         (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || 
    //         (event.ctrlKey && event.keyCode === 85)) {
    //         event.preventDefault();
    //     }
    // });

    // // Bloquear el clic derecho
    // document.addEventListener('contextmenu', function(event) {
    //     event.preventDefault();
    // });

    // // Intentar bloquear el uso de DevTools
    // setInterval(function() {
    //     let devtools = new Function("debugger");
    //     devtools();
    // }, 100);
};
function actualizarFechaHora() {
    const fechaElemento = document.getElementById('fecha');
    const horaElemento = document.getElementById('hora');
    const mensajeElemento = document.getElementById('mensaje');
    const mensajeElemento2 = document.getElementById('mensaje2');
    const turnoActualElemento = document.getElementById('turno-actual');
    
    const ahora = new Date();
    
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    
    // Formatear la fecha
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dia = { weekday: 'long' };
    const fechaFormateada2 = ahora.toLocaleDateString('es-ES', dia);
    
    const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);
    fechaElemento.innerHTML = `<strong>${fechaFormateada}</strong>`;
    
    // Formatear la hora
    const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    horaElemento.textContent = horaFormateada;
    
    // Definir los horarios de los turnos
    const inicioTurno1 = new Date(ahora);
    inicioTurno1.setHours(7, 0, 0, 0); // 7:00 AM
    
    const cierreTurno1 = new Date(ahora);
    cierreTurno1.setHours(8, 15, 0, 0); // 8:15 AM
    
    const limiteTardanzaManana = new Date(ahora);
    limiteTardanzaManana.setHours(9, 0, 0, 0); // 9:00 AM
    
    const salidaTurno1 = new Date(ahora);
    salidaTurno1.setHours(13, 0, 0, 0); // 1:00 PM
    
    
    const inicioTurno2 = new Date(ahora);
    inicioTurno2.setHours(13, 45, 0, 0); // 1:45 PM
    
    const cierreTurno2 = new Date(ahora);
    cierreTurno2.setHours(14, 15, 0, 0); // 2:15 PM
    
    const inicioTardanzaTarde = new Date(ahora);
    inicioTardanzaTarde.setHours(14, 16, 0, 0); // 2:16 PM
    
    const limiteTardanzaTarde = new Date(ahora);
    limiteTardanzaTarde.setHours(15, 10, 0, 0); // 3:10 PM
    
    const salidaTurno2 = new Date(ahora);
    salidaTurno2.setHours(18, 0, 0, 0); // 6:00 PM
    
    const finJornada = new Date(ahora);
    finJornada.setHours(19, 0, 0, 0); // 7:00 PM
    
    let tiempoRestante;
    let mensaje = '';
    let sistemaCerrado = false;
    let turnoActual = '';
    let estado='';
    
    // Verificar el turno actual y los mensajes correspondientes
    if (ahora >= inicioTurno1 && ahora < cierreTurno1) {
        // Turno 1: Mañana (7:00 AM - 8:15 AM)
        estado="Puntual";
        turnoActual = "Mañana";
        tiempoRestante = Math.floor((cierreTurno1 - ahora) / 60000); 
        mensaje = ` Sistema de asistencia habilitado y disponible Faltan ${tiempoRestante} minutos para el cierre  `;
        mensaje2= ` `;
    } else if (ahora > cierreTurno1 && ahora < limiteTardanzaManana) {
        // Período de tardanza (8:15 AM - 9:00 AM)
        estado="Tardanza";
        turnoActual = "Mañana ";
        mensaje = "Sistema en modo tardanza.";
        mensaje2=" Solo se registrarán tardanzas con Descuento hasta las 9:00 AM."
    } else if (ahora >= limiteTardanzaManana && ahora < salidaTurno1) {
        // Sistema cerrado (9:00 AM - 1:00 PM)
        sistemaCerrado = true;
        mensaje2="";
        document.getElementById("turno-actual").style.display = "none";
        mensaje = "Sistema cerrado. Fuera del horario de tolerancia del Turno-Diurno.";
    } else if (ahora > salidaTurno1 && ahora < inicioTurno2) {
        sistemaCerrado = true;
        document.getElementById("turno-actual").style.display = "none";
        mensaje = "Sistema cerrado. El Sitema se habilitara a las 1:45 PM -Turno - Tarde";
    } else if (ahora >= inicioTurno2 && ahora < cierreTurno2) {
        // Turno 2: Tarde (1:45 PM - 2:15 PM)
        estado="Puntual";
        turnoActual = "Tarde";
        tiempoRestante = Math.floor((cierreTurno2 - ahora) / 60000); 
        mensaje = ` Sistema de asistencia habilitado y disponible Faltan ${tiempoRestante} minutos para el cierre  `;
        mensaje2= ` `;
    } else if (ahora >= inicioTardanzaTarde && ahora < limiteTardanzaTarde) {
        // Período de tardanza (2:16 PM - 3:00 PM)
        estado="Tardanza";
        turnoActual = "Tarde ";
        mensaje = "Sistema en modo tardanza.";
        mensaje2=" Solo se registrarán tardanzas con Descuento hasta las 3:00 PM.";
    } else if (ahora >= limiteTardanzaTarde && ahora < salidaTurno2) {
        // Sistema cerrado (3:30 PM - 6:00 PM)
        document.getElementById("turno-actual").style.display = "none";
        sistemaCerrado = true;
        mensaje = "Sistema cerrado Fuera del horario de tolerancia del Turno-Tarde.";
    } else if (ahora >= salidaTurno2 && ahora < finJornada) {
        // Después de la salida (6:00 PM - 7:00 PM)
        estado="Salida ";
        turnoActual = "Tarde";
        mensaje = "Sistema abierto para salida del Personal ";
        mensaje2=" ";
    } else {
        // Fuera de los horarios de los turnos (después de las 7:00 PM)
        document.getElementById("turno-actual").style.display = "none";
        sistemaCerrado = true;
        const siguienteTurno1 = new Date(inicioTurno1);
        siguienteTurno1.setDate(siguienteTurno1.getDate() + 1); 
        tiempoRestante = Math.floor((siguienteTurno1 - ahora) / 60000); 
        mensaje = `Sistema cerrado. Faltan ${tiempoRestante} minutos para el Turno  (Diurno)`;
    }
      // Mostrar el turno actual
      turnoActualElemento.textContent = 'Turno: '+ turnoActual;
    // Mostrar mensaje de sistema cerrado si corresponde
    if (sistemaCerrado) {
        mensajeElemento.textContent = mensaje;
        mensajeElemento.className = "cerrado";
    } else {
        mensajeElemento2.textContent = mensaje2;
        mensajeElemento.textContent = mensaje;
        mensajeElemento.className = "abierto";
    }
    

    
    // Actualizar los valores de los campos ocultos del formulario
    document.getElementById('afecha').value = fechaFormateada;
    document.getElementById('ashora').value = horaFormateada;
    document.getElementById('dia').value = fechaFormateada2;
    document.getElementById('turno').value = turnoActual;
    document.getElementById('estado').value = estado;
}
// Actua lizar la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);

// Ejecutar la función al cargar la página
actualizarFechaHora();

// Enviar datos del formulario usando $.ajax
$('#formulario-asistencia').on('submit', function (e) {
    e.preventDefault(); 

    // Obtener los datos del formulario
    const formData ={
        dni:$('#adni').val(),
        fecha:$('#fecha_actual').val(),
        dia:$('#dia').val(),
        estado2:$('#estado').val(),
        ashora:$('#ashora').val(),
        aturno:$('#turno').val()
    };
    $.ajax({
        url: 'proceso/asistenciaautomatica.php', 
        type: 'POST', 
        data: formData, 
        success: function (response) {
            console.log('Respuesta del servidor:', response);
            alert('Datos enviados correctamente');
            $('#adni').val('');
        },
        error: function ( error) {
            console.error('Error al enviar los datos:', error);
            alert('Error al enviar los datos');
        }
    });

});