/**
 * Type Inference
 */

// text라는 변수는 자동으로 string이라고 타입을 유추함
let text = "hello";
// text = 1 // 만약 숫자로 변경하면 에러나옴

function print(message: string = "hello") {
  console.log(message);
}
print("hi");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
