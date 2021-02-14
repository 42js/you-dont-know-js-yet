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

1. 함수의 `arguments`는 배열이다. ( O / X )    

2. 출력 결과를 말하시오.

```js  
console.log(Array.from('foo'));

console.log(Array.from([1, 2, 3], x => x * x));

const animals = ['ant', 'cat', 'dog', 'duck'];

console.log(animals.slice(2, 100));
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 함수의 `arguments`는 배열이다. ( O / **X** )         

(...)when functions expose the arguments (array-like) **object** (as of ES6, deprecated) to access the arguments as a list.     

```js
function a() {
    console.log(arguments);
}
a(1,2,3,4,5);
//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
```

2.
```js
// expected output: Array ["f", "o", "o"]
// expected output: Array [1, 4, 9]
// expected output: Array ["dog", "duck"]
```

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
