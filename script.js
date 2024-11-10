// Al enviar el formulario
document.getElementById("formularioReserva").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
      alert("Formulario enviado correctamente");
    }
});
  
// Función de validación
function validarFormulario() {
    const checkboxes = document.querySelectorAll("input[name='extras']:checked");
    const selectDestino = document.getElementById("destino").value;
    if (checkboxes.length < 2 || !selectDestino) {
      alert("Por favor, selecciona al menos 2 servicios y un destino.");
      return false;
    }
    return true;
}

// Validación en el campo "Nombre"
document.getElementById("nombre").addEventListener("blur", function() {
    if (!this.value.trim()) {
      alert("El campo Nombre no puede estar vacío");
      this.focus();
    }
});

// Validación en el campo "Apellido"
document.getElementById("apellido").addEventListener("blur", function() {
    if (!this.value.trim()) {
      alert("El campo Apellido no puede estar vacío");
      this.focus();
    }
});

// Configura la fecha mínima de "fechaFin" según "fechaInicio"
document.getElementById("fechaInicio").addEventListener("change", function() {
    document.getElementById("fechaFin").min = this.value;
    calcularDias(); // Llama a la función de cálculo automáticamente cuando cambia la fecha de inicio
});

// Configura la fecha máxima de "fechaInicio" según "fechaFin"
document.getElementById("fechaFin").addEventListener("change", function() {
    document.getElementById("fechaInicio").max = this.value;
    calcularDias(); // Llama a la función de cálculo automáticamente cuando cambia la fecha de fin
});

// Función de cálculo de días
function calcularDias() {
    const fechaInicio = new Date(document.getElementById("fechaInicio").value);
    const fechaFin = new Date(document.getElementById("fechaFin").value);
    if (fechaInicio && fechaFin && fechaFin >= fechaInicio) {
      const diferencia = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));
      document.getElementById("días").value = diferencia; // Muestra los días calculados
    } else {
      document.getElementById("días").value = ''; // Si no son válidas, borra el valor de días
    }
}

// Seleccionar todos los checkboxes de servicios extras
document.getElementById("selectAllCheckbox").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll("input[name='extras']");
    checkboxes.forEach(checkbox => checkbox.checked = true);
});

// Convierte las opciones del select a mayúsculas o minúsculas
document.getElementById("uppercaseBtn").addEventListener("click", function() {
    modificarOpcionesSelect("mayusculas");
});

document.getElementById("lowercaseBtn").addEventListener("click", function() {
    modificarOpcionesSelect("minusculas");
});

function modificarOpcionesSelect(tipo) {
    const select = document.getElementById("destino");
    for (let i = 0; i < select.options.length; i++) {
      if (tipo === "mayusculas") {
        select.options[i].text = select.options[i].text.toUpperCase();
      } else {
        select.options[i].text = select.options[i].text.toLowerCase();
      }
    }
}