"use strict";
// new symbol을 사용할 수 없고, Symbol을 함수로 이용해서 symbol 타입을 만들어낼 수 있습니다.
console.log(Symbol("foo") === Symbol("foo")); // false
// 프리미티브 타입의 값을 담아서 사용합니다.
// 고유하고 수정 불가능한 값으로 만들어줍니다.
// 그래서 주로 접근을 제어하는데 쓰는 경우가 많습니다!
const sym = Symbol();

// 함수로 사용할 때는 대문자 심볼
// 타입으로 사용할 때는 소문자 심볼!
