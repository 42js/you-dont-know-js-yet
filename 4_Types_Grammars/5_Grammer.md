# Grammer

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

[5.1　Statements & Expressions](#51---Statements-Expressions)<br>
[5.2　Operator Precedence](#52---Operator-Precedence)<br>
[5.3　Automatic Semicolons](#53---Automatic-Semicolons)<br>
[5.4　Errors](#54---Errors)<br>
[5.5　Function Arguemnts](#55---Function-Arguemnts)<br>
[5.6　try..finally](#56---try-finally)<br>
[5.7　switch](#57---switch)<br>

### 5.1 　  Statements & Expressions

> [Statement Completion Values ~ Expression Side Effects] nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

> [Contextual Rules] yujo


1. 다음 코드의 출력 결과는?

```js
const obj = () =>  {
  return {
    study:  'you don`t know js yet',
    [123]: '123'
  }
}

const { study } = obj();
console.log(study)
```

2. 다음 코드의 출력 결과는?


```js
const foo = ({ a, b, c }) => {
  console.log(a, b, c);
}

foo({ a : 'you', c : 'know?'})
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. 'you don`t know js yet'
2. 'you' undefined 'know?'


</div>
</details>
<br>

### 5.2 　  Operator Precedence

> [Short Circuited ~ Tighter Binding] yujo

1. 다음 코드의 출력 결과는?

```js

const a = 10;
const b = 0;

console.log(a && b); // (1)
console.log(b && a); // (2)
console.log(a || b); // (3)
console.log(b || a); // (4)

```

2. 다음 코드의 출력 결과는?

```js
let a = 10;
let b = a++, a;

console.log(a, b) // (1)

let a = 10;
let b = (a++, a);

console.log(a, b) // (1)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. (1) 0 
   (2) 0 
   (3) 10 
   (4) 10

2. (1) Uncaught SyntaxError: Identifier 'a' has already been declared
   (2) 11, 11
</div>
</details>
<br>

> [Associativity ~ Disambiguation] holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 5.3 　  Automatic Semicolons

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 5.4 　  Errors

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 5.5 　  Function Arguemnts

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 5.6 　  try..finally

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 5.7 　  switch

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
