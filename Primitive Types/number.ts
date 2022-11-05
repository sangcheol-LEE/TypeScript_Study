// 자바스크립트와 같이 타입스크립트의 모든 숫자는 부동 소수점 값입니다.

let decimal : number = 6; // 10진수 리터럴
 
let hex:number = 0xf00d; // 16진수 리터럴

let binary : number = 0b1010; // 2진수 리터럴

let octal :number = 0o744; //8진수 리터럴

let notANumber : number = NaN; 

let underscoreNum : number = 1_000_000; // 백만 

console.log(decimal,hex,binary,octal,notANumber,underscoreNum)