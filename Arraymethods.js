let fruits = ['Apple','Banana','Grapes'];
console.log (fruits);

fruits.pop()//remove last element 
console.log (fruits);

fruits.shift()// remove first element 
console.log (fruits);

fruits.push('cherry');//add the element at the last
console.log (fruits);

fruits.unshift('Lemon');//add at the first 
console.log (fruits);

delete fruits[1];//delete the element in the index
console.log (fruits);

fruits[1] = 'Orange';//add the element in the given index
console.log (fruits);

fruits.splice(1,2);
console.log (fruits);

fruits.splice(2,0,'Orange','Cherry')//2 show- add 2 elements and 0 show- nothing is delete
console.log (fruits);

let citrusfruits = fruits.slice(0,2)
console.log (fruits);
console.log (citrusfruits);

let evenNumbers = [2,4,6];
let oddNumbers = [1,3,5];
let primeNumbers =[2,3,5];
let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log (numbers);

