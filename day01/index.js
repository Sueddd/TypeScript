// // 이 변수에는 string만 들어올 수 있다.
// let 이름: string = "kim";
// // 배열은 []로 나타내고 앞에 string은 배열에 string으로만 구성할 수 있다는 뜻
// let 배열 : string[] = ['kim','park'];
// // 객체는 {?? : string} 이렇게 나타낸다. name이란 속성에는 string만 가능하다는 뜻
// let 객체 : {name : string} = {name : "kim"}
// string 혹은 number가 들어올 수 있다.
var 이름 = 123;
// string이 들어있는 배열 또는 number가 들어올 수 있다.
var 하우 = ["kim", "hi"];
// 함수의 파라미터에도 타입을 지정할 수 있고
// 리턴값에도 타입을 지정할 수 있다.
function 함수(x) {
    return x * 2;
}
var john2 = [123, true];
// john이라는 자료는 무조건 name : string 이라는 자료만 들어올 수 있게 된다.
var john = { name: "kim", age: "123" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
