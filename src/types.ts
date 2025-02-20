type rgb = [number, string]; // alias, another custom data type creator

type user = { readonly name: string; score?: number }; // score becomes optional with ?, and the readonly is a pure ts feature which means even if its violated js code will work fine

type superUser = user & { gender: string };

type Id = number | string;

// the key distinction btw type and interface is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
