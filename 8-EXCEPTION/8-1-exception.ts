//
// Java : Exception
// JavaScript : Error라는 클래스가 존재

// 만약 배열을 정말 커다란 범위의 배열로 만든다면, 만들 때는 경고 메세지만 나온다.
// const array = new Array(10000000000000000);
// 이를 실행하면 에러가 나온다.
// RangeError => 에러클래스를 상속한 조금 더 상세한 에러
//

// Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents📁";
}

// 파일을 열면 닫는 함수 필요
function closeFile(fileName: string) {}

// finally를 적지 않고 가장 밑에서 실행한다면, catch 안에서 어떤 일이 일어날 지 모르고 => 만약 이게 또다른 함수이고 무언가 실행이 된다면,

function run() {
  const fileName = "not exist!💩";
  // 시도를 했다가 문제가 생기면 catch로 잡아냄
  try {
    console.log(readFile(fileName));
  } catch (error) {
    // 에러가 발생해서 catch로 잡아줬기 때문에 죽지는 않는다.
    console.log(`catched ! !`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();
