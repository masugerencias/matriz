let matriz = new Array([8 , "hola", 2, 5], ["hello", 3, 2], [2, "pera", "kiwi"], ["verde", "azul", 8, "naranja"]);
//console.log(matriz)
var filaspar=[]
var columnasimpar=[]


 for(let i=0;i<matriz.length;i++){
   // console.log(i)
    if(i%2==0){
        //console.log(matriz[i]);
        for(let j=0;j<matriz[i].length;j++){
            if(j%2!=0){
                console.log(matriz[i][j]);
            }
        }
        
    }
} 


//correcion del ejercicio:
/* Se podria hacer un i de dos en dos en vez de poner un if. i+2 pero la i empieza en 0, y j empieza en 1. 

Tambien se puede hacer con foreach, con el foreach no funciona lo de pòner de 2 en 2.

Ahora vamos a pedirle al usuario: preguntar cuantas filas quiere el usuario y luego cuantas columnas.
La matriz puede ser irregular con input. Si dice 3 filas, tendrán que aparecer 3 inputs para las columnas.
Se podrian poner en una funcion la de crear inputs de pedir columnas.
Bueno, lo vamos ha hacer con prompt:
let filas=prompt...
Las validaciones siempre se hacen con do while. Queremos validar que el numero que meta sea positovo y no negativo. Hay que poner parseInt o con la funcion number.
Cada vez que llame a la funcion para poner el contenido de cada fila.
Por ahi falta un parse int y en el ejercicio de la profe van a salir mazo de strings.
Aqui copio la solucion programada juntos:



let arrayBid = [];
const pedirFila = (fila) => {
  let datos = [];
  let columnas;
  do {
    columnas = Number(prompt('Inserte número de columnas'));
    if (columnas <= 0) {
      alert('El número debe ser mayor que cero');
    }
  } while (columnas <= 0);
  for (let i = 0; i < columnas; i++) {
    datos.push(prompt(`Inserta el elemento ${fila}x${i}`));
  }
  return datos;
};
function pedirMatriz() {
  let filas;
  do {
    filas = Number(prompt('Inserte número de filas'));
    if (filas <= 0) {
      alert('El número debe ser mayor que cero');
    }
  } while (filas <= 0);
  for (let i = 0; i < filas; i++) {
    arrayBid.push(pedirFila(i));
  }
  return arrayBid;
}
function validarMatriz(arrayBid) {
  console.log(arrayBid);
  for (let i = 0; i < arrayBid.length; i += 2) {
    for (let j = 1; j < arrayBid[i].length; j += 2) {
      if (typeof arrayBid[i][j] == 'string') {
        console.log(arrayBid[i][j]);
      }
    }
  }
}
// pedirFila(0);
// pedirMatriz();
validarMatriz(pedirMatriz());


*/
 



//Crea un array a partir de las siguientes instrucciones:

/* var veces = 6
var n1=1
var n2=1
var n=0
var array1=[1,1]

for (let i = 0; i < veces; i++) {
    n = array1[i]+[i+1];
    
}
console.log(array1); */