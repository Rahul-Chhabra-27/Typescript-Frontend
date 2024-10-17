"use strict";
const Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};
// I want to create a type Truck with contains all the properties of car + extra property of weightCanCarry (number).
// flag -> 1 // electric car
// flag 0 -> 0 // non electric car
function createCar(flag) {
    if (flag === 1) {
        return { make: 'Toyota', model: 'Corolla', year: 2020, chargeVoltage: 200 };
    }
    return { make: 'Toyota', model: 'Corolla', year: 2020 };
}
const ElectricCar = createCar(1);
console.log(ElectricCar.chargeVoltage);
const NonElectricCar = createCar(0);
console.log(NonElectricCar.chargeVoltage);
console.log(createCar(1)); // electric car
console.log(createCar(0)); // non electric car
const toyotaCar = { make: 'Toyota', model: 'Corolla', year: 2020 };
// case 1 ---> request success user created -> { statusCode : 201, userId : 1 }
// case 2 ---> request not found -> { statusCode : 404 , userId : 0}
// Union --> Union of types
// type newTypes :  number union string ; -> number or string type value can be assigned to newTypes
// A : newTypes = 1;        (|)
// A = 'as'
let someValueB = 79;
someValueB = 80;
let someNumberA = 2;
someNumberA = 4;
someNumberA = 6;
someNumberA = 8;
someNumberA = 10;
let someValueC;
someValueC = 4;
someValueC = 6;
someValueC = 8;
someValueC = 10;
someValueC = 2;
someValueC = 3;
someValueC = 5;
someValueC = 7;
let someValueE = 2;
// string ---> any   type model : string ? working
// any ---> string   model : 123 
let truckB = { type: 'car', make: 'Toyota', year: 2020, towingCapacity: 200, model: "Nano" };
console.log(truckB);
let truckVariable;
// Arin -> { type, make, model, year,towingCapacity, chargingVolate? }
