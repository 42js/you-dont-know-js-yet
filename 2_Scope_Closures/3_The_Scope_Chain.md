# The Scope Chain

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 3: The Scope Chain](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-3:-The-Scope-Chain) |
| sunpark |  |
| jachoi |  |
| dongbkim |  |

## Quiz

[3.1　Shadowing](#31---Lookup-Is-Mostly-Conceptual)<br>
[3.2　Function Name Scope](#32---Function-Name-Scope)<br>
[3.3　Arrow Functions](#33---Arrow-Functions)<br>

### 3.1 　  Shadowing

> jachoi

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 3.2 　  Function Name Scope 

```
var a = function ofTheTeacher() {
    console.log(ofTheTeacher);
};

a();

console.log(ofTheTeacher);
```
1. 위 `ofTheTeacher`가 있는 scope에 대해 서술하시오.
2. 에러가 나는 곳을 찾고, 이유를 서술하시오.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
1.ofTheTeacher is declared as an identifier **inside the function itself**
2.**console.log(ofTheTeacher)** 1번과 같은 이유.
</div>
</details>
<br>

### 3.3 　  Arrow Functions

> holee

1. 화살표 함수는 익명 함수로만 사용할 수 있다. ( O / X )

2. 다음 출력은?
```js
const func = function() {
  console.log(arguments);
}
func(1,2,3,4,5);

const arrowfunc = () => {
  console.log(arguments);
}
arrowfunc(1,2,3,4,5);
```

3. 화살표 함수는 prototype 속성이 존재한다. ( O / X )

4. 다음 출력은?
```js
const a = {
  age: '3',
  say: () => {
    console.log(`내 나이는 ${this.age} 이다.`);
  }
}
a.say();
```

```js
function Person(age) {
  this.age = age;
}
Person.prototype.myAge = function (a) {
  return a.map(function(x) {
    return `${x} ${this.age} 입니다.`;
  });
}
const jeon = new Person(3);
const ary = jeon.myAge(['내나이는']);
console.log(ary); 
```

```js
function Person(age) {
  this.age = age;
}
Person.prototype.myAge = function (a) {
  return a.map(x => `${x} ${this.age} 입니다`);
}
const jeon = new Person(3);
const ary = jeon.myAge(['내나이는']);
console.log(ary); 
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 화살표 함수는 익명 함수로만 사용할 수 있다. ( **O** / X )

    > Arrow functions are lexically anonymous, meaning they have no directly related identifier that references the function. **p.53** 

2. 다음 출력은?
```js
const func = function() {
  console.log(arguments);
}
func(1,2,3,4,5); // [1,2,3,4,5];

const arrowfunc = () => {
  console.log(arguments);
}
arrowfunc(1,2,3,4,5); // ReferenceError: arguments is not defined
```

다음 방법으로 대신 얻을 수 있다.
```js
const arrowfunc = (...args) => { // ... 전개연산자를 사용해야함.
  console.log(args);
}
arrowfunc(1,2,3,4,5); // [1,2,3,4,5];
```
참고로 arguments는 유사배열이고 args는 배열이다.

3. 화살표 함수는 prototype 속성이 존재한다. ( O / **X** )

    <img src="https://user-images.githubusercontent.com/22424891/99607963-519e2100-2a50-11eb-90a8-915dec8af2c6.png" height="200px" />

> prototype 프로퍼티가 없다는건 즉 화살표 함수는 생성자 함수로 사용할 수 없다.

4. 다음 출력은?
```js
const a = {
  age: '3',
  say: () => {
    console.log(`내 나이는 ${this.age} 이다.`);
  }
}
a.say(); // 내 나이는 undefined 이다.
```

```js
function Person(age) {
  this.age = age;
}
Person.prototype.myAge = function (a) {
  return a.map(function(x) {
    return `${x} ${this.age} 입니다.`;
  });
}
const jeon = new Person(3);
const ary = jeon.myAge(['내나이는']);
console.log(ary); // ["내 나이는 undefined 입니다."];
```

```js
function Person(age) {
  this.age = age;
}
Person.prototype.myAge = function (a) {
  return a.map(x => `${x} ${this.age} 입니다`);
}
const jeon = new Person(3);
const ary = jeon.myAge(['내나이는']);
console.log(ary); // ["내 나이는 3 입니다."];
```

    > 화살표 함수는 자기 자신만의 this를 가지고 있지 않는다. 화살표 함수는 동적으로 결정되지 않고 스코프체인을 탐색한다. 화살표 함수는 객체의 메서드로 사용하지 말자.
</div>
</details>
<br>
