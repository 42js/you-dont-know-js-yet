# *this* All Makes Sense Now!

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 2: this All Makes Sense Now!](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-2:-this-All-Makes-Sense-Now!) |
| sunpark |  |
| dongbkim |  |
| gim | [Chapter 2: this All Makes Sense Now!](https://velog.io/@mkitigy/Chapter-2-this-All-Makes-Sense-Now) |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

## Quiz

[2.1　Call-site](#21---Call-site)<br>
[2.2　Nothing But Rules](#22---Nothing-But-Rules)<br>
[2.3　Everything In Order](#23---Everything-In-Order)<br>
[2.4　Binding Exceptions](#24---Binding-Exceptions)<br>
[2.5　Lexical `this`](#25---Lexical-this)<br>

### 2.1 　  Call-site

> gim

1. this 란 무엇인가요? (자신만의 표현으로 자유롭게 말해 봅시다. 🙂)

2. 어떤 함수 안에서 this 가 선언 되었을 때, this 가 바인딩 하는 주체는 해당 함수의 호출 지점이다. (O, X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. this 란 무엇인가요? (자신만의 표현으로 자유롭게 말해 봅시다. 🙂)

- `this` 란, 런타임에서 객체를 바인딩한다. (△)

- `this` 란, 모든 함수의 스코프 내에서 자동으로 정의되는 특수 식별자 키워드다. (o)

2. 어떤 함수 안에서 this 가 선언 되었을 때, this 가 바인딩 하는 주체는 해당 함수의 호출 지점이다. (O, __X__)

> call-site는 this 의 binding case 혹은 call-stack을 이해하기 위한 사전 개념일 뿐이지, 바인딩 주체라고 말 할 수는 없다.

- inner regular function 의 default binding: `window`/`undefined`

- 전역에서 `apply` , `call` , `binding` 을 이용한 function call

</div>
</details>
<br>

### 2.2 　  Nothing But Rules

> sohpark

1. 아래 코드에서 1번부터 4번까지 각각의 결과값을 추론해보고 어떤 binding의 예시인지 적어주세요. 

```javascript
"use strict";

function foo() {
  console.log(this.a);
}

function bar(cb) {
  cb();
}

var obj = {
  a: "objobj",
  foo: foo,
};

var a = "global!";

// (연속된 호출이 아니라고 가정해주세요)
foo();            // 1번
obj.foo();        // 2번
bar(obj.foo);     // 3번
new foo("foo?");  // 4번
```

2. JavaScript의 map, filter 같은 내장 함수는 this 객체를 인자로 넘겨줄 수 없기 때문에 explicit binding을 사용하여 콜백을 넘겨줘야 한다. (O, X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1.

|  |1번 | 2번 | 3번 | 4번 |
|---|:--:|:--:|:--:|:--:|
결과 | TypeError | objobj | TypeError | undefined|
종류 | default | implicit | default | new |

1-1번: use strict로 인해 전역을 this로 참조할 수 없기에 undefined.a는 TypeError

1-2번: implicit binding에 의해 obj의 a가 출력됩니다.

1-3번: 단순 함수의 참조값을 bar에 인자로 넘기고 있기 때문에 결국 콜백 호출 시 또 전역을 참조하게 되면서 1번과 동일한 오류가 발생합니다.

1-4번: foo 함수 안에 a의 값이 없기 때문에 undefined가 됩니다. 

2.
JavaScript의 map, filter 같은 내장 함수는 this 객체를 인자로 넘겨줄 수 없기 때문에 explicit binding을 사용하여 콜백을 넘겨줘야 한다. (O, __X__)

> forEach와 더불어 map, filter는 모두 두번째 인자로 binding할 this 객체를 넘겨줄 수 있습니다. 

</div>
</details>
<br>

### 2.3 　  Everything In Order

> nkang

1. `new` binding과 `call` binding의 우선 순위는 직접적으로 비교할 수 있다.(O/X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
(X)

`new foo.call(obj1)` is not allowed, to test new binding directly against explicit binding.
  
</div>
</details>
<br>

2. 다음 코드의 실행 결과를 설명하여 봅시다.
```
function foo(p1,p2) {
  this.val = p1 + p2;
}
var obj1 ={};
var bar = foo.bind( obj1, "p1" );
bar("p2");
var baz = new bar( "p3");
baz.val;
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
p1p3

any argumetns passed after the first `this` binding argument are defaulted as standard arguments to the underlying function.
  
</div>
</details>
<br>

### 2.4 　  Binding Exceptions

> yujo
1. 아래 코드의 출력 결과를 맞춰보세요!
```js
function foo() {
  console.log(this.a);
  a = 2;
  bar();
}

function bar() {
  console.log(this.a);
}

var a = 1;

foo.call(null);
```
```js
function foo() {
  console.log(this.a);
  a = 2;
  bar();
}

function bar() {
  console.log(this.a);
}

var a = 1;

foo.call('');
```
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

```js
function foo() {
  console.log(this.a); // 1
  a = 2;
  bar();
}

function bar() {
  console.log(this.a); // 2
}

var a = 1;

foo.call(null);
```
```js
function foo() {
  console.log(this.a); // undefined
  a = 2;
  bar(); 
}

function bar() {
  console.log(this.a); // 2
}

var a = 1;

foo.call('');
```

</div>
</details>
<br>


2. 만약 위 코드의 결과가 다르게 나왔다면 그 이유는 무엇일까요?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

```call```,  ```apply```,  ```bind``` 메서드에 첫 번째 인자로 ```null``` 또는 ```undefined```를 넘기면 this 바인딩이 무시되고 기본 바인딩 규칙이 적용되기 때문입니다.

</div>
</details>
<br>

### 2.5 　  Lexical `this`

> holee

1. 다음 출력은?

```js
var number = 1;

function a() {
  var number = 10;
  b();
}

function b() {
  console.log(number);
}

a(); // ?
b(); // ?
```

2. ES6에서 소개하는 화살표함수는 화살표 함수를 둘러싸는 렉시컬 범위(lexical scope)의 this가 사용된다. (O, X)
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 
```js
a(); // 1
b(); // 1
```

> lexical scope에 관한 이야기다. 함수의 호출로 상위 스코프가 결정된 것이 아니라 함수의 선언에 따라 상위 스코프가 결정되었기 때문에 다음과 같은 결과가 나온다.  

> 함수의 호출에 따라 상위 스코프가 정해지는 것을 Dynamic Scope라고 한다. Perl, Bash Shell 등이 있다.  

> 요즘의 대부분의 프로그램 언어(JavaScropt, C, Java 등)들은 Lexical Scope를 따른다.  

2. ES6에서 소개하는 화살표함수는 화살표 함수를 둘러싸는 렉시컬 범위(lexical scope)의 this가 사용된다. (__O__, X)

> 화살표 함수는 자신의 this가 없습니다.  대신 화살표 함수를 둘러싸는 렉시컬 범위(lexical scope)의 this가 사용됩니다; 화살표 함수는 일반 변수 조회 규칙(normal variable lookup rules)을 따릅니다. 때문에 현재 범위에서 존재하지 않는 this를 찾을 때, 화살표 함수는 바로 바깥 범위에서 this를 찾는것으로 검색을 끝내게 됩니다. [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)  

</div>
</details>
<br>
