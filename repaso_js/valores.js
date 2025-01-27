"use strict";

// LET PERMITE REASIGNAR

let one = 1;
one = true;

one;

let obj = { saludo: "hola" };
obj = [];
obj;

// CONST NO PERMITE REASIGNAR PERO SI MUTAR OBJETOS

const two = 2;

//two = 3;

const obj1 = { nombre: "Ju Lu" };
obj1.nombre = "Julio";

obj1;

// ESPACIOS DE MEMORIA

// PRIMITIVAS
console.log(1 === 1);

// OBJETOS
console.log({} == {});

// ENTENDER OBJETOS

const objA = {};
const objB = objA;

objB.oficio = "AI te odio!";

// objA
