## 객체를 생성하는 방법
- 객체 리터럴
- 생성자 함수
- 화살표 함수

## 생성자 함수
```javascript
function Person(name){
    this.name = name;
} // 이 부분을 생성자 함수라고 한다. 

const me = new Person('kim');
```
- 생성자 함수의 첫글자는 [[타이틀 케이스|식별자네이밍규칙과 네이밍컨벤션.md]]로 한다.

## 프로토 타입
- 프로토 타입은 자바스크립트에서 상속을 통한 객체 지향을 구현하기 위해

## 렉시컬 스코프(정적 스코프)
- 

## 프로토타입의 생성시점
- 

## constructor 와 non-constructor
- constructor: 생성자 함수로 호출할 수 있는 함수
- non-constructor: 생성자 함수로 호출할 수 없는 함수
    - 예: 화살표 함수

## 19.6 객체의 생성 방식과 프로토타입의 결정