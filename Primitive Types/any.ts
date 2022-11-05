// 어떤것이나 된다란 의미 ..

function returnAny2(text: any) :any {
  console.log(text)
}

const returnAny = (message:any) => {
  console.log(message)
}

const any2 = returnAny2("리턴타입은 뭔가욤")
const any1 = returnAny("리턴은 아무거나")

any2.toString();

// any를 쓸수밖에 없는 곳이 있다.


// 어떤 타입이어도 상관없는 타입.
// 이걸 최대한 쓰지 않는게 핵심입니다.
// 왜나면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문입니다.
// 그래서 컴파일 옵션 중에눈 any를 써야하는데 쓰지 않으먄 오류를 뱉도록 하는 옵션도 있습니다.
// - nolmplicitAny

 
/* 
  any는 계속해서 개체를 통해 전파됩니다
  결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하십시오
  타입 안전성은 타입스크립트를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를 사용하지 않도록 해야합니다.
   any = 적폐...
*/

// 전파 확인
let looselyTyped : any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj :any) {
  const a : number = obj.num
  const b = a + 1;
  return b
}

const c = leakingAny({num : 0});
// c.indexOf("0")