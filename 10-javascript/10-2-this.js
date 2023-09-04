// js에서 this는 어디서 호출하느냐에 따라 달라진다
console.log(this);

function simpleFunc() {
  console.log(this);
} // window
simpleFunc();
console.clear();
class Counter {
  count = 0;
  // arrow function을 이용하면 bind를 안해줘도 된다. () => {}
  increase = function () {
    console.log(this);
  }; // 여기서 this는 Counter를 가르킴
}

const counter = new Counter();
// counter에서 increase를 호출했기 때문에 this가 Counter를 가르킨다.
counter.increase();
// bind로 묶어줌
const caller = counter.increase.bind(counter);
// Counter에 있는 increase안의 this는 Counter라는 클래스를 가르키고 있었으나,
// counter의 increase 포인터를 caller라는 변수에 할당했기 때문에
// 이제 여기서 this의 정보를 잃어버리게 된 것이다.
// let과 const로 선언한 변수는 window에 등록되어 있지 않으므로,
// caller를 호출한 것은 window가 아니라 그어떤 object도 아니기 때문에 undefined이 나온다.

caller(); // undefined

// const 나 let으로 선언한 변수는 window에 저장되지 않는다.
// 글로벌 객체에서 접근이 불가함.
// 한가지 예외는 var는 윈도우에 등록이 된다.
// 상위로 올라가서 선언이 되는 호이스팅 문제도 있음

class Bob {}
const bob = new Bob();
// bob이라는 객체 안에서 increase호출
bob.run = counter.increase;
bob.run(); // Bob 자체가 출력된다.

// this라는 정보를 함수를 다른 곳으로 할당하는 순간 잃어버릴 수 잇끼 때문에
// object를 꽁꽁 묶어주려면 bind를 이용하면 된다.
