{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time !!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }
    workPartTime() {}
  }

  // 자동으로 월급을 지불할 수 있는 함수
  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩
  function payBad(employee: Employee): Employee {
    // 월급을 지불하고 난뒤
    employee.pay();
    // employee를 리턴
    return employee;
  }

  // T는 extends Employees => 이렇게 지정하지 않으면 파라미터의 emplyee:T라고 해둔 것에 employee에 pay가 있는지 없는지 타입에 대한 정보가 없기 때문에 사용할 수 없음
  // <T extends Employee> => 일반 타입은 아니고, Employee를 확장한 것만 다 가능하다는 뜻
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  // employee를 구현한 어떠한 object든 전달이 가능하지만, 다른 타입은 전달 불가능
  // T extends Employee로 설정했기 때문
  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  // payBad로 구현하게 되면, ellie와 bob 즉, FullTimeEmployee객체와 PartTimeEmployee객체를 전달해도 세부 클래스의 정보를 잃게 된다.
  const ellieAfterPay2 = payBad(ellie);
  const bobAfterPay2 = payBad(bob);

  const obj = {
    name: "ellie",
    age: 20,
  };

  const obj2 = {
    animal: "🐕",
  };

  // console.log(getValue(obj, "name")); // ellie
  // // getValue라는 함수에 obj이름과 키를 전달하면 값을 보여주는
  // console.log(getValue(obj, "age")); // 20

  // function getValue<T extends object>(name: T, key: string): string {
  //   return name[key];
  // }
  // console.log(getValue(obj, "name"));

  // keyof => object안에 들어있는 키의 값 => object 키의 값중 하나라는 뜻
  // T[K] => T라는 object중 K라는 키의 값을 말함
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  console.log(getValue(obj, "name"));
}
