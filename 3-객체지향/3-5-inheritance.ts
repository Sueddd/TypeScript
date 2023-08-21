{
  // 캡슐화 시켜보기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 제어자 외에도 인터페이스로 추상화 만들기
  // 나랑 이런 이런 행동을 하려면 이런이런 조건을 갖고 있어야해 라는 >
  // 계약서? 같은 느낌
  interface CoffeeMaker {
    // makeCoffee에 shots을 넣어주면 CoffeeCup을 반환받을 수 있따.
    makeCoffee(shots: number): CoffeeCup;
  }
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    // 기계 청소
    clean() {
      console.log("cleaning the machine...🫧");
    }

    // 커피 갈기
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffe beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    // 커피 데우기
    private preheat(): void {
      console.log("heating up...");
    }

    // 커피 추출
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... `);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots); // 커피콩 갈기
      this.preheat(); // 커피 기계 데우기
      return this.extract(shots); // 커피 추출
    }
  }

  // CoffeeMachine 상속 => 생성자가 private이면 상속을 못함 => public으로 변경 or 상속하는 자식에서는 변경가능한 protected 사용
  class CaffeLatteMachine extends CoffeeMachine {
    // 만약 자식클래스에서 또다른 데이터를 생성자에서 받아올 수 있다면
    // 자식 클래스에서 생성자는 꼭 super를 붙혀야 한다. => 부모의 생성자를 호출해 줘야함
    // 부모 클래스의 생성자 coffeeBeans를 전달해야함 => beans: number 이렇게 전달
    // serailNumber는 자식 클래스에서 새롭게 만든 생성자 데이터
    constructor(beans: number, public serialNumber: string) {
      // 부모 클래스의 생성자 전달
      super(beans);
    }

    // 우유 끓이기 => 내부에만 있는 함수라 private
    private steamMilk(): void {
      console.log("Steaming some milk ...🥛");
    }
    // 자식 클래스에서 부모 클래스에 있는 함수를 덮어 씌울 수 있음 => overwriting
    makeCoffee(shots: number): CoffeeCup {
      // super를 붙혀서 부모 클래스의 함수 호출
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        // coffee는 그래도, hasMilk : true로 덮어씌우기
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);

  // 두개를 전달해 줘야함
  const latteMachine = new CaffeLatteMachine(23, "sss");

  // CoffeeMachine을 사용해서 이 안의 함수 모두 사용가능
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee); // 커피 하나 만들어짐
  console.log(latteMachine.serialNumber);
}
