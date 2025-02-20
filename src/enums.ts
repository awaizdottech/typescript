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
} //if an element is defined as a string its successive enum members should also be explicitly defined

const enum newE {
  nice,
} //const so that it generates less js code as sometimes we may even have to deal with the js code
