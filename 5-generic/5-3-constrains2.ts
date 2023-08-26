interface Employee {
  pay(): void;
}

class FullTimeEmployee2 implements Employee {
  pay() {
    console.log(`full time !!`);
  }
  workFullTime() {}
}

class PartTimeEmployee2 implements Employee {
  pay() {
    console.log(`part time !!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
// function pay<T extends Employee>(employee: T): T {
//   employee.pay();
//   return employee;
// }

// 지금 예시에서는 employee가 너무 일반적이다 > 어떤 타입이든 다 들어올 수 있음
// 그래서 employee.pay를 하면 오류가 나옴
// employee에 pay가 있는지 없는에 대한 정보 없음
// 세부적인 조건 > T extends Employee
function pay2<T>(employee: T): T {
  employee.pay();
  return employee;
}
 
const ellie2 = new FullTimeEmployee2();
const bob2 = new PartTimeEmployee2();
// console.log(ellie2);
// ellie2.workFullTime();
// bob2.workPartTime();

// pay 함수를 거치면, FullTimeEmployee2 특성을 잃어버리고, 기존의 인터페이스 employee만 리턴해줌.
const ellieAfterPay3 = pay2(ellie2); // 지불
const bobAfterPay3 = pay2(bob2); // 지불
