// 네버는 일반적으로 리턴에 사용된다.
// 어떠한 상황에서도 리턴되지 않는다를 의미
function error(message : string): never {
  throw new Error (message)

}


function fail() {
  return error("failed")
}

function infiniteLoop():never {
  while(true) {

  }
}



/*
  네버 타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있습니다.
  하지만 네버에는 그 어떤 것도 할당할 수 없습니다.
  any조차 never에게 할당할 수 없습니다.
  잘못된 타입을 넣는 실수를 막고자할 때 사용하기도 합니다.
*/

// 1.
let a: string = "hello";

if(typeof a !== 'string'){
  a;
}

//2.
declare const b: string | number ;

if(typeof b !== "string") {
  b;
}

//3.
type indexable<T> = T extends string ? T & { [index: string]:any } : never;

