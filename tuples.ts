const drink = {
  color: "brown",
  carbonate: true,
  sugar: 40,
};

// Type alias

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprit: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
