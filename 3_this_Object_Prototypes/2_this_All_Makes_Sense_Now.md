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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 2.3 　  Everything In Order

> nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 2.4 　  Binding Exceptions

> yujo

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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
