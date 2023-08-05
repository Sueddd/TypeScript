{
  /**
   * Union Types : OR
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  // 성공하면 성공한 state, 실패하면 실패한 state
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
  // loginstate를 promise하는 promise를 리턴할 것
  // 타입이 SuccessState이면 로그인 출력, 타입이 FailState면 실패 출력
  // 로그인 후에 받은 state를 출력해보자.
  // 이것도 답이긴 하지만 이게 아닌 다른 경우가 있음
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`오예 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }

  // discirminame union type
}
