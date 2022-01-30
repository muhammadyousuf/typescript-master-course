const cars: string[] = ["toyota", "alto", "mehran"];
const dateArray: Date[] = [new Date(), new Date()];
const carByMake: string[][] = [];

const car: string = cars[0];
const myCar: string = cars.pop();

cars.push("civic");

cars.map((car: string): string => {
  return car.toUpperCase();
});

const importanDates: (Date | string)[] = [];
importanDates.push(new Date());
importanDates.push("10-1-2021");

