// ===============================
// Script para el Formulario de contacto.html
// ===============================
const form = document.getElementById('formulario-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

if (form) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    form.classList.add('was-validated');

    if (!form.checkValidity()) return;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
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
}

// ===============================
// Script para la sección de noticias
// ===============================
fetch('assets/js/noticias.json')
  .then(response => response.json())
  .then(noticias => {
    const contenedor = document.getElementById('noticias');
    if (!contenedor) return;

    contenedor.innerHTML = "";
    noticias.forEach(noticia => {
      contenedor.innerHTML += `
        <div class="noticia">
          <h3>${noticia.titulo}</h3>
          <p>${noticia.descripcion}</p>
          <img src="${noticia.imagen}" alt="${noticia.titulo}" width="200">
        </div>
      `;
    });
  })
  .catch(error => console.error('Error cargando noticias:', error));

// ===============================
// Script para carrusel de imágenes (Bootstrap)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector('#carouselExample');
  if (carouselElement && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      ride: 'carousel'
    });
  }
});

// ===============================
// Script para Navbar unificado
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");
  if (!navbarContainer) return;

  fetch("navbar.html")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el navbar");
      return response.text();
    })
    .then(data => {
      navbarContainer.innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el navbar:", error));
});
