# Limiting Scope Exposure

## 요약
| Name | URL |
|:---|:---|
| holee | (Chapter 6: Limiting Scope Exposure)[https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-6:-Limiting-Scope-Exposure] |
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

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 6.4 　  Function Declarations in Blocks (FiB)

> jachoi

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>
