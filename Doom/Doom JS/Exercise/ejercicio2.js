
function getFormvalue(event) {
  
  // Obtenemos el valor de los campos de texto
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  
  // Se imprime
  console.log("Primer nombre: " + firstName);
  console.log("Apellido: " + lastName);
}
