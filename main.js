/* Solicitar al usuario que responda a la pregunta ("¿Eres bellísimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo". */

let respuesta = prompt("¿Eres bellísimo/a?");

if (respuesta === "si") {
  alert("Ciertamente");
} else if (respuesta === "no") {
  alert("No te creo");
} else {
  alert("Respuesta inválida");
};

/* Solicitar al usuario un número y determinar si es divisible entre dos o no. Mostrar al usuario un mensaje de "x número es divisible entre 2" o "x número no es divisible entre 2". */

let numero = prompt("Ingresa un número");

if (numero % 2 === 0) {
  alert(numero + " es divisible entre 2");
} else {
  alert(numero + " no es divisible entre 2");
};

/* Crear un programa que determine si un número introducido es par o no. La respuesta se mostrará en un cuadro de diálogo. */

let numero = prompt("Ingresa un número");

if (numero % 2 === 0) {
  alert("El número " + numero + " es par.");
} else {
  alert("El número " + numero + " no es par.");
};

/* Solicitar al usuario un número de cliente. Si el número es 1000, imprimir "Ganaste un premio", en caso contrario, mostrar el número y el mensaje "Lo sentimos, sigue participando". */

let numeroCliente = prompt("Ingresa tu número de cliente");

if (numeroCliente === 1000) {
  alert("¡Ganaste un premio!");
} else {
  alert("Lo sentimos, sigue participando. Tu número de cliente es: " + numeroCliente);
};

/* Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */

let numero1 = prompt("Ingresa el primer número");
let numero2 = prompt("Ingresa el segundo número");
let numero3 = prompt("Ingresa el tercer número");

if (numero1 > numero2 && numero1 > numero3) {
  alert("El número " + numero1 + " es el mayor.");
} else if (numero2 > numero1 && numero2 > numero3) {
  alert("El número " + numero2 + " es el mayor.");
} else if (numero3 > numero1 && numero3 > numero2) {
  alert("El número " + numero3 + " es el mayor.");
} else {
  alert("Hay dos o más números iguales.");
};

/* Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. */

let diaSemana = prompt("Ingresa un día de la semana");

if (diaSemana === "lunes") {
  alert("Hoy es lunes");
} else if (diaSemana === "viernes") {
  alert("Hoy es viernes");
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
  alert("Es fin de semana");
} else {
  alert("Día no reconocido");
};

/* Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprimir un mensaje de error. Si lo está, imprimir "reprobado" si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien" si es 9, y por último, "excelente" si es 10. */

let calificacion = prompt("Ingresa tu calificación (entre 1 y 10)");

if (calificacion >= 1 && calificacion <= 10) {
  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else {
    alert("Excelente");
  }
} else {
  alert("Calificación inválida");
};

/* Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará "no tenemos este topping, lo sentimos" y a continuación le informará el precio del helado sin ningún topping. */
let topping = prompt("Elige un topping: oreo, KitKat o brownie");
let precioHelado = 50;

if (topping) === "oreo") {
  precioHelado += 10;
} else if (topping === "kitkat") {
  precioHelado += 15;
} else if (topping === "brownie") {
  precioHelado += 20;
} else {
  alert("No tenemos este topping, lo sentimos.");
}

alert("El precio del helado con " + topping + " es: " + precioHelado + " MXN");

/* Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN, Carrera: $3999 MXN, Master: $2999 MXN.
Adicionalmente, preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses, Carrera: 6 meses, Master: 12 meses. */

let nivel = prompt("Elige un nivel: Course, Carrera o Master");
let precioMensual;
let duracion;
let total;

if (nivel === "course") {
  precioMensual = 4999;
  duracion = 2;
} else if (nivel === "carrera") {
  precioMensual = 3999;
  duracion = 6;
} else if (nivel === "master") {
  precioMensual = 2999;
  duracion = 12;
} else {
  alert("Nivel no válido");
}

let beca = prompt("¿Cuentas con alguna beca? (Facebook, Google o Jesua)");

if (beca === "facebook") {
  precioMensual *= 0.8; // 20% de descuento
} else if (beca) === "google") {
  precioMensual *= 0.85; // 15% de descuento
} else if (beca === "jesua") {
  precioMensual *= 0.5; // 50% de descuento
} else if (beca !== "ninguna") {
  alert("Beca no reconocida");
}

total = precioMensual * duracion;

alert("El precio mensual con descuento es: " + precioMensual + " MXN");
alert("El total a pagar por el curso de " + nivel + " es: " + total + " MXN");

/* Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es "coche", el precio por kilómetro ha de ser 0.20, si es "moto" ha de ser 0.10 y si es "autobús" 0.5.
Si los litros consumidos están entre 0 y 100, se ha de añadir 5 al costo total; si es mayor la cantidad de litros consumidos, se ha de añadir 10 al total. */

let vehiculo = prompt("Ingresa el tipo de vehículo: coche, moto o autobús");
let distancia = prompt("Ingresa la distancia recorrida en kilómetros");
let litros = prompt("Ingresa la cantidad de litros consumidos");

let precioKm;

if (vehiculo === "coche") {
  precioKm = 0.20;
} else if (vehiculo === "moto") {
  precioKm = 0.10;
} else if (vehiculo === "autobús") {
  precioKm = 0.5;
} else {
  alert("Vehículo no reconocido");
}

let costoTotal = precioKm * distancia;

if (litros >= 0 && litros <= 100) {
  costoTotal += 5;
} else {
  costoTotal += 10;
}

alert("El costo total a pagar es: " + costoTotal + " MXN");