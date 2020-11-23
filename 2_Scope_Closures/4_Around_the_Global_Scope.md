# Around the Global Scope

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 4: Aroundthe Global Scope](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-4:-Aroundthe-Global-Scope) |
| sunpark |  |
| jachoi |  |
| dongbkim |  |

## Quiz
[4.1　Why Global Scope?](#41---Why-Global-Scope)<br>
[4.2　Where Exactly is this Global Scope?](#42---Where-Exactly-is-this-Global-Scope)<br>
[4.3　Global This](#43---Global-This)<br>

### 4.1 　  Why Global Scope?

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 4.2 　  Where Exactly is this Global Scope?

> jachoi

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 4.3 　  Global This

> dongbkim
1. 
```js
const theGlobalSO = //여기에 추가;
``` 
위 Function을 이용하여 글로벌 스코프를 this로 가리키게끔 코드를 작성하시오.
<br/>
2.
```js
const theGlobalScopeObject =
    (typeof globalThis != "undefined") ? globalThis :
    (typeof global != "undefined") ? global :
    (typeof window != "undefined") ? window :
    (typeof self != "undefined") ? self :
    (new Function("return this"))();
```
위와 같은 코드를 추가하는 이유가 무엇인지 서술하시오.
<br/>
<details>
  <summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
    
 1.  **(new Function("return this"))()**

>  A function can be dynamically constructed from code stored in a string value with the Function() constructor, (중략) Such a function will automatically be run in non-strict-mode (for legacy reasons) when invoked with the normal () function invocation as shown;its this will point at **the global object**.(Global This 중 note box)

 2.  더 안전한 교차 환경을 만들기 위해 혹은 믿을 수 있는 전역 스코프 참조를 위해
 > if you find yourself needing a **reliable global scope reference**.(Global This 중 8번째 문단)


</div>
</details>
<br>
