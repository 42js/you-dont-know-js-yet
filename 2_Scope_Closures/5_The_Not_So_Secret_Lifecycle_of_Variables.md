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

1. 다음 두 프로그램의 출력은?
```js
greeting();

function greeting() { 
  console.log("Hello!");
}
```

```js
greeting();

var greeting = function greeting() { 
  console.log("Hello!");
};
```

2. 다음 출력과 JS 엔진에서 처리하는 동작을 묘사하시오.
```js
console.log(greeting); 

var greeting = "Howdy!";
```
- 1. ```________```
- 2. ```________```
- 3. ```________```
- 4. ```________```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 두 프로그램의 출력은?
```js
greeting();
// Hello!

function greeting() { 
  console.log("Hello!");
}
```

```js
greeting();
// TypeError

var greeting = function greeting() { 
  console.log("Hello!");
};
```

2. 다음 출력과 JS 엔진에서 처리하는 동작을 묘사하시오.
```js
console.log(greeting); 

var greeting = "Howdy!";
```
- 1. ```식별자가 상단에서 선언된다.```
- 2. ```undefined로 자동 초기화된다.```
- 3. ```console.log(greeting)을 실행한다.```
- 4. ```greeting을 재선언하고 "Howdy!"을 할당한다.```

</div>
</details>
<br>

### 5.2 　  Hoisting: Yet Another Metaphor

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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