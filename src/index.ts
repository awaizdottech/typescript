//type inference is the auto detection of data type like in js and is suitable by ts

let age: number;
let fullName: string;
let confirmation: boolean;
let objd: object;
let intentional: null;
let unIntentional: undefined;
let date: Date;
let wtf: "wtf"; //not a data type but can be useful
let anything: "what" | "why" | "when"; // can be useful if you want to restrict the values to only the mentioned ones
let anyType: any; //it can be used at all places where we define data type
let strArr: string[] = []; //leaving array empty makes it of never type
let numArr: Array<number> = [];
let things = [1, true, "hello"]; //has a union data type by type inference, hower over 'things' to observe
let someID: number | string; //declarative union type
let nestedArr: number[][] = [];
let obj: { name: string; books: number; age: number; penName: string } = {
  name: "string",
  books: 0,
  age: 1,
  penName: "string",
};

//weird behavior regarding objects
function myName(params: Author) {}
myName(obj); //this shoudnt be allowed

let tuple: [number, boolean, string]; //tuples allow diff types of elements in a specific order and an array of certain length but it is corrupted as we can push extra elements
let namedTuple: [age: number, wtf: boolean, str: string];

interface Author {
  name: string; // state.user.push(todo);
  books: number;
} //first letter uppercase is the convention, acts as custom data types
interface Author {
  penName: string;
} // reopening an interface
interface Post {
  author: Author;
  platform: () => string; //means it should return string
  pf(): string; //another way we can write the same function decalration
}
interface Writer extends Author, Post {} //multiple interfaces can also be extended
interface complex {
  [key: string]: number;
}

type rgb = [number, string]; //alias, another custom data type creator
type user = { readonly name: string; score?: number }; //score becomes optional with ?, and the readonly is a pure ts feature which means even if its violated js code will work fine
type superUser = user & { gender: string };
type Id = number | string;
// the key distinction btw type and interface is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

enum Time {
  morning,
  afternoon = 10,
  evening,
  night = "noice",
} //first element is of value 0 by default but can be changed, and by default values of successive enum members are taken as successive values if a value is a number. Hower at evening to see its value
enum Estr {
  mom = "",
  dad = "",
  bro = 0,
} //if an element is defined as a string its successive enum members should also be defined as strings
const enum newE {
  nice,
} //const so that it generates less js code as sometimes we may even have to deal with the js code

function fun(a: boolean = false): boolean {
  //we're setting 'a' a default value which means even if its not passed its fine
  return a;
}
let happy = (c: number): number => {
  return c;
};

//typeGuard checks type before exeuting
//Values like 0, NaN ,"" (the empty string), 0n (the bigint version of zero), null, undefined all coerce to false, and other values get coerced to true
let id: Id = "5";
if (typeof id === "string") {
  //...
}

//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
//coming from per documentation
function fail(msg: string): never {
  throw new Error(msg);
}

class User {
  private what: string = "nothing"; //only in this class
  protected kid: string = "ar"; //accessible in this and extending classes
  constructor(public uname: string, private std: number) {
    this.uname = "";
    this.std = 5;
  }
  //getters and setters are generally used to maipulate private values not accessible outside class
  get email(): string {
    return "";
  }
  set num(para: number) {}
  //we also have private methods
}
class Successor extends User {}
class Professional implements Author {
  constructor(
    public name: string,
    public books: number,
    public penName: string
  ) {}
}
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

//generics
function generics<t>(val: t): t {
  return val;
}
generics(true);
generics<Author>({ name: "what", books: 5, penName: "noice" });
function genArr<t>(arr: t[]): t {
  return arr[0];
}
const arrowGen = <t>(para: t): void => {}; //the comma with t helps identify that it isnt any jsx element
function gname<t, v extends Author>(params: t) {}
class Genclass<t> {
  gname: t[] = [];
}

//narrowing
function cool(params: Author | Post) {
  if ("name" in params) {
    return params.name;
  }
  return params.pf;
} //but typeof doesnt work for all data types, especialy for objects created with the keyword new so we use instanceof which helps us identify an object belongs to which class

//type predicate
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

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //return shape.side * shape.side
}

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
