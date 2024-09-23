import { linkedlist } from "./classes.mjs";

const list = new linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hampster");
list.append("snake");
list.append("turtle");

console.log(list.tostring());