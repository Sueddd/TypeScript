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

  // 클래스 이름을 변경
  // 이 클래스는 인터페이스 규격을 따라간다.
  // 클래스 CoffeMachine을 인터페이스 CoffeeMaker를 만드는 애
  // 클래스에서는 인터페이스에서 규약된 함수를 모두 만들어야 한다.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMachine(coffeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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
    extract(shots: number): CoffeeCup {
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
      //   if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      //     throw new Error("Not enough coffe beans!");
      //   }
      //   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      //   return {
      //     shots,
      //     hasMilk: false,
      //   };
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);

  // 외부에서 사용하는 함수 말고 다른 함수들은 호출하지 못하게 private으로 다른 함수들은 막아버리기
  maker.makeCoffee(2);
  // 추상화는 인터페이스를 굉장히 간단하고 심플하게 만듬으로써 사용하는 사람이
  // 간편하게 많은 생각을 하지 않고도 심플하게 사용할 수 있도록 도와준다.

  // abstraction 방법은 여러가지가 있는데 접근 제어자를 통해 충분히 추상화 가능
  // 인터페이스를 통해서 추상화 가능 , 보통 정보은닉을 통해서도 충분히 추상화 가능

  const maker2: CoffeeMachine = CoffeeMachine.makeMachine(32);
}
