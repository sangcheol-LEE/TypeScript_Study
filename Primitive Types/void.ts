// void타입은
// 어떤 상태도 갖지 않은 빈상태를 의미합니다.
// 값을 반환하지 않는 그런 상태에 리턴 타입으로 사용한다.
// 함수의 반환 타입으로 쓰임


function returnVoid(message: string): void {
  console.log(message)

  return undefined; //
}
// => void로 지정된 함수는 이 함수의 리턴을 가지고 무엇을 하지 않겠다고 명시적으로 표시하는 것.
// 언디파인드만 void에 할당 가능
const r = returnVoid('리턴이 없다');





