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
