# Illustrating Lexical Scope

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 2: Illustrating Lexical Scope](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-2:-Illustrating-Lexical-Scope) |
| sunpark |  |
| jachoi | [ydkjsy-scope-closures Chapter 1 ~ 2](https://n00bh4cker.tistory.com/136)|

## Quiz

[2.1　Marbles, and Buckets, and Bubbles... Oh My!](#21---Marbles-and-Buckets-and-Bubbles-Oh-My)<br>
[2.2　A Conversation Among Friends](#22---A-Conversation-Among-Friends)<br>
[2.3　Nested Scope](#23---Nested-Scope)<br>

### 2.1 　  Marbles, and Buckets, and Bubbles... Oh My!

1. JS는 실행(runtime)과정에서 변수의 스코프를 결정한다 ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. JS는 실행(runtime)과정에서 변수의 스코프를 결정한다 ( O / **X** )

   > The JS engine doesn't generally determine these marble colors during runtime **p.23**


</div>
</details>
<br>

### 2.2 　  A Conversation Among Friends

1. 변수 값의 참조는 현제 코드를 작성하는 스코프 위치에 있는 변수나 그 상단에 있는 스코프 위치에 있는 변수만 가능하다. ( O / X )

2. JS에서는 컴파일러만 변수의 선언과 할당을 둘 다 처리한다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. 변수 값의 참조는 현제 코드를 작성하는 스코프 위치에 있는 변수나 그 상단에 있는 스코프 위치에 있는 변수만 가능하다. ( **O** / X )

   > References (non-declarations) to variables/identifiers are allowed if there’s a matching declaration either in the current scope, or any scope above/outside the current scope, but not with declarations from lower/nested scopes. **p.22**

2. JS에서 컴파일러만 변수의 선언과 할당을 둘 다 처리한다. ( O / **X** )

   > Compiler then produces code for Engine to later execute, to handle the `students = []` assignment. The code Engine runs will first ask Scope Manager if there is a variable called students accessible in the current scope bucket. **p.26**


</div>
</details>
<br>

### 2.3 　  Nested Scope

1. 만약 현재 스코프에서 변수를 찾지 못할 경우, 스코프 안 자식 스코프에서 변수를 재귀적으로 찾는다. ( O / X )

2. `Reference Error: XYZ is not defined.`라고 적혀있는 에러는 `XYZ`가 undefined 되었다는 의미이다. ( O / X )

3. 다음 코드들을 보고 정상적으로 작동된다면 출력값을, 에러가 발생한다면 그 이유를 설명하시오.

1)
```javascript
function awesome(a) {
   var a = 10;
   b = 20;
   console.log(a);
}

awesome(5);
console.log(b);
```

2)
```javascript
function incredible(job) {
   return (who) => {
      where = 'Cluster';
      console.log(`${who} is/are doing INCREDIBLE ${job} in ${where}!`);
   }
}

incredible("coding")("Sunpark");
console.log(`Where is ${where}?`);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 만약 현재 스코프에서 변수를 찾지 못할 경우, 스코프 안 자식 스코프에서 변수를 재귀적으로 찾는다. ( O / **X** )

   > One of the key aspects of lexical scope is that any time an identifier reference cannot be found in the current scope, the next outer scope in the nesting is consulted; that process is repeated until an answer is found or there are no more scopes to consult. **p.31**

2. `Reference Error: XYZ is not defined.`라고 적혀있는 에러는 `XYZ`가 undefined 되었다는 의미이다. ( O / **X** )

   > The error message for an undeclared variable condition, in most JS environments, will look like, “Reference Error: XYZ is not defined.” The phrase “not defined” seems almost identical to the word “undefined,” as far as the English language goes. But these two are very different in JS. **p.32**

3. 다음 코드들을 보고 정상적으로 작동된다면 출력값을, 에러가 발생한다면 그 이유를 설명하시오.

   > 1번과 2번 모두 코드에 에러가 생기지 않는다. 출력값은 직접 돌려서 확인해 보길 바랍니다.

</div>
</details>
<br>