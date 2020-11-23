# Around the Global Scope

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 4: Aroundthe Global Scope](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-4:-Aroundthe-Global-Scope) |
| sunpark | [YDNJSY Scope & Closures - 4. Around the Global Scope](https://velog.io/@cos/YDNJSY-Scope-Closures-4-Around-the-Global-Scope) |
| jachoi |  |
| dongbkim |  |

## Quiz
[4.1　Why Global Scope?](#41---Why-Global-Scope)<br>
[4.2　Where Exactly is this Global Scope?](#42---Where-Exactly-is-this-Global-Scope)<br>
[4.3　Global This](#43---Global-This)<br>

### 4.1 　  Why Global Scope?

1. 여러 JS 파일들을 하나의 스코프로 통합할 수 있는 방식 3가지는 무엇인가요?

- 1. ```_____________________```
- 2. ```_____________________```
- 3. ```_____________________```

2. 다음 코드를 보고 오류가 난다면 그 이유를, 나지 않는다면 출력 결과를 설명하세요.
```javascript
(function hello() {
  var newObject = 'hello'
  console.log(newObject);
})();

hello();
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 여러 JS 파일들을 하나의 스코프로 통합할 수 있는 방식 3가지는 무엇인가요?

- 1. ```ES Module 사용```
- 2. ```번들러를 사용해 하나의 파일로 통합```
- 3. ```글로벌 스코프 사용```

2. 다음 코드를 보고 오류가 난다면 그 이유를, 나지 않는다면 출력 결과를 설명하세요.

  > hello 함수는 IIFE(즉시실행함수)로 실행되기 때문에 스코프에 선언되지 않고 딱 한번 호출됩니다. 따라서 `hello();`와 같이 별도로 호출하는 것은 오류를 발생시킵니다. 자세한 내용은 [여기](https://velog.io/@doondoony/javascript-iife)와 [여기](https://velog.io/@cos/JS-Reboot-공리와-함수#함수선언식과-함수표현식)를 참고하세요.

</div>
</details>
<br>

### 4.2 　  Where Exactly is this Global Scope?

> jachoi

1. 웹브라우저와 웹워커 그리고 노드에서 전역스코프에 접근하기 위해서 사용하는 키워드를 각각 말해보세요!

2. 다음의 경우 섀도잉이 일어나지 않는 이유를 설명해보세요
```
window.something = 42;
let something = "Kyle";
console.log(something);
// Kyle
console.log(window.something);
// 42
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1.
- 차례대로 window, self, global

2. 
 - let 은 전역변수를 만들지만 전역객체의 프로퍼티는 만들지 않기 때문이다
> The let declaration adds a something global variable but
not a global object property (see Chapter 3). The effect then is
that the something lexical identifier shadows the something
global object property.

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
