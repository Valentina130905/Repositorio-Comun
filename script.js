// Sistema de Inscripción Escolar — lógica del lado del cliente
//
// TODO (rama feature-validacion): completar la validación del formulario
// de contacto antes de que el "envío" se considere exitoso.

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Error: todos los campos son obligatorios.");
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Error: el correo debe contener al menos un '@' y un '.'.");
    return;
  }

  alert("Formulario recibido correctamente.");
});