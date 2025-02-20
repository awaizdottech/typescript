// functions
function fun(a: boolean = false): boolean {
  return a;
}
let happy = (c: number): number => {
  return c;
};

// weird behavior regarding objects
function myName(params: Author) {}
myName(obj); // this shoudnt be allowed

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
// coming from documentation
function fail(msg: string): never {
  throw new Error(msg);
}
