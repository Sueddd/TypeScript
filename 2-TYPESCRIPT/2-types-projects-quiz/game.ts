/**
 * Let's make a game 🕹
 */

type navigate = "up" | "down" | "left" | "right";
type obj = { x: number; y: number };
const position: obj = { x: 0, y: 0 };
function move(navigate: navigate): obj {
  switch (navigate) {
    case "up":
      position.y++;
      return position;
    case "down":
      position.y--;
      return position;
    case "left":
      position.x--;
      return position;
    case "right":
      position.x++;
      return position;
    default:
      throw new Error("에이");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
