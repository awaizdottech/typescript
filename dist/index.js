"use strict";
//type inference is the auto detection of data type like in js and is suitable by ts
let age;
let fullName;
let confirmation;
let objd;
let intentional;
let unIntentional;
let date;
let wtf; //not a data type but can be useful
let anything; // can be useful if you want to restrict the values to only the mentioned ones
let anyType; //it can be used at all places where we define data type
let strArr = []; //leaving array empty makes it of never type
let numArr = [];
let things = [1, true, "hello"]; //has a union data type by type inference, hower over 'things' to observe
let someID; //declarative union type
let nestedArr = [];
let obj = {
    name: "string",
    books: 0,
    age: 1,
    penName: "string",
};
//weird behavior regarding objects
function myName(params) { }
myName(obj); //this shoudnt be allowed
let tuple; //tuples allow diff types of elements in a specific order and an array of certain length but it is corrupted as we can push extra elements
let namedTuple;
// the key distinction btw type and interface is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
var Time;
(function (Time) {
    Time[Time["morning"] = 0] = "morning";
    Time[Time["afternoon"] = 10] = "afternoon";
    Time[Time["evening"] = 11] = "evening";
    Time["night"] = "noice";
})(Time || (Time = {})); //first element is of value 0 by default but can be changed, and by default values of successive enum members are taken as successive values if a value is a number. Hower at evening to see its value
var Estr;
(function (Estr) {
    Estr["mom"] = "";
    Estr["dad"] = "";
    Estr[Estr["bro"] = 0] = "bro";
})(Estr || (Estr = {})); //if an element is defined as a string its successive enum members should also be defined as strings
function fun(a = false) {
    //we're setting 'a' a default value which means even if its not passed its fine
    return a;
}
let happy = (c) => {
    return c;
};
//typeGuard checks type before exeuting
//Values like 0, NaN ,"" (the empty string), 0n (the bigint version of zero), null, undefined all coerce to false, and other values get coerced to true
let id = "5";
if (typeof id === "string") {
    //...
}
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
//coming from per documentation
function fail(msg) {
    throw new Error(msg);
}
class User {
    constructor(uname, std) {
        this.uname = uname;
        this.std = std;
        this.what = "nothing"; //only in this class
        this.kid = "ar"; //accessible in this and extending classes
        this.uname = "";
        this.std = 5;
    }
    //getters and setters are generally used to maipulate private values not accessible outside class
    get email() {
        return "";
    }
    set num(para) { }
}
class Successor extends User {
}
class Professional {
    constructor(name, books, penName) {
        this.name = name;
        this.books = books;
        this.penName = penName;
    }
}
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
//generics
function generics(val) {
    return val;
}
generics(true);
generics({ name: "what", books: 5, penName: "noice" });
function genArr(arr) {
    return arr[0];
}
const arrowGen = (para) => { }; //the comma with t helps identify that it isnt any jsx element
function gname(params) { }
class Genclass {
    constructor() {
        this.gname = [];
    }
}
//narrowing
function cool(params) {
    if ("name" in params) {
        return params.name;
    }
    return params.pf;
} //but typeof doesnt work for all data types, especialy for objects created with the keyword new so we use instanceof which helps us identify an object belongs to which class
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
