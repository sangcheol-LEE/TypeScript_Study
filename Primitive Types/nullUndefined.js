"use strict";
// 타입스크립트에서 undefined와 null은 실제로 각각 undefined와 null 이라는 타입을 가집니다.
// void와 마찬가지로, 그 자체로는 그다지 유용하지 않습니다.
// 둘 다 소문자만 존재합니다.
// 설정을 하지 않으면 number에 undefined와 null을 할당할 수 있습니다.
// 하지만 컴파일 옵션에서 "--strictNullChecks" 사용하면 null 과 undefined는 void나 자기 자신들에게만 할당할 수 있습니다.
// => 이 경우 null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 합니다.
// let MyName: string = null; // --strictNullChecks 옵션이 켜져있다.
// let u : undefined = null
let v = undefined;
let union = null;
union = "Lee";
// null in Js
// 1. null 이라는 값으로 할당된 것
// 2. 무언가 있는데 사용할 준비가 덜 된 상태
// 3. null 이라는 타입은 null이라는 값만 가질 수 있습니다.
// 4. 런타임에서 typeof연산자를 이용해서 알아내면, object입니다.
// undefined in Js
// 값을 할당하지 않은 변수는 undefined라는 값을 가짐
// 무언가 아예 준비가 안된 상태
// object의 property가 없을 때도 undefined 입니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefinded입니다.
let un = undefined;
