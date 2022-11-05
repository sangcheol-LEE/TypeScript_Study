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
  또는 래퍼객체로 만들 수 있다. ex> new Boolean(true)
- Typescript의 핵심 primitive는 모두 소문자여야한다.
