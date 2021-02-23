# Natives

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

[3.1　Internal [[Class]]](#31---Internal-Class)<br>
[3.2　Bocing Wrappers](#32---Bocing-Wrappers)<br>
[3.3　Unboxing](#33---Unboxing)<br>
[3.4　Natives as Constructors](#34---Natives-as-Constructors)<br>

### 3.1 　  Internal [[Class]]

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 3.2 　  Bocing Wrappers

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 3.3 　  Unboxing

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 3.4 　  Natives as Constructors

> [Array(..) ~ Object(..), Function(..), and RegExp(..)] dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

> [Date(..) and Error(..) ~ Native Prototypes] gim

1. `Date()` / `Error()` 는 리터럴 형식으로 선언할 수 있다. (O / X)

2. `Error()` 는 주로 ____ 연산자와 같이 쓰인다.

3. 다음 코드에서 예상되는 결과는?

4. 흔히 접할 수 있는 `Uncaught *Error: description` 은 어떤 식으로 발생할까요?

```js
function handleException() {
	try {
		throw new Error('Something returns error!');
	} catch (error) {
		alert(`Error: ${error.message}`);
	}
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `Date()` / `Error()` 는 리터럴 형식으로 선언할 수 있다. (O / __X__)

> 두 네이티브는 오직 객체 형식으로만 사용할 수 있다.

2. `Error()` 는 주로 `throw` 연산자와 같이 쓰인다.

3. 다음 코드에서 예상되는 결과는?

> `try..catch` 구문 자체가 예외를 식별하고 처리해주기 위해 나온 구문이므로, `try` 블록 내에서 예외 상황이 발생했다면 `catch` 구문에서 해당 error 객체를 받아와 그 안의 값을 통해 예외 처리를 더 유연하게 할 수 있다.

4. 흔히 접할 수 있는 `Uncaught *Error: description` 은 어떤 식으로 발생할까요?

> 일반적인 Error() 네이티브 외에도 구체적인 에러 타입에 특화된 네이티브들이 있는데(e.g. RangeError(), ReferenceError() etc.), 해당 네이티브들은 코드에서 예외가 발생하면 자동으로 throw 된다.

</div>
</details>
<br>
