// javascript에서 모든 object는 Object라는 proto를 상속한다.

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true
// x와 y는 동일한 object의 proto를 상속하고 있기 때문에 true가 나온다.

const array = [];
console.log(array); // proto라는 배열

// 자바스크립트의 모든 object들은 object라는 프로토를 갖고 있다.
console.clear();
function CoffeeMachine(beans) {
  this.beans = beans;
  // constructor function 안에 함수를 만들면
  // 만들어지는 object마다 공통된 함수를 가지고 있다.
  // instance member level
  //   this.makeCoffee = (shots) => {
  //     console.log("making...☕");
  //   };
}

// instance member level을 prototype member level로 변경
// CoffeeMachine이 아닌 CoffeeMachine 안의 proto를 열면 있음
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1); // 기본적으로 object를 상속한다.
console.log(machine2);

// CoffeMachine은 proto를 가지고 있고, proto는 object를 상속한다.
// machine ➡️ CoffeMachine ➡️ Object

function LatteMachine(milk) {
  this.milk = milk;
}
// 상속
// LatteMachine의 prototype은 CoffeeMachine의 prototype을 연결?해준다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(122);
console.log(latteMachine);
latteMachine.makeCoffee(); // LatteMachine에서도 makeCoffe 함수 사용 가능

// 프로토타입은 js에서 객체지향 프로그래밍, 상속을 하기 위해 쓰이는 것
// 코드를 재사용하기 위해 만들어진 것이다.
