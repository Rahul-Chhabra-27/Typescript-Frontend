type CarType = {
    make : string,
    model : string
    year : number
    chargeVoltage? : number
}
interface CarInterface {
    make : string,
    model : string
    year : number
}
const Car : CarInterface = {
    make : 'Toyota',
    model : 'Corolla',
    year : 2020
}



// I want to create a type Truck with contains all the properties of car + extra property of weightCanCarry (number).


// flag -> 1 // electric car
// flag 0 -> 0 // non electric car

function createCar(flag : number) : CarType {
    if(flag === 1) {
        return { make : 'Toyota', model : 'Corolla', year : 2020, chargeVoltage : 200 };    
    }
    return { make : 'Toyota', model : 'Corolla', year : 2020 }

}

const ElectricCar : CarType = createCar(1);

console.log(ElectricCar.chargeVoltage);

const NonElectricCar : CarType = createCar(0);

console.log(NonElectricCar.chargeVoltage);




console.log(createCar(1)); // electric car
console.log(createCar(0)); // non electric car

const toyotaCar : CarType = { make : 'Toyota', model : 'Corolla', year : 2020 }


// function someDummyFunction(a : number,b : number,c? : number) {
//     return a + b + c;
// }


// console.log(someDummyFunction(1,2));






type ResponseTypeA = {
    statusCode : number,
    userId? : number;
}


// case 1 ---> request success user created -> { statusCode : 201, userId : 1 }
// case 2 ---> request not found -> { statusCode : 404 , userId : 0}




// Union --> Union of types


// type newTypes :  number union string ; -> number or string type value can be assigned to newTypes
// A : newTypes = 1;        (|)
// A = 'as'

let someValueB : 79 | 80 = 79;
someValueB = 80;



type EvenNumbers = 2 | 4 | 6 | 8 | 10;
type PrimeNumbers = 2 | 3 | 5 | 7 | 11;

let someNumberA : EvenNumbers = 2
someNumberA = 4
someNumberA = 6
someNumberA = 8
someNumberA = 10
// someNumberA = 3;


type UnionCombined = EvenNumbers | PrimeNumbers

let someValueC : UnionCombined;
someValueC = 4
someValueC = 6
someValueC = 8
someValueC = 10

someValueC = 2
someValueC = 3
someValueC = 5
someValueC = 7
// someValueC = 13;



type IntersectionCombined = EvenNumbers & PrimeNumbers;

let someValueE : IntersectionCombined = 2;


// // never
// let someValueD : number & string;


// function someRandomFunction () {
//     while(true) {}



//     return true
//     console.log("as");
// }
// First Case 


// type CarTypeA = {
//     type : string
//     make : string,
//     model : string,
//     year : number,
//     chargingVoltage?: number
// }

// type Truck  = CarTypeA & { towingCapacity : number, type : string }

// let truckVariable : Truck = { type: 'truck', make :'Toyota', model : 'Corolla', year : 2002, towingCapacity: 200 };













type CarTypeA = {
    type : 'car'
    make : string,
    model : string,
    year : number,
    chargingVoltage?: number
}

// type Truck  = CarTypeA & { towingCapacity : number, type : 'truck', model : any }
type Truck  = CarTypeA & { towingCapacity : number, model : ("Corrola" | "Nano") }
// let TruckC : CarTypeA & { FuelType? : string } = { make:'a',model:'Corrola',year:2020, type:"car",}




// string ---> any   type model : string ? working
// any ---> string   model : 123 


let truckB : Truck = { type:'car', make : 'Toyota', year:2020, towingCapacity:200, model : "Nano"}
console.log(truckB)

type TruckNever = {
    type : never;
    make : string,
    model : string,
    year : number,
    chargingVoltage?: number
}
let truckVariable : Truck ;




// Arin -> { type, make, model, year,towingCapacity, chargingVolate? }
