let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// pre defined object
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 3, 5];

let bool: boolean[] = [true, false];

// class
class Car {}

let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 20,
  y: 10,
};

// function
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotation
// 1) function that return any type
let json = '{"x": 10, "y": 5}';
let cordinates: { x: number; y: number } = JSON.parse(json);
console.log(cordinates);

// 2) declare variable and initilze next line
let words: string[] = ['red', 'green', 'blue'];
let wordFound: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    wordFound = true;
  }
}

// 3) variable whose type cannot be inferred corretly
let number: number[] = [-10, -34, 4];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}
