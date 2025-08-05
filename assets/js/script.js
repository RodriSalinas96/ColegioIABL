
// Script para el Formulario de contacto.html

const form = document.getElementById('formulario-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  form.classList.add('was-validated');

  if (!form.checkValidity()) {
    return;
  }

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      form.classList.remove('was-validated');
      mensajeExito.classList.remove('d-none');
      setTimeout(() => mensajeExito.classList.add('d-none'), 5000);
    } else {
      alert('Ocurrió un error al enviar el formulario. Inténtalo más tarde.');
    }
  } catch (error) {
    alert('No se pudo enviar el formulario. Verifica tu conexión.');
  }
});
