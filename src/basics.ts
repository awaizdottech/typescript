//type inference is the auto detection of data type like in js and is suitable by ts

let age: number;
let fullName: string;
let confirmation: boolean;
let objd: object;
let intentional: null;
let unIntentional: undefined;
let date: Date;
let wtf: "wtf"; // not a data type but can be useful
let anything: "what" | "why" | "when"; // can be useful if you want to restrict the values to only the mentioned ones
let anyType: any; // it can be used at all places where we define data type
let strArr: string[] = []; // leaving array empty makes it of never type
let numArr: Array<number> = [];
let things = [1, true, "hello"]; // has a union data type by type inference, hower over 'things' to observe
let someID: number | string; // declarative union type
let nestedArr: number[][] = [];
let obj: { name: string; books: number; age: number; penName: string } = {
  name: "string",
  books: 0,
  age: 1,
  penName: "string",
};
let tuple: [number, boolean, string]; // tuples allow diff types of elements in a specific order and an array of certain length but it is corrupted as we can push extra elements
let namedTuple: [age: number, wtf: boolean, str: string];

// typeGuard checks type before executing

// Values like 0, NaN ,"", 0n (the bigint version of zero), null, undefined all coerce to false, and other values get coerced to true

let id: Id = "5";
if (typeof id === "string") {
}
// but typeof doesnt work for all data types, especialy for objects created with the keyword new so we use instanceof which helps us identify an instance of classes, interfaces, and enums but not with types
// instanceof is a runtime check, not a compile time check

// narrowing
function cool(params: Author | Post) {
  if ("name" in params) return params.name;
  return params.pf;
}

// interfaces & types combined
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
