var 동물 = 123;
var 동물1 = { name: "kim", age: 20 };
// const 변수는 절대 바꿀 수 없다.
var 출생지역 = "seoul";
// 출생지역 = 'busan'
// object 자료 수정은 막지 못한다.
var 출생지역1 = { region: "seoul" };
출생지역1.region = "busan";
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
var task = {
    color: "안녕",
    size: 20,
    position: [1, 2, 3],
};
// task = {
//     color :"안녕",
//     size : 20,
//     position : [1]; // 여기서 오류 발생 > readonly 속성 붙혔기 때문
// }
