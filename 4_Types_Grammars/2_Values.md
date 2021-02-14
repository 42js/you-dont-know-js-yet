# Values

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

[2.1　Arrays](#21---Arrays)<br>
[2.2　Strings](#22---Strings)<br>
[2.3　Numbers](#23---Numbers)<br>
[2.4　Special Values](#24---Special-Values)<br>
[2.5　Value Versus Reference](#25---Values-Versus-Reference)<br>

### 2.1 　  Arrays

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 2.2 　  Strings

> gim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 2.3 　  Numbers

> [Numberic Syntax ~ Safe Integer Ranges] sohpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

> [Testing for Integers ~ 32-Bit (Signed) Integers] nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 2.4 　  Special Values

> yujo

1. 다음 코드를 브라우저 콘솔에 입력했을 때 출력값을 맞춰보세요.

```js
const a = NaN;
const b = 'NaN';

window.isNaN(a)
> (1)
window.isNaN(b)
> (2)
```

2. 다음 코드를 브라우저 콘솔에 입력했을 때 출력값을 맞춰보세요.

```js
Number.MAX_VALUE < Infinity
> (1)

Infinity + -Infinity
> (2)

42 / Infinity
> (3)

-42 / Infinity
> (4)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. (1) true (2) true
  - `isNaN`은 인자로 받은 값이 `NaN`인지 아닌지만 판별한다. 즉 `NaN`에 대해서만 `ture`를 return한다.
2. (1) false (2) NaN (3) 0 (4) -0
  - (1) Infinity는 읽기 전용 프로퍼티로 어떠한 양수값보다 크다. (`Number.MAX_VALUE`는 대략 `1.7976931348623157e+308`)
  - (2) 무한한 값 + -(무한한 값)이면 숫자가 아니게 되버린다. 두둥 탁
  - (3)(4) `-0`이 존재하는 이유는 통신시에 부호를 통해 방향을 나타내야 하는 애플리케이션이 존재하기 때문이다.
  


</div>
</details>
<br>

### 2.5 　  Value Versus Reference

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
