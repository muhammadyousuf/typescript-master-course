interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of suger`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);
