# TypeScript

| Compiled                          | Interpreted                           |
| --------------------------------- | ------------------------------------- |
| 컴파일이 필요하다.                | 컴파일이 필요하지 않다.               |
| 컴파일러가 필요하다.              | 컴파일이 필요하지 않다.               |
| 컴파일 하는 시점 O => 컴파일 타임 | 컴파일 하는 시점이 없다.              |
| 컴파일된 걀과물을 실행            | 코드 자체를 실행한다.                 |
| 컴파일된 결과물을 실행하는 시점   | 코드를 실행하는 시점이 있다 => 런타임 |

- Typescript는 Typescript 컴파일러가 자바스크립트 파일로 변경해줌 !

## Typescript 설치 및 사용

1. 자바스크립트 실행환경 설치

- node.js
- browser

2. Typescript 컴파일러 설치

- npm (권장)

1. npm i typescript -g
2. node_modules/.bin/tsc
3. tsc.source.ts

- visual studio plugin 설치

## First Type Annotation

- 타입스크립트가 가진 고유 기능
- 변수 선언시 타입을 지정해주는 것
- let a : string = "hello";

# Typescript Types

- typescript = static types - 개발하는 중간에 타입을 체크
- javascript = danamic types - 런타임에 돌입해야만 타입을 알 수 있다.

## Typescript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입

1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
7. array(object)

## 프로그래밍을 도울 몇가지 타입이 좀 더 제공

1. any, void, never, unknown
2. Enum
3. Tuple(obj형)

### primitive types

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형

1. string
2. number
3. boolean
4. null
5. undefined
6. symbol

- 위의 타입들은 리터럴 값으로 primitive타입의 서브타입을 나타낼 수 있음.
  또는 래퍼객체로 만들 수 있다.
  ex> new Boolean(true)
- Typescript의 핵심 primitive는 모두 소문자여야한다.

# 작성자와 사용자의 관점으로 코드 바라보기

### Type System

1. 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
2. 컴파일러가 자동으로 타입을 추론하는 시스템

- 타입스크립트의 타입 시스템

1. 타입을 명시적으로 지정할 수 있다.
2. 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론 !

- 타입이란, 해당 변수가 할 수 있는 일을 결정합니다.
- 자바스크립트는 함수 사용법에 대한 오해를 야기합니다.

  1. noimplicitAny 옵션을 켜면, 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 'any' 라고 판단하게 되면,
     컴파일 에러를 발생시켜 명시적으로 지정하도록 유도합니다.

  2. strictNullChecks 옵션을 켜면, 모든 타입에 자동으로 포함되어 있는 'null'과 'undefined'를 제거해줍니다.

- 명시적으로 리턴 타입을 지정해야할까?

  1. noImplicitReturns 옵션을 켜면 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

- 매개변수가 object가 들어오는 경우

  1. 객체 리터럴로 매개변수에 할당 후 각각의 키 값에 타입을 지정해준다. f7(a : {name: string, age: number}): string {}

- 나만의 타입을 만드는 방법.

  1. interface PersonInterface {
     name : string;
     age: number
     }
  2. type :PersonTypeAlias = {
     name : string;
     age : number;
     }
  3. function f8(a: PersonInterface) : string {
     return `이름은 ${a.name}이고 나이는 ${a.age}입니닷`
     }

  console.log(f8({name :"lee", age: 38})) // `이름은 lee이고 나이는 38입니닷`
