function fn() {
 return "EJECUTADO";
}

// console.log(fn);
console.log(fn());

// COSAS RARAS

// EXPRESIÓN DE FUNCIÓN NORMAL ASIGNADA A VARIABLE
const fnRara1 = function (parametro) {
 return `${parametro} chicas y chicos!`;
};

// EXPRESIÓN DE FUNCIÓN FLECHA ASIGNADA A VARIABLE
const fnRara2 = (parametro) => parametro;

// console.log(fnRara1(fnRara2("hola")));
