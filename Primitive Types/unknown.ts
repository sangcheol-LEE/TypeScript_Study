// any가 주는 타입의 불안전함을 해소하고자 나온 대체자.

// 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수 있다 .
// 이러한 값은 동적 콘텐츠 예> 사용자로부터, 또는 우리의 api의 모든 값을 의도적으로 수락하기를 원할 수 있다.
// 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 우너하므로 unknown타입을 제공함

declare const maybe: unknown;

// const aNumber :number = maybe;

if(maybe === true) {
  const aBoolean:boolean = maybe;

  // const aString: string = maybe // 이건 안된다.
}


// typeof type guard
if(typeof maybe === "string") {
  const aString:string = maybe;

  // const aBoolean:boolean = maybe; // 에러가 난다.
}

/*
  애니보다 늦게 나왔다.
  애니와 짝으로 애니보다 타입세이프한 타입
  - 애니와 같이 아무거나 할당가능하다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  - 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.

  unknown 타입을 사용하면 런타임 에러를 줄일 수 있을 것 같다.
  - 사용 전에 데이터의 일부 유형 검사를 수행해야 함을 알리는 api에 사용할 수 있을 것 같다.

  // any를 사용할 자리에 unknown을 쓰려고 노력해보는 것 부터가 타입을 안전하게끔 하는 것의 시작이라고 할 수 있다.
*/


