# Types

## 요약
| Name | URL |
|:---|:---|
| holee |  |
| sunpark |  |
| dongbkim |  |
| gim |  |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

[1.1　Built-in Types](#11---Built-in-Types)<br>
[1.2　Values as Types](#12---Values-as-Types)<br>

### 1.1 　  Built-in Types

> holee

1. ```typeof null === "null"```은 true를 반환한다. ( O / X )

2. Symbol()은 ES6에 처음으로 추가되었다. ( O / X )

3. ```(!a && typeof a === "object");``` 코드는 null 여부를 판단 할 수 있다. ( O / X )

4. typeof의 출력값이 될 수 있는 것을 모두 고르시오.

- "undefined"
- "boolean"
- "number"
- "string"
- "object"
- "symbol"
- "function"
- "array"

5. 함수에 포함된 속성 length의 의미는?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. ```typeof null === "null"```은 true를 반환한다. ( O / **X** )

> null만 예외적으로 object이다. 자바스크립트의 오래된 버그.  

2. Symbol()은 ES6에 처음으로 추가되었다. ( **O** / X )

3. ```(!a && typeof a === "object");``` 코드는 null 여부를 판단 할 수 있다. ( **O** / X )

4. typeof의 출력값이 될 수 있는 것을 모두 고르시오.

- "undefined"
- "boolean"
- "number"
- "string"
- "object"
- "symbol"
- "function"
- "array"

> array 빼고 다.

5. 함수에 포함된 속성 length의 의미는?

> 파라미터 개수이다.

</div>
</details>
<br>

### 1.2 　  Values as Types

> sunpark

1. 다음 코드의 실행 결과는 어떻게 될까?

```javascript
'use strict';
console.log(typeof b);
```

2. 다음 코드에서 오류가 나는 부분을 모두 고르시오.

```javascript
'use strict';

var a;
let b;
console.log("test a : ", a);
console.log("test b : ", b);
console.log("test c : ", c);
```

3. ES2021에는 `Promise.any()`가 스펙으로 추가되었다. 이를 이전버젼에서도 사용하기 위해 폴리필(Polyfill)을 추가하려고 아래와 같이 코드를 추가했다고 했을 때, if문 안 빈칸에 들어갈 알맞은 코드는 무엇일까?
```javascript
if (<빈칸>) {
  Promise.prototype.any = /* Polyfill of Promise.any() */
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 코드의 실행 결과는 어떻게 될까?

> 'use strict'를 써도 선언하지 않은 변수는 에러가 나지 않고 undefined가 뜬다.

2. 다음 코드에서 오류가 나는 부분을 모두 고르시오.

> let을 선언만 하고 사용해도 문제없이 에러가 나지 않고 undefined가 뜬다. 당연히 C는 에러가 난다.

3. ES2021에는 `Promise.any()`가 스펙으로 추가되었다. 이를 이전버젼에서도 사용하기 위해 폴리필(Polyfill)을 추가하려고 아래와 같이 코드를 추가했다고 했을 때, if문 안 빈칸에 들어갈 알맞은 코드는 무엇일까?
```javascript
if (typeof Promise.prototype.any !== "undefined") {
  Promise.prototype.any = /* Polyfill of Promise.any() */
}
```

</div>
</details>
<br>
