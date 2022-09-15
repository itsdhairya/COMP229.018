class Vehicle 
{
    constructor(wheels) {
    this.wheels = wheels;
    }
         toString() {
        return '(' + this.wheels + ')';
    }
}   

let car = new car('blue');
console.log(car.toString());

console.log(car instanceof car);
console.log(car instanceof Vehicle);