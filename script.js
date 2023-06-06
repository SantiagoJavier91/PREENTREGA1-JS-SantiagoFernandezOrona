function calcularHorasExtras(num1, num2) {
  let resultado = num1 * num2
  return resultado
}

alert ("CALCULADOR DE HORAS EXTRAS")
let empleados
let valorHora
let nombre = ""

let cantidadHoras

do {
  empleados = Number(prompt("Ingrese la cantidad de empleados que realizaron horas extras"))
} while (isNaN(empleados) || empleados <= 0)

do {
  valorHora = Number(prompt("Ingrese el valor en pesos de la hora extra")) 
} while (isNaN(valorHora)|| valorHora <= 0)


for (let i = 0; i < empleados; i++) {
  do {
    nombre = prompt("Ingrese nombre del empleado")
  } while (!isNaN(nombre));
  do {
    cantidadHoras = Number(prompt("Ingrese cantidad de horas extras trabajadas"))
  } while (isNaN(cantidadHoras) || cantidadHoras <=0);

alert ("El/la empleado/a " + nombre + " debe cobrar: $" + (calcularHorasExtras(cantidadHoras, valorHora)) + " por sus " + cantidadHoras + " trabajadas.")  
}

alert ("Hasta la próxima consulta!")
