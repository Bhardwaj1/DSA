const visitedUsers = new WeakSet();

let user1 = { name: "A" };
let user2 = { name: "B" };

visitedUsers.add(user1);
visitedUsers.add(user2);

console.log(visitedUsers); // true

user1 = null; // reference remove
// JS automatically cleanup karega
