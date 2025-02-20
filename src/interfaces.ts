interface Author {
  name: string;
  books: number;
} //first letter uppercase is the convention, acts as custom data types

interface Author {
  penName: string;
} // reopening an interface

interface Post {
  author: Author;
  platform: () => string; // means it should return string
  pf(): string; // another way we can write the same function decalration
}

interface Writer extends Author, Post {} //multiple interfaces can also be extended

interface complex {
  [key: string]: number;
}
