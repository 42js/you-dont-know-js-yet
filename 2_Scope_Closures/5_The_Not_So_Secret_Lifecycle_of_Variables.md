# The (Not So) Secret Lifecycle of Variables

## 요약
| Name | URL |
|:---|:---|
| holee |  |
| sunpark |  |
| jachoi |  |
| dongbkim |  |

## Quiz

[5.1　When Can I Use a Variable?](#51---When-Can-I-Use-a-Variable)<br>
[5.2　Hoisting: Yet Another Metaphor](#52---Hoisting-Yet-Another-Metaphor)<br>
[5.3　Re-declaration?](#53---Re-declaration)<br>
[5.4　Uninitialized Variables (aka, TDZ)](#54---Uninitialized-Variables-aka-TDZ)<br>

### 5.1 　  When Can I Use a Variable?

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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