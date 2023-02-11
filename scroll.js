var top = document.getElementById('top');
top.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

//boton para cerrar el navegador
var cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click', () => {
  window.close();
});
