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
      // 여기서 처리하는 게 의미있는 일을 할 수 있음
      // show dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
