type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}

function isNumber(x: any): x is number {
  return typeof x === "number";
} // x is number: This is a TypeScript-specific return type known as a type predicate. It indicates that if the function returns true, then x can be treated as a number type within the scope where this check is performed.
