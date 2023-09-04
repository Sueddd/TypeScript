{
  // TimeoutError라는 클래스는 Error라는 클래스 상속
  // 그렇기 때문에 NetworkClient는 타임 아웃이 될 수도 있고 오프라인이 될 수도 있다.
  // 에러가 난 종류에 맞게 세부적인 클래스를 던질 것이다.
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // 여기서 오류를 발생 시키면? => 어플리케이션(App컴포넌트)는 아무것도 알 수 없다. => 에러가 발생했을 때 정확하게 처리하지 못할거면 캐치하지 않는 것이 더 낫다.
      // try {
      //   this.client.tryConnect();
      // } catch (error) {
      //   console.log("catched!");
      // }
    }
  }
  class App {
    constructor(private userService: UserService) {}
    // 처리할 수 있는 곳에서 try하는 게 더 좋다 > 즉 여기서 하는 게 더 좋음
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // catch에 전달되는 에러는 any 타입이다.
        // 그래서 여기에서는 any 타입이기 때문에 여기서는 instanceof를 사용 불가
        // if (error instanceof OfflineError) {
        //   // error라는 object가 OfflineError라는 클래스의 인스턴스 라면,
        // }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
