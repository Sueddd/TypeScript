{
  // 동일한 키와 state별로 다른 값을 가지고 있도록
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  //   function login(): LoginState {
  //     return {
  //       result: "success",
  //       response: {
  //         body: "logged in!",
  //       },
  //     };
  //   }
  // loginstate를 promise하는 promise를 리턴할 것
  // 타입이 SuccessState이면 로그인 출력, 타입이 FailState면 실패 출력
  // 로그인 후에 받은 state를 출력해보자.
  // 이것도 답이긴 하지만 이게 아닌 다른 경우가 있음
  function printLoginState(state: LoginState) {
    state.result; // success or fail
    if (state.result === "success") {
      console.log(`오예 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
