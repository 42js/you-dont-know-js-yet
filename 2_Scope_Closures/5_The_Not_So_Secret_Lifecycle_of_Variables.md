# The (Not So) Secret Lifecycle of Variables

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 5: The (Not So) Secret Lifecycle of Variables](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-5:-The-(Not-So)-Secret-Lifecycle-of-Variables) |
| sunpark |  |
| jachoi | [ydkjsy-scope-closures Chapter 5](https://n00bh4cker.tistory.com/141)|
| dongbkim |  |

## Quiz

[5.1　When Can I Use a Variable?](#51---When-Can-I-Use-a-Variable)<br>
[5.2　Hoisting: Yet Another Metaphor](#52---Hoisting-Yet-Another-Metaphor)<br>
[5.3　Re-declaration?](#53---Re-declaration)<br>
[5.4　Uninitialized Variables (aka, TDZ)](#54---Uninitialized-Variables-aka-TDZ)<br>

### 5.1 　  When Can I Use a Variable?

> holee

1. 다음 두 프로그램의 출력은?
```js
greeting();

function greeting() { 
  console.log("Hello!");
}
```

```js
greeting();

var greeting = function greeting() { 
  console.log("Hello!");
};
```

2. 다음 출력과 JS 엔진에서 처리하는 동작을 묘사하시오.
```js
console.log(greeting); 

var greeting = "Howdy!";
```
- 1. ```________```
- 2. ```________```
- 3. ```________```
- 4. ```________```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 두 프로그램의 출력은?
```js
greeting();
// Hello!

function greeting() { 
  console.log("Hello!");
}
```

```js
greeting();
// TypeError

var greeting = function greeting() { 
  console.log("Hello!");
};
```

2. 다음 출력과 JS 엔진에서 처리하는 동작을 묘사하시오.
```js
console.log(greeting); 

var greeting = "Howdy!";
```
- 1. ```식별자가 상단에서 선언된다.```
- 2. ```undefined로 자동 초기화된다.```
- 3. ```console.log(greeting)을 실행한다.```
- 4. ```greeting을 재선언하고 "Howdy!"을 할당한다.```

</div>
</details>
<br>

### 5.2 　  Hoisting: Yet Another Metaphor

1. JS 엔진은 Hoisting을 수행하기 위해 코드를 재정렬한다. ( O / X )

2. 다음 코드를 Hoisting 했을 때 재정렬된 코드로 수정해라.

```javascript
message = "Hello";

var alertMessage = function() {
  console.log(message);
}

alertMessage();
var message;
```

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. JS 엔진은 Hoisting을 수행하기 위해 코드를 재정렬한다. ( O / **X** )

  > The JS engine doesn't actually re-arrange the code. It can't magically look ahead and find declarations; the only way to accurately find them, as well as all the scope boundaries in the program, would be to fully parse the code. **p.80**

2. 다음 코드를 Hoisting 했을 때 재정렬된 코드로 수정해라.

  > 주어진 코드는 Hoisting이 있었지만 Function Hoisting이 이뤄지진 않았다.

```javascript
var message;
var alertMessage;

message = "Hello";
alertMessage = function() {
  console.log(message);
}

alertMessage();
```

</div>
</details>
<br>

### 5.3 　  Re-declaration?

> jachoi

1. 다음과 같은 상황에서 어떤오류가 발생하는지 그리고 그 이유를 말해보세요
```js
var studentName = "Frank";
console.log(studentName);
let studentName = "Suzy";
```

2. 다음중 에러가 나는 구문은? (단, foo와 bar 에는 유효한 값이 들어가 있다고 가정한다)
  (1) for (const foo in bar)
  (2) for (const foo of bar)
  (3) for (const foo = 0 ; i < bar ; foo++)

3. 다음 ____ 에 들어갈 수 있는 모든 선언자들을 말해보세요 (var, let, const)
```js
var keepGoing = true;
while (keepGoing) {
    ____ value = Math.random();
    if (value > 0.5) {
        keepGoing = false;
    }
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. syntax Error 재선언은 var 선언된 변수에게만 허용되는 개념임
>  both cases, a SyntaxError is thrown on the second declaration.
In other words, the only way to “re-declare” a variable
is to use var for all (two or more) of its declarations.

2. 3번
> 일반적인 for loop 에선 const 선언된 foo 가 foo++ 에서 재 할당이 일어나므로 문제가 된다

3. var, let ,const 모두!!
> 반복문이 돌때마다 새로운 스코프가 만들어져서 let 과 const 를 사용할 수 있고
var 는 전역에 위치하므로 계속 재할당이 이루어져서 문제가 없다!! 

</div>
</details>
<br>

### 5.4 　  Uninitialized Variables (aka, TDZ)

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>