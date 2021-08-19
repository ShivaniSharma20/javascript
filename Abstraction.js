/*is a way of hiding the implementation details and showing only the functionality to the users */
function Employee(name, age, baseSalary){ // constructor 
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    //this.monthlyBonus = 1000;   (we can use this to show the monthlybonus to user)
    let monthlyBonus = 1000; // to make it private (abstraction apply) 

    /*this.calculateFinalSalary = function(){ 
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }*/

    let calculateFinalSalary = function(){ // function use only in the particular function
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }

    this.getEmpDetails = function (){ //function 
        console.log ('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary(); // call function 
    }
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();
//emp1.calculateFinalSalary();