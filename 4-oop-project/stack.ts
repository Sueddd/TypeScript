{
  // push , pop을 클래스로 만들기 ? 맨 뒤에 들어온 게 맨처음으로 나가게
  // 클래스를 이용해서 만들기?
  // 숫자 넣고 빼기

  //
  interface Stack {
    // 스택 안에 몇가지의 문자열이 들어있는지 확인하는 size
    readonly size: number; // readonly = 값을 외부에서 변경 불가, 내부에서 결정
    push(value: string): void;
    pop(): string;
  }

  // 값을 감싸줄 노드 타입 > 노드는 데이터를 담고 있는 데이터 타입이다
  type StackNode = {
    // 사용자가 데이터를 넣어서 한단계 감싸는? 무언가를 만든다면 불변성을 유지하는 것이 좋다 => 한 번 만들어지면 절대 그 내용물이 변경되지 않도록 readonly 붙히기.
    readonly value: string;
    // 다른 스택 노드를 가리킬 수 있는 nextnode
    readonly next?: StackNode;
    // ?를 붙혀서 옵셔널로
    // next: StackNode | undefined;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    // 외부에서는 size를 읽을 수 있음 > get으로 하면
    // 같은 변수 이름을 쓸 때 _를 붙혀주면 된다.
    get size() {
      return this._size;
    }
    push(value: string) {
      // value에는 전달받은 value를 할당함으로 동일해서 생략
      const node: StackNode = { value, next: this.head };
      // head에는 방금 만든 node 할당
      this.head = node;
      this._size++;
    }
    pop(): string {
      this._size--;
    }
  }
}
