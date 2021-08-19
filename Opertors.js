/*********** Arithmetic opertors *********/

let x = 5;
let y = 2;

let result = x ** y;
console.log('Result is : '+result)

let a = 10
a++ 
console.log('value of a is: '+a)

/*********************Assignment operator ******************** */

let z = 10;
//x = 10 + 20;

z += 5; //x = x+5
console.log('value of z is :'+ z)

/**********************Comparison Operator******** */
let b = 10;
let c = 20;
let d = b == c;
console.log(d)// console.log(b == c)

let n = 10;
let m = '10';
//console.log(m == n)
console.log(m === n);// ('===' indicate the equal value and equal type)

/*Ternary operator :like if-then-else
takes 3 arguments
condition ? value if true : value if false */
let p = n > m ? n : m
console.log(p);

/**********************Logical opertors ********************** */

let A = true;
let B = false;
console.log(A && B);
console.log(A || B);
console.log(!A);
console.log((10>5) && (6<3));

/*************************Type Opertors***********************/

let firstName = 'Raghav';
console.log (typeof firstName);
console.log (typeof 123);
console.log (typeof 123.67);
console.log (typeof true);

/*************************instance of***********/

//let lastName = 'pal';
let lastName = new String('Pal');
console.log (lastName instanceof String);
let num1 = new Number (123)
console.log (num1 instanceof Number);

/******************Bitwise operators********* */

let C = 1;
let D = 2;
console.log (C & D);
console.log (C ^ D);
console.log (~ D);
console.log (5 << 1)