//every function has a property called Prototype.
//By default this property is empty you can add propeties and methods to it .


/*function myfunc(){ 
}

myFunc.prototype

function EmpDetails(){// create a function 

}*/


/*let EmpDetails = function(name, age){//constructor 
      this.name = name;
      this.age = age;

      this.getName = function(){
          return this.name;
      };

      this.getAge = function(){
          return this.age;
      };
      
};

let emp1 = new EmpDetails('John',30);//object can inherit all the function of constructor 
let emp2 = new EmpDetails('Peter', 40);
console.log (emp1.getName());
console.log (emp2.getAge());*/

//OR we use prototype if we don't want to inherit all the functions and in all objects

let EmpDetails = function(name, age){//constructor 
    this.name = name;
    this.age = age;
}
    EmpDetails.prototype.getName = function(){
        return this.name;
    };

    EmpDetails.prototype.getAge = function(){
        return this.age;
    };
    


let emp1 = new EmpDetails('John',30);//object can inherit all the function of constructor 
let emp2 = new EmpDetails('Peter', 40);
console.log (emp1.getName());
console.log (emp2.getAge());