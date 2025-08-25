
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

// Scrip para la seccion de noticias actualizables

fetch("/assets/js/noticias.json")
  .then(response => response.json())
  .then(data => {
    let contenedor = document.getElementById("noticias");
    data.forEach(noticia => {
      let card = `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${noticia.titulo}</h5>
              <p class="text-muted"><small>${noticia.fecha}</small></p>
              <p class="card-text">${noticia.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += card;
    });
  })
  .catch(error => console.error("Error cargando noticias:", error));
