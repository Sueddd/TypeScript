{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 커피 샷그람 => 한 샷당 얼마나 많은 커피가 필요한지, 중량
  const BEANS_GRAMM_PER_SHOT: number = 7;

  // 커피 콩 => 몇개의 콩이 있는지
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    // 기존의 커피콩의 양이 우리가 필요로 한 양보다 작다면 에러
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffe beans!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      // key와 value의 이름이 동일하면 생략 가능
      //   shots : shots,
      shots,
      hasMilk: false,
    };
  }

  // 커피빈 충전 
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
