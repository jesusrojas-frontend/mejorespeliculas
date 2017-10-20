/*var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);
 var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById('menu');
function toggleMenu() {
  $menu.classList.toggle('active');
}



function mediaQuery() {
  
  if(consulta.matches){
    console.log("Se cumplio la condicion")
    $burguerButton.addEventListener("touchstart", toggleMenu);
    
  }else{
    console.log("No se cumplio la condicion");
    $burguerButton.removeEventListener("touchstart", toggleMenu);
  }
}
mediaQuery();
*/
//Lazy loading
var bLazy = new Blazy({
  selector: 'img'
});
var $categorias = document.getElementById('categorias');
var $categoriaMenu = document.getElementById('categoria-menu');
var $iconoMenu = document.getElementById('icono-menu');
$categorias.addEventListener("click", contraer);

function contraer() {
  $categoriaMenu.classList.toggle('active');
  $categoriaMenu.classList.toggle('ocultar');
  $iconoMenu.classList.toggle('rotar');
}