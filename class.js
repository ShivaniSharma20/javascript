/*class Employee{ //employee is the class name 

    setDetails(name, id){//setdetails is the function , name and id is the parameter 
        this.name = name;//set a function, name is the class variable. value of name is assign to the class variable.
        this.id = id 
    }
}

let emp1 = new Employee();// create the object by this we access the function and variable of the class
emp1.setDetails('John', 1001);
console.log (emp1.name);
console.log (emp1.id );
*/

class Employee{ //employee is the class name 

    constructor(name,id){//constructor is like a function 
                    this.name = name;
                    this.id = id}
    
}

let emp1 = new Employee('prachi', 1001);
let emp2 = new Employee('Peter',1002);
console.log (emp1.name);
console.log (emp1.id );
console.log (emp2.name);
console.log (emp2.id );
