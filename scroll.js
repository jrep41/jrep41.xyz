


var top = document.getElementById('top');
top.addEventListener('click', () => {window.scrollTo(0, 0);});




//boton para abrir una nueva ventana con un calendario
var calendario = document.getElementById('calendario');
calendario.addEventListener('click', () => { window.open('https://calendar.google.com/calendar/r'); });



//boton para cerrar el navegador
var cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click', () => { window.close(); });