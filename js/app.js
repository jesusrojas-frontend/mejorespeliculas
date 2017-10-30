
//Lazy loading
let bLazy = new Blazy({
  selector: 'img'
});
let $categorias = document.getElementById('categorias');
let $categoriaMenu = document.getElementById('categoria-menu');
let $iconoMenu = document.getElementById('icono-menu');
let $boton = document.getElementById('boton');
let $contenedor = document.getElementById('contenedor');
let consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery)
$categorias.addEventListener("click", contraer);
$boton.addEventListener("click", ocultar);
function ocultar() {
  $contenedor.classList.toggle('active')
}
function contraer() {
  $categoriaMenu.classList.toggle('active');
  $categoriaMenu.classList.toggle('ocultar');
  $iconoMenu.classList.toggle('rotar');
}
function mediaQuery() {
  if(consulta.matches){
    $categoriaMenu.classList.remove('active');
    console.log("Hola")
  }
}
mediaQuery();
