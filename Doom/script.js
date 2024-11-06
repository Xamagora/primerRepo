/* Cuando buscamos modificar un valor de input html, generalmente utilizamos la */

// const inputOne = document.getElementById("inputText").value;


// La estrutura de como interactuamos con Doom en JS es la siguiente
//1. Palabra reservada: document
// Utilizamos el metodo/ Api -> getElementById()
// 3. Utilizaremos el atributo del elemento que en este caso conocemos previamente que es un input.
//Por este conocimiento previo value.

document.getElementById("registrarse").addEventListener("click", function () {
  const nombre = document.querySelector("#nombre input").value.trim();
    const password = document.querySelector("#password input").value.trim();
  if (nombre === "") {
      alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
  } else if (password === "") {
      alert ("Contraseña incorrecta")
  } else if (password.length >= 8){
      const mensaje = document.getElementById("msj");
      // mensaje.className="valid";
      mensaje.style.display = "none";
    }else{
          alert("Registro completo" + nombre + "!");
      }
});