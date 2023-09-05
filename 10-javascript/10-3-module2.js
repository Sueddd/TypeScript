// module1에서 정의한 것을 module2 파일에서 사용 가능
// 모듈화하지 않으면 기본적으로 모든 것은 글로벌 스코프로 사용 가능
import add from "./10-3-module1";
console.log(add(1, 2));
