package org.generation.JavaLoops;
import java.util.Scanner;

public class JavaLoops {

	public static void main(String[] args) {
/*
 * Ciclo While
 * mientras la condición sea verdadera ejectua lo siguiente.	
 */
	int contador=1;
	while (contador<=5) {
		System.out.println("Iteración" + contador);
		contador ++;
		
	}
	
	/*
	 * Do-While
	 * Se ejecuta siempre una vez independientemente de la condición.
	 */
	int contadorDoWhile = 1;
	do {
		System.out.println("IteracionDoWhile: " + contadorDoWhile);
		contadorDoWhile++;
	}while (contadorDoWhile<=5);
	/*
	 * For
	 * Las condiciones de los for se basan en 3 partes:
	 * 1. Inicialización -> se inicializa el contador
	 * 2. Condición -> se utiliza las comparación de dos variables el inicializador.
	 * y la cantidad o la condición que deliminate n de iteraciones, de preferencia
	 * se iguala =
	 * 3. El incremento o actualización del contador 
	 */
	for(int i=1; i<=5; i++) {
			System.out.println("Contador For: "+ i);
	}
/*
 * .forEACH
 * Es un metodo nativo de un tipo de dato como los arrreglos que son objetos o similares a los objetos.
 * function forEach (array) {}
 * array.ForEach
 * forEach no te retorna nada.
 * utils.js
 * function getLastElement (){}
 * lo siguiente, y si necesitas este elemento del arreglo aqui lo tienes elemento a
 * ForEach Java
 * Utiliza la palabra reservada for, similar a como usa un for puro
 * en lugar de recibir condicionale de tres partes:
 * (Inicializador; condicion; incremento)
 * Va a utilizar una estructura de parámetros
 * (Tipo de Elemento elemento( identificadorElemento) : collection (array, ArrayList, set, map)
 * foreach es una function construida
 * biblioteca de java
 * pero es una function pre construida
 */
	String[] names = {"Xam ", "Magy ", "Alex ", "Eduardo "};
	String misCompaneros = "";
	for (String name: names) {
		misCompaneros += name;
	}
	System.out.println("Nombre: " + misCompaneros);
	
	/* Instanciar un objeto de tipo scanner (para que me ingrese algun dato mi usuarix) */
	Scanner scanner = new Scanner (System.in);
	System.out.println("Hola, ingresa tu nombre: ");
	String nombre =scanner.next();//metodo next encuentra y retorna un string
	 for( int i = 0; i < nombre.length(); i++) {
		 System.out.println(nombre.charAt(i));
	 }
	
	 	
	}
	
 
}
