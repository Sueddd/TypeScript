{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    state.state; // 'loading', 'success', 'fail'
    if (state.state == "loading") {
      console.log("👀 loading...");
    } else if (state.state == "success") {
      console.log(`😃 loaded ${state.response.body}`);
    } else if (state.state === "fail") {
      console.log(`😱 no network ${state.reason}`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
