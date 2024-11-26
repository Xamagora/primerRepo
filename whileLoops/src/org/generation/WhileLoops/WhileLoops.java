package org.generation.WhileLoops;
import java.util.Scanner;

public class WhileLoops {
public static void main(String[] args)
	{
 Scanner console = new Scanner(System.in);
int num;
	            
System.out.print("Ingresa un numero que sea positivo y entero: ");
num = console.nextInt();
	                    
System.out.println("Multiplication Table of " + num);
System.out.println("numero x numero = resultado");
	           

int contador = 1;  
while (contador <= 10) {  //Para multiplicar (Contar) hasta el 105
	            	
//int multi = num*contador;
System.out.println(num + " x " + contador + " = " + (num * contador));
 contador++;  //incremento
	}
	            }
}


