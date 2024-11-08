/*
POO

Clases : Se refiere a nuestro molde o plantilla para que podamos crear objetos. Utiliza la palabra reservada
Constructor : Es una función obligatoria para crear objetos (chefsitx) a traves de caracteristicas  o atributos especiicas
Objetos : Es lo que construimos a traves de la clase y el constructor 
Atributo : Se refieren a las caracteristicas o propiedades de mi objeto 
Metodo : Lo que hace nuestro objeto (saludar, brincar, correr)
Instanciacion : Se refiere a cuando ya creamos la calse, el constructor y el objeto 
Herencia :Cuenta la palabar reservada extends. La herencia permite reutilizar el código de la clase padre en la clase hijo
Polimorfismo : El comportamniento de cada objeto de la misma clase a un metodo 
Encapsulamiento : Se refiere a encerrar y/o ocultar el código 
Abstracción : Se refieres a ser muy especificxs con los objetos (resumir)
Modularidad : Nos perimte reutilizar código, hacer modificaciones, tener orde, entender y mantener el código 
Metodos estaticos : Utiliza la palabra reservada static, nos permite ejecutar una clase sin instanciar al objeto 
********* Tarea: Aplicarlo al código *************
Metodos accesores : (Pendiente)
*****************************************************
Principios SOLID
Prtincipio de responsabilidad Unica (SRP): Se refiere a que cada que asignamos una clase. objeto, etc. debe ser unica.
Principio de abierno y cerradp (OCP): Se refiere a que debemos podder extender el codigo ya existente de ser necesario. 
Principio de sustitución de Liskov: Se refiere a que podamos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo.
Principio de segregación de interfaces (ISP): Se refiere a tener distintas interfaces.  Es tener las funcionabilidades necesarias de las páginas.
Principios de investigación de dependencias (DIP): Trabaja a traves de la abstracción para que el codigo no dependa de detalles especificos.

Objetos Json
Javascript Object Notation.
Se maneja a traves de clave-valor y no tiene métodos.
*/
class ch47{
  //tiene que llevar constructor. función ()
  constructor (nombre, apellido, email, edad){ //Nos permite crear el objeto.
    // this.(nombre que queremos que lleve) = variable en el constructor.
    this.name = nombre; // Atributos de clase ch47.
    // debe ir en orden en el que viene en el constructor.
    this.lastName = apellido;
    this.email = email; // this nos permite seleccionar el objeto que voy a crear.
    this.age = edad;
    this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es: ${this.email} y mi edad es ${this.age}`
  }
  //Crear un metodo para acceder a la info e imprimirla
  // Este metodo/función debe estar dentro de la clase.
  infoIntegrantes (){
    console.log(this.info)
  }

}

class instruccion extends ch47 {
  constructor (nombre, apellido, email, edad, escolaridad) {
    super (nombre, apellido, email, edad, escolaridad);
    this.grado = escolaridad;
    this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es: ${this.email} y mi edad es ${this.age} mi escolaridad es ${this.grado}`
  }
  static darSesiones () {
    console.log ("Hoy no tienes session")
  }

}

class mentoria extends ch47 {
  constructor (nombre, apellido, email, edad, escolaridad,telefono){
    super(nombre, apellido, email, edad, escolaridad, telefono)
    this.grado = escolaridad;
    this.tel = telefono; 
    this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es: ${this.email} y mi edad es ${this.age} mi escolaridad es ${this.grado} y mi telefono es ${this.tel}`
    
  }
  static darMentoria(){
    console.log("tienes muchos mentees");
  }
}

class participantes extends ch47 {
  constructor (nombre, apellido, email, edad, escolaridad, telefono, municipio){
    super(nombre, apellido, email, edad, escolaridad, telefono, municipio)
    this.grado = escolaridad;
    this.tel = telefono; 
    this.municipio = municipio; 
     this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es: ${this.email} y mi edad es ${this.age} mi escolaridad es ${this.grado}, mi telefono es ${this.tel},  mi municipio es ${this.municipio}`
    
  }
  static tomarBoot(){
    console.log("Tienes clases");
  }


  
}
const intel = new ch47 ( "Xaxiry", "Gonzalez", "xaxiry@gmail.com", 27); 
// Los objetos se deben definir con const 
const inte2 =new instruccion("Liliana", "Aguirre", "lili@gmail.com", 30, "licenciatura");
const inte3 =new mentoria("Eva", "Alvarado", "eva@gmail.com", 30, "Licenciatura", "5579284865");
const inte4 =new participantes ("Rosa", "Gomez", "rosa@gmail.com", 28, "preparatoria", "5573986547", "Ecatepec" );

intel.infoIntegrantes();

inte2.infoIntegrantes();
instruccion.darSesiones();

inte3.infoIntegrantes();
mentoria.darMentoria();

inte4.infoIntegrantes();
participantes.tomarBoot();

