//Process where one class acquires properties (methods and fields) from another class
//parent -> child
// super -> sub
// Base -> derived 
class Car{
     setName (name){
         this.name = name;
     }
     startEngine(){
         console.log('Engine started for '+this.name);
     }
     stopEngine(){
         console.log ('Engine stopped for '+this.name);
     }
}

class Toyota extends Car{

    topspeed(speed){
        console.log ('top speed for '+this.name+' is '+speed);
    }
}

let myCar = new Toyota();
myCar.setName('Carry');
myCar.startEngine();
myCar.stopEngine();
myCar.topspeed(200);