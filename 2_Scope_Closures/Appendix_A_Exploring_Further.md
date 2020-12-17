# Appendix A. Exploring Further

## 요약
| Name | URL |
|:---|:---|
| holee | [Appendix A: Exploring Further](https://github.com/hochan222/Everything-in-JavaScript/wiki/Appendix-A:-Exploring-Further_) |
| sunpark |  |
| dongbkim |  |

## Quiz
[A.1　Implied Scopes](#A1---Implied-Scopes)<br>
[A.2　Anonymous vs. Named Functions](#A2---Anonymous-vs-Named-Functions)<br>
[A.3　Hoisting: Functions and Variables](#A3---Hoisting-Functions-and-Variables)<br>
[A.4　The Case for var](#A4---The-Case-for-var)<br>
[A.5　What's the Deal with TDZ?](#A5---Whats-the-Deal-with-TDZ)<br>
[A.6　Are Synchronous Callbacks Still Closures?](#A6---Are-Synchronous-Callbacks-Still-Closures)<br>
[A.7　Classic Module Variations](#A7---Classic-Module-Variations)<br>

### A.1 　  Implied Scopes

1. 함수의 스코프는 중괄호 안 실행구문과 매개변수를 항상 따로 나누어 두개의 스코프로 따진다. ( O / X )

2. 매개변수 스코프의 햇갈리는 작동방식을 막을 수 있는 코딩 스타일 방식을 두가지 서술하시오.
  1) `_____________`
  2) `_____________`

3. 함수표현식으로 함수를 선언할 때 변수명이 아닌 함수에 붙이는 이름(`var a = function b(){};` 에서 `b`)은 함수의 실행문 안에서 `let`이나 `const` 키워드를 사용해 다른 변수 이름으로 사용할 수 있다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 함수의 스코프는 중괄호 안 실행구문과 매개변수를 항상 따로 나누어 두개의 스코프로 따진다. ( O / **X** )
  > Default values, rest parameters (using ...), and destructured parameters의 경우에는 두개의 스코프로 나누어 생각하지만, 일반적인 경우에는 하나의 스코프로 따져 생각한다. **p.186**

2. 매개변수 스코프의 햇갈리는 작동방식을 막을 수 있는 코딩 스타일 방식을 두가지 서술하시오.
  1) `로컬 변수로 매개변수를 쉐도잉하지 말것`
  2) `초기화 매개변수(default parameter)에서 다른 매개변수를 사용하는 함수를 지정하지 말것` **p.190**

3. 함수표현식으로 함수를 선언할 때 변수명이 아닌 함수에 붙이는 이름(`var a = function b(){};` 에서 `b`)은 함수의 실행문 안에서 `let`이나 `const` 키워드를 사용해 다른 변수 이름으로 사용할 수 있다. ( O / **X** )
  > But this is perfectly legal shadowing, not re-declaration, because the two `ofTheTeacher` identifiers are in separate scopes. **p.190~191**

</div>
</details>
<br>

### A.2 　  Anonymous vs. Named Functions

> dongbkim

1.  안에 알맞은 결과를 말하시오.
```js
var config = {};

config.cb = function(){
    // ..
};


var [ noName ] = [ function(){} ];
config.cb.name;
noName.name
//위 2 호출 결과
```
<br/>
2. IIFE인 함수들을 고르시오.

```js
(function a(){

})();

!function b(){
    // ..
}();

-function c(){
	// ..
}();

+function d(){
    // ..
}();

~function e(){
    // ..
}();

=function f(){
	// ..
}();
```
<br/>
3. 익명 함수를 왜 지양하는 것이 좋은지 자유롭게 서술하시오.
<br/>

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. ""  빈 문자열이 나온다.
> Any assignment of a function expression that's not a simple assignment will also fail name inferencing.

<br/>

2. a, b, d, e
> The !, +, ~, and several other unary operators (operators with one operand) can all be placed in front of function to turn it into an expression. Then the final () call is valid, which makes it an IIFE.

<br/>

3. Any name you omit is making the program harder to read, harder to debug, harder to extend and maintain later.

<br/>
</div>
</details>
<br>

### A.3 　  Hoisting: Functions and Variables

> holee

1. 다음 프로그램의 출력은?

```js
sayName();

var sayName = function(){
  console.log('hello world');
}
```

2. 다음 빈칸에 들어갈 알맞은 것은?

(1) ```function sayName(){}``` => ```___________```  
(2) ```var sayName = function(){}``` => ```___________```  

**ㄱ. 함수 표현식**  
**ㄴ. 함수 선언식**  

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 프로그램의 출력은?

```js
sayName();

var sayName = function(){
  console.log('hello world');
}
```

> Uncaught TypeError: sayName is not a function at <anonymous>:1:1  
> '선언과 할당'의 분리가 발생하기 때문이다.

2. 다음 빈칸에 들어갈 알맞은 것은?

(1) ```function sayName(){}``` => ```함수 선언식```  
(2) ```var sayName = function(){}``` => ```함수 표현식```

</div>
</details>
<br>

### A.4 　  The Case for var

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### A.5 　  What's the Deal with TDZ?

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### A.6 　  Are Synchronous Callbacks Still Closures?

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### A.7 　  Classic Module Variations

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
