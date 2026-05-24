// Menu desplegable

function toggleMenu() {
  var menuDesplegable = document.getElementById("menuDesplegable");
    if (menuDesplegable.style.left === "0px") {
        menuDesplegable.style.left = "-200px";
        } else {
           menuDesplegable.style.left = "0px";
        }
}

document.addEventListener('DOMContentLoaded', function() {
  const galeria = document.querySelector('.galeria-imagenes');
  const imagenes = galeria.querySelectorAll('img');
  let contador = 0;

  function cambiarImagen() {
    imagenes[contador].classList.remove('visible'); // Oculta la imagen actual
    contador++;
    if (contador >= imagenes.length) {
      contador = 0;
    }
    imagenes[contador].classList.add('visible'); // Muestra la siguiente imagen
  }

  setInterval(cambiarImagen, 3000); // Cambia la imagen cada 3 segundos
  

  const galeriaMobile = document.querySelector('.galeria-imagenes.mobile');
  if (galeriaMobile) {
    const imagenesMobile = galeriaMobile.querySelectorAll('img');
    let contadorMobile = 0;

    function cambiarImagenMobile() {
      imagenesMobile[contadorMobile].classList.remove('visible');
      contadorMobile++;
      if (contadorMobile >= imagenesMobile.length) {
        contadorMobile = 0;
      }
      imagenesMobile[contadorMobile].classList.add('visible');
    }

    setInterval(cambiarImagenMobile, 3000);
  }



});



function searchImages() {
  let input = document.getElementById('searchBar').value.toLowerCase();
  let images = document.getElementsByClassName('imagen');

  for (let i = 0; i < images.length; i++) {
      let text = images[i].innerText.toLowerCase();
      if (text.includes(input)) {
          images[i].style.display = "";
      } else {
          images[i].style.display = "none";
      }
  }
}
