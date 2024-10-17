let totalAvailableSeats : number;  // Type annotation
// totalAvailableSeats = '100';
let totalAvailableSeats2 = 100;
// totalAvailableSeats2 = '100';

totalAvailableSeats = 300;

/**





10000000 Lines 
/** */
/// let totalAvailableSeats3 : number = 100;


totalAvailableSeats = 100;



let someRandonString = 'Hello World';

//10000 lines of code...


someRandonString = 'Hello World 2';



// const numbeR : number = 100;
const totalAvailableSeats3 = 100;   


const randomString = 'Hello World';




let totalAvailableSeats4 = 100 as const;
totalAvailableSeats4 = 100;




let totalAvailableSeats5 : number;
totalAvailableSeats5 = 100;
totalAvailableSeats5 = 200;

// totalAvailableSeats5 = 'a';


let specficType : 50; // Literal Type


specficType = 50;



// type assertion.
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data as { id : string, title : string }[];
}



// async function dummy() {
//     const data = await fetchData();
//     console.log(data[0].title);
// }
// const car = { make : 'Toyota', model : 'Corrola', year : 2020 } as { make : string }



/** 

let frontendTraining : girl;
frontendTraining = 'parisha';
frontendTraining = 'nikita';



frontendTraining = 'rahul';



let frontendTraining2 : 'parisha';
frontendTraining2 = 'nikita'; Error

**/


let frontendTrainingA = 'parisha' as "parisha";


let frontendTrainingB : "Parisha";
frontendTrainingB = "nikita" as "Parisha";



// let frontendTrainingC = "Parisha" as { name : "string" };
// let frontendTrainingC : "Parisha" = "Parisha" as string


// frontendTrainingB = 1 as "Parisha";

// const frontendTrainingC = "Parisha" as string;


// let temprature = 19; // number -> { all possible numbers in the world }
// let humidity = 79 as const // type 79 -> { 79 }
 
 
// temprature = 79; 
// temprature = humidity 
 
// humidity = temprature; 

/**
 * 
 * 
 * let temprature = 19; // number -> { all possible numbers in the world }
 * let humidity = 79 as const // type 79 -> { 79 }
 * 
 * 
 * tempature = 23; OK
 * tempature = humidity OK
 * 
 * humidity = tempature; Error
 * 
 * humidity = 79  OK
 * 
 * humidity = 88 Error
 * 
 * humidity = 88 as 78 Error
 * 
 * humidity = 79 as 79 OK
 * 
 * 
 * 
 */







// let someVariable : any = 100;
// someVariable = '100';
// someVariable = true;
// someVariable = { name : 'Parisha' };
// someVariable = null



let temprature : unknown = 20;
let humidity : number = 10;


// humidity = temprature; //ERROR
if (temprature === 10) {
    humidity = temprature; // OK
}
// Tricky one 




let someString : any = '20';
let someNumber = 12;


if (someNumber > someString) {
}

/**
 * 
 * 
 * let temprature : any = 19;
 * let humidity : number = 79 
 *  
 * humidity = tempature;
 * 
 * humidity = 79  
 * 
 * humidity = 88 
 * 
 * humidity = 88 as 78
 * 
 * humidity = 79 as 79 
 */




let someVariable : unknown = 100;
someVariable = '100';
someVariable = true;
someVariable = { name : 'Parisha' };
someVariable = null

function printCar(car : { make : string, model : string}) {}

const car =  { make : 'Toyota', model : 'Corolla', year : 2020 }
printCar(car);


// https://stackoverflow.com/questions/42291811/use-of-never-keyword-in-typescript




function add(a:number, b:number) {
    return a + b;
}

let numbers : Array<number> = [10]
// let numbers : [number,number] = [10,20]
// console.log(add(numbers[0],numbers[1]));

// [(index) -> number ? undefined]

type Flight = { name : string, destination : string, seats : number }
type Flights = Flight[]
type BuisnessClassType = { BusinessClassticketPrice : number }

type AirlineDetails = { BuisnessClass : BuisnessClassType }

type FlightTypeAssertion1 = { name : string, destination : string, seats : number, airLineNumber : number, airLineDetails :  AirlineDetails }

// type FlightTypeAssertion2 = { name : string, destination : string, seats : number, airLineNumber : number, airLineDetails :  { BusinessClassticketPrice : number } }


const flights : Flights = [
    { name : 'Air India', destination : 'Delhi', seats : 100 },
    { name : 'Indigo', destination : 'Mumbai', seats : 200 },
    { name : 'SpiceJet', destination : 'Kolkata', seats : 300 },
    { name : 'GoAir', destination : 'Chennai', seats : 400 }
]

let result = flights.find((flight : Flight) => flight.seats === 1000) as FlightTypeAssertion1;


function printflight(flight : { name : string, destination : string, seats : number, airLineNumber : number, airLineDetails :  { BusinessClassticketPrice : number } }) {
    //console.log(flight.airLineNumber);
    // console.log(flight.airLineDetails.BusinessClassticketPrice);
}


// printflight(result);




 
let someVarA  = ((("12" as any) as number as 1 as number));

// ("12" as any) --> any


// any as number --> number


// number as 1 --> 1


// 1 as number -> number

//case 1 -> 12 toExponential();
// case 2 --> "12" is a string not converted.
// someVarA.toExponential();



// let x = typeof "12";
// let y = typeof  "12"
// console.log(x === y);














// let someVarA  = (("12" as any) as { someNumber : number });



// console.log(someVarA)



// { some properties } -----> type assertion ------> we can omit some properties
// { someNumber } -----> type assertion ------> we can add some properties + we have to add
// all properties initially