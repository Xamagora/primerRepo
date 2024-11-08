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
Metodos accesores : Se refiere a las llaves y puertas  de acceso para ver o modificar las propiedades de un objeto de manera controlada.
Lo que permite agregar lógica extra (como validaciones). Métodos accesores: getters (accesor) y setters(mutador)
**************************************************
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
    this._name = nombre; // Atributos de clase ch47.
    // debe ir en orden en el que viene en el constructor.
    this._lastName = apellido;
    this._email = email; // this nos permite seleccionar el objeto que voy a crear.
    this._age = edad;
    }// fin del constructor
    //El get no puede tener el nombre de un mismo atributo, para ello se coloca guion bajo entre el punto de la palabra this y el nombre del atributo this._nombre
    get getIntegrantes(){ //Obtener los datos
      return (`nombre: ${this._name}, apellido: ${this._lastName}, correo: ${this._email} y mi edad es: ${this._age}`); //Regresar los datos de los integrantes
    }
    //cambiar email
    set email(emailCorregido){ // Recibe el email para ser modificado
      this._email = emailCorregido;
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
    this._grado = escolaridad;
    
  }
  get getInstruccion (){ //Obtener los datos
    return (`nombre: ${this._name}, apellido: ${this._lastName}, correo: ${this._email}, Edad es: ${this._age} y escolaridad: ${this._grado}`); //Regresar los datos de los integrantes
  }
  //cambiar grado
  set grado(gradoCorregido){ // Recibe el email para ser modificado
    this._grado = gradoCorregido;
        }

}



class mentoria extends ch47 {
  constructor (nombre, apellido, email, edad, escolaridad,telefono){
    super(nombre, apellido, email, edad, escolaridad, telefono)
    this._grado = escolaridad;
    this._tel = telefono; 
    
    
  }
  get getMentoria (){ //Obtener los datos
    return (`nombre: ${this._name}, apellido: ${this._lastName}, correo: ${this._email}, edad es: ${this._age},  escolaridad: ${this._grado}, telefono: ${this._tel }`); //Regresar los datos de los integrantes
  }
  //cambiar telefono
  set tel(telCorregido){ // Recibe el email para ser modificado
    this._tel = telCorregido;
        }
  
}

class participantes extends ch47 {
  constructor (nombre, apellido, email, edad, escolaridad, telefono, municipio){
    super(nombre, apellido, email, edad, escolaridad, telefono, municipio)
    this._grado = escolaridad;
    this._tel = telefono; 
    this._municipio = municipio; 
     
    
  }
  get getParticipantes (){ //Obtener los datos
    return (`nombre: ${this._name}, apellido: ${this._lastName}, correo: ${this._email}, edad es: ${this._age},  escolaridad: ${this._grado}, telefono: ${this._tel }, Municipio: ${this._municipio}`); //Regresar los datos de los integrantes
  }
  //cambiar telefono
  set municipio (municipioCorregido){ // Recibe el municipio para ser modificado
    this._municipio = municipioCorregido;
        }


  
}
const intel = new ch47 ( "Xaxiry", "Gonzalez", "xaxiry@gmail.com", 27); 
// Los objetos se deben definir con const 
const inte2 =new instruccion("Liliana", "Aguirre", "lili@gmail.com", 30, "licenciatura");
const inte3 =new mentoria("Eva", "Alvarado", "eva@gmail.com", 30, "Licenciatura", "5579284865");
const inte4 =new participantes ("Rosa", "Gomez", "rosa@gmail.com", 28, "preparatoria", "5573986547", "Ecatepec" );
console.log("************utilizando get y set en Integrantes modificando el correo *****************");
console.log(intel.getIntegrantes);
intel.email = "magaly@gmail.com";
console.log(intel.getIntegrantes);

console.log("************utilizando get y set en Intrucción  modificando el grado *****************");
console.log(inte2.getInstruccion);
inte2.grado = "Master";
console.log(inte2.getInstruccion);

console.log("************utilizando get y set en Mentoría modoficando el teléfono *****************");
console.log(inte3.getMentoria);
inte2.tel = "5642987538";
console.log(inte3.getMentoria);

console.log("************utilizando get y set en Participantes modificando el municipio *****************");
console.log(inte4.getParticipantes);
inte4.municipio = " Tecámac ";
console.log(inte4.getParticipantes);
