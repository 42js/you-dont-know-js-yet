# Limiting Scope Exposure

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 6: Limiting Scope Exposure](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-6:-Limiting-Scope-Exposure) |
| sunpark |  |
| jachoi |  |
| dongbkim |  |

## Quiz

[6.1　Least Exposure](#61---Least-Exposure)<br>
[6.2　Hiding in Plain (Function) Scope](#62---Hiding-in-Plain-(Function)-Scope)<br>
[6.3　Scoping with Blocks](#63---Scoping-with-Blocks)<br>
[6.4　Function Declarations in Blocks (FiB)](#64---Function-Declarations-in-Blocks-(FiB))<br>

### 6.1 　  Least Exposure

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 6.2 　  Hiding in Plain (Function) Scope

> holee

1. 다음 두 함수에서 각각 변수 cache에 대한 scope를 설명하시오.

(1)
```js
var cache = {};

function factorial(x) { 
  if (x < 2) 
    return 1; 

  if (!(x in cache)) {
    cache[x] = x * factorial(x - 1); 
  }

  return cache[x]; 
}

factorial(6);
```
(2)
```js
var factorial = (function hideTheCache() { 
  var cache = {};

  function factorial(x) { 
    if (x < 2) return 1; 
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1); 
    }
    return cache[x]; 
  }

  return factorial; 
})();

factorial(6);
```

2. 다음 함수의 명칭은?
```js
(function () {
    statements
})();
```
  - 1. IEEE
  - 2. IIFE
  - 3. INCP
  - 4. ICMP

3. 다음 프로그램의 출력은?
```js
((a, b) => a + b)(1, 2);
+function(a, b) { return console.log(a + b) }(1, 2) 
*function(a, b) { return console.log(a + b) }(1, 2)
^function(a, b) { return console.log(a + b) }(1, 2) 
void function(a, b) { return console.log(a + b) }(1, 2)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. (1)은 전역으로 설정되고 (2)는 hideTheCache함수 내부 scope를 갖는다. 

    > var는 나타나는 위치에 관계없이 가장 가까운 둘러싸는 함수 범위에 연결된다.

2. 다음 함수의 명칭은?

    > 2. IIFE

3. 다음 식의 동작은?
```js
((a, b) => a + b)(1, 2); // 3
+function(a, b) { return console.log(a + b) }(1, 2) // 3
*function(a, b) { return console.log(a + b) }(1, 2) // 3
^function(a, b) { return console.log(a + b) }(1, 2) // 3
void function(a, b) { return console.log(a + b) }(1, 2) // 3
```
</div>
</details>
<br>

### 6.3 　  Scoping with Blocks

1. 객체(Object) 에서 사용하는 중괄호 안은 새로운 스코프로 따진다. ( O / X )

2. let, const를 사용하면서 TDZ error를 피하기 위해 따로 스코프를 만들어 그 스코프 상단에 변수를 초기화 할 수 있다. ( O / X )

3. 두 코드 중 에러가 나는 코드
  1)
  ```javascript
  for (var i = 0; i < 5; i++){
    console.log(i);
  }
  console.log(i);
  ```
  2)
  ```javascript
  for (let i = 0; i < 5; i++){
    console.log(i);
  }
  console.log(i);
  ```

4. `catch` 문에서 사용하는 중괄호는 새로운 스코프로 따진다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 객체(Object) 에서 사용하는 중괄호 안은 새로운 스코프로 따진다. ( O / **X** )
  > Object literals use `{ .. }` curly-brace pairs to delimit their key-value lists, but such object values are **not** scopes. **p.112**

2. let, const를 사용하면서 TDZ error를 피하기 위해 따로 스코프를 만들어 그 스코프 상단에 변수를 초기화 할 수 있다. ( **O** / X )
  > My suggestion there was: to minimize the risk of TDZ errors with `let/const` declarations, always put those declarations at the top of their scope. **p.114**

3. 다음 코드에서 변수 `i`는 각각 몇번 선언되었나?
  > var는 hoisting에 의해 function scope를 사용해 for문 밖에서 선언되지만, let은 for scope 안에서 선언되기 때문에 for문 밖에서 변수를 사용할 수 없다. **p.121~122**

4. `catch` 문에서 사용하는 중괄호는 새로운 스코프로 따진다. ( O / **X** )
  > ES2019 (recently, at the time of writing) changed  `catch` clauses so their declaration is optional; if the declaration is omitted, the `catch` block is no longer (by default) a scope; it's still a block, though! **p.124**

</div>
</details>
<br>

### 6.4 　  Function Declarations in Blocks (FiB)

> jachoi

1. 블록 안에 포함 된 함수는 대부분의 JS엔진에서 블록스코프의 범위를 지닌다 ( O / X )

2. 다음 FiB 를 호출시 표준 JS 스펙에서 발생할 에러는?
```js
if (true) {
  function FIB() {
    console.log("Function in Blocks!");
  }
}
FIB();
```
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>
