// seleccionamos los elementos html que necestitamos
var entrada = document.getElementById('tarea');
var boton = document.getElementById('boton');
var tareas = document.querySelector('ul');

// cuando se haga click en el boton
boton.addEventListener('click', () => {
  var tarea = entrada.value;
  var li = document.createElement('li');
  li.textContent = tarea;
  tareas.appendChild(li);
  // document.getElementById('tarea').innerHTML = '';
  entrada.value = '';
  //obtener el ultimo elemento de una lista
  var ultimo = tareas.lastElementChild;
  console.log(ultimo);
});


