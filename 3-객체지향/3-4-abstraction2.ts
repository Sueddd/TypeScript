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

  // 조금 더 상업적으로 이용되는 인터페이스
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 클래스 이름을 변경
  // 이 클래스는 인터페이스 규격을 따라간다.
  // 클래스 CoffeMachine을 인터페이스 CoffeeMaker를 만드는 애
  // 클래스에서는 인터페이스에서 규약된 함수를 모두 만들어야 한다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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

  // 커피만 만들 수 있는 클래스
  // implements로 인터페이스를 받아올 수는 없나? => 그럼 이 클래스에 인터페이스에 있는 함수 다 구현해 줘야함
  class AmateurUser {
    // CoffeeMaker라는 인터페이스만 받아올 수 있다.
    constructor(private machine: CoffeeMaker) {}
    makeCoffe() {
      const coffee = this.machine.makeCoffee(3);
      console.log(coffee);
    }
  }

  // 더 많은 기능을 할 수 있음
  class ProBarista {
    // CommercialCoffeeMaker라는 인터페이스를 받아올 수 있다.
    // 생성자에서 받아오는 것, 클래스보다는 조금 더 좁은
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(3);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

  // 두 클래스에 모두 동일한 maker라는 object 전달 > 같은 커피머신을 쓰고 있다고 볼 수 있음
  // 커피머신 인스턴스를 만들수 있음
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffe();
  pro.makeCoffee();

  // 만약 생성자에 private이 안 걸려 있으면 이렇게 만들 수도 있음
  // const maker5:CommercialCoffeeMaker = new CoffeeMachine(5);
  // maker5.clean();
}
