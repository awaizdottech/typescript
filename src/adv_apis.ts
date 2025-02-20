interface User2 {
  username: string;
  email: string;
  password: string;
  mobile: number;
  createdAt: Date;
}

type userProfile = Pick<User2, "email" | "password" | "mobile">;
type userProfileOptional = Partial<userProfile>;
type userProfileReadonly = Readonly<userProfile>;

function updateUser(user: userProfileOptional) {}
// function updateUser(user: Partial<userProfile>) {} // possible
updateUser({ email: "hello", password: "hi" });

interface complex2 {
  [key: number]: number;
  yo: string;
}
const complexObj: complex2 = { 1: 1, 2: 2, yo: "yo" };

type cleaner = Record<string, number>;
const nice: cleaner = { 2: 2, yo: 5 };

const userMap = new Map<string, userProfileOptional>();
userMap.set("1", { email: "hello", password: "hi" });
userMap.get("1");

type userExclude = Exclude<keyof User2, "createdAt">;
const picky_user: userExclude = "email";
