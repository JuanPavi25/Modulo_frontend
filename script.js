const boton = document.getElementById('enviarBtn');
const popup = document.getElementById('popup');

const titulohtml = document.getElementById('htmltitle');
const html = document.getElementById('html');
const titulocss = document.getElementById('csstitle');
const css = document.getElementById('css');
const titulojs = document.getElementById('javascripttitle');
const js = document.getElementById('js');

boton.addEventListener('click', function() {
    // Simula el envío de datos al servidor
    // Aquí podrías usar fetch/AJAX si lo deseas
    popup.style.display = 'block';
});

titulohtml.addEventListener('click', function() {
    // Simula el envío de datos al servidor
    // Aquí podrías usar fetch/AJAX si lo deseas
    html.style.display = 'block';
});

titulocss.addEventListener('click', function() {
    // Simula el envío de datos al servidor
    // Aquí podrías usar fetch/AJAX si lo deseas
    css.style.display = 'block';
});

titulojs.addEventListener('click', function() {
    // Simula el envío de datos al servidor
    // Aquí podrías usar fetch/AJAX si lo deseas
    js.style.display = 'block';
});

function cerrarPopup() {
    popup.style.display = 'none';
    html.style.display = 'none';
    css.style.display = 'none';
    js.style.display = 'none';
}

