function abrirSorpresa() {

    // Ocultar la portada
    document.getElementById("inicio").style.display = "none";

    // Mostrar el primer mensaje
    mostrarSeccion("mensaje");
}

function mostrarSeccion(id) { 

    // Buscar todas las secciones 
    const secciones = document.querySelectorAll(".seccion"); 

    // Ocultar todas
    secciones.forEach(function(seccion) { 
        seccion.classList.add("oculto"); 
    }); 

    // Mostrar la sección seleccionada
    const seleccionada = document.getElementById(id); 

    seleccionada.classList.remove("oculto"); 

    // Volver arriba de la página 
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    }); 
}
// =========================
// VISOR DE FOTOS
/// =========================
// =========================

let fotoActual = 0;

const fotos = document.querySelectorAll(".galeria .foto-con-texto img");


function abrirFoto(imagen) {

    const visor = document.getElementById("visorFoto");

    // Saber qué foto se abrió
    fotoActual = Array.from(fotos).indexOf(imagen);

    mostrarFotoActual();

    // Abrir el visor
    visor.showModal();
}


function mostrarFotoActual() {

    const fotoGrande = document.getElementById("fotoGrande");
    const textoFoto = document.getElementById("textoFoto");

    const imagen = fotos[fotoActual];

    // Cambiar imagen
    fotoGrande.src = imagen.src;

    // Cambiar texto alternativo
    fotoGrande.alt = imagen.alt;

    // Cambiar texto
    textoFoto.textContent = imagen.dataset.frase || "";
}


function fotoSiguiente() {

    // Pasar a la siguiente
    fotoActual++;

    // Si estamos en la última, regresar a la primera
    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    mostrarFotoActual();
}


function fotoAnterior() {

    // Regresar a la anterior
    fotoActual--;

    // Si estamos en la primera, ir a la última
    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }

    mostrarFotoActual();
}


function cerrarFoto() {

    const visor = document.getElementById("visorFoto");

    visor.close();
}
function abrirMusica() {
    document.getElementById("galeria").classList.add("oculto");
    document.getElementById("musica").classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}