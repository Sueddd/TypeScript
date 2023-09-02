class NetworkClient {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login...
  }
}

const client = new NetworkClient();
const service = new UserService(client);
service.login();

class App {
  constructor(private userService: UserService) {}
  run() {
    this.userService.login();
  }
}

const app = new App(service);
app.run();
