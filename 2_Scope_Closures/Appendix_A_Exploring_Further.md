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
[A.3  Hoisting: Functions and Variables](#A3---Hoisting-Functions-and-Variables)<br>
[A.4　The Case for var](#A4---The-Case-for-var)<br>
[A.5　What's the Deal with TDZ?](#A5---Whats-the-Deal-with-TDZ)<br>
[A.6　Are Synchronous Callbacks Still Closures?](#A6---Are-Synchronous-Callbacks-Still-Closures)<br>
[A.7　Classic Module Variations](#A7---Classic-Module-Variations)<br>

### A.1 　  Implied Scopes

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### A.2 　  Anonymous vs. Named Functions

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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
