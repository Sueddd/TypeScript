{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 클래스 안에 멤버 변수를 작성할 때는 const나 let을 붙히지 않는다.
    // 함수도 function이라는 키워드를 작성하지 않아도 된다.
    static BEANS_GRAMM_PER_SHOT: number = 7;
    // 초기값이 있고 상수임 > 변하지 않음
    // BEANS_GRAMM_PER_SHOT은 변하지 않는데 게속 사용되면 메모리 낭비 => static 붙혀줌
    // class level로 지정이 된다. => 클래스와 연결이 되있기 때문에 object마다 호출되진 않음 => this를 붙이지 않고 클래스 이름을 붙여줘야 함

    coffeeBeans: number = 0; // instacne level => static을 붙히지 않음

    // contructor는 클래스를 갖고 object, instance를 만들때 항상 호출되는 함수
    constructor(coffeeBeans: number) {
      // this가 붙은 coffeBeans는 클래스 안의 this를 말하고, this가 붙지 않은 coffeBeans는 들어오는 인자를 말함
      this.coffeeBeans = coffeeBeans;
    }

    // constructor 호출하지 않고 새로운 커피 기계 만들기
    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans);
    }

    // 현재 이클래스에 속성으로는 BEANS_GRAMM_PER_SHOT이라는 상수가 들어있고,
    // coffeBeans라는 속성이 들어있다.두가지의 멤버 변수와 하나의 함수, 하나의 constructor가 들어있는구조
    makeCoffee(shots: number): CoffeeCup {
      // 클래스 안에 있는 멤버 변수에 접근할 때는 바로 이름을 쓰는 것이 아니라
      // this를 붙혀줘야 한다.
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffe beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // new는 이 클래스의 인스턴스를 만든다는 뜻
  // new CoffeeMaker 뒤의 괄호를 붙히는 건 생성자를 호출하는 것
  // new와 class 이름을 이용하면 데이터를 담아서 object를 만들 수 있는데
  // coffeeBeans = 커피콩을 인자로 전달할 수 있다.
  // constructor는 클래스를 이용해 object를 만들 때 항상 처음 호출되는 함수
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = maker.makeCoffee(3);
  const marker4 = new CoffeeMaker(14);
  // 이렇게 하고 파일을 실행하면 CoffeeMaker의 object가 출력된다.

  // object마다 새로 만들어져야 하는 변수가 있다면 멤버 변수로 만들면 되고,
  // 클래스 레벨에서 함께 공유될 수 있는 거라면 static을 이용할 수 있다.

  // new를 사용해 클래스를 만들지 않고, 함수를 이용해 바로 만들 수 있음
  const maker3 = CoffeeMaker.makeMachine(3);

  // 만약 static을 없애주면, 더이상 classlevel의 함수를 이용할 수 없고,
  // 만들어진 object안에서 호출 가능
  // ex)
  //   const marker4 = maker.machine 이렇게 사용해야함

  // 우리가 Math를 사용할 때
  // new Math 이런식으로 사용하는 게 아니라 바로 Math.abs 이런식으로 사용할 수 있던 이유는
  // Math가 클래스레벨에 있는 것이기 때문
}
