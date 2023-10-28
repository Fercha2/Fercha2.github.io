let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:blue;">Historia de los postres</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

//-----------------------------------------------------
let app2 = document.getElementById('typewriter2');
 
let typewriter2 = new Typewriter(app2, {
  loop: true,
  delay: 75,
});
 
typewriter2
  .pauseFor(2500)
  .typeString('<span style="color:blue;">Tipos de Postres</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  //----------------------------------------------------------
  let app3 = document.getElementById('typewriter3');
 
  let typewriter3 = new Typewriter(app3, {
    loop: true,
    delay: 75,
  });
   
  typewriter3
    .pauseFor(2500)
    .typeString('<span style="color:blue;">A continuación se muestran algunos de los de mayor prestigio a nivel mundial.</span>')
    .pauseFor(200)
    .deleteChars(10)
    .start();
  //----------------------------------------------------------


// JavaScript para mostrar y ocultar el modal
document.getElementById("mostrarModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

document.getElementById("cerrarModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// JavaScript para validar el formulario
document.getElementById("formularioContacto").addEventListener("submit", function(e) {
  e.preventDefault();

  // Realiza la validación de los campos aquí (puedes usar JavaScript o librerías como jQuery o incluso HTML5)

  // Si la validación es exitosa, puedes enviar el formulario a través de AJAX o como prefieras
});
