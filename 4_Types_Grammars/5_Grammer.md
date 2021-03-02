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

1. 다음 중 진실을 말한 사람은?


- gim: ```?:``` 삼항 연산자는 __right-associative__야.
- yujo: ```&&``` 연산자는 __left-associative__야.
- holee: Yujo는 거짓말을 하고 있어 ```&&``` 연산자는 __right-associative__야.
- nkang: ```a ? b : c ? d : e;```을 ```()```로 계산 순서를 명확히 하면 ```(a ? b : c) ? d : e```야.


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 중 진실을 말한 사람은?


- gim: ```?:``` 삼항 연산자는 __right-associative__야.
- yujo: ```&&``` 연산자는 __left-associative__야.
- holee: Yujo는 거짓말을 하고 있어 ```&&``` 연산자는 __right-associative__야.
- nkang: ```a ? b : c ? d : e;```을 ```()```로 계산 순서를 명확히 하면 ```(a ? b : c) ? d : e```야.


답: Gim, Yujo

- ```a ? b : c ? d : e;```을 ```()```로 계산 순서를 명확히 하면 ```a ? b : (c ? d : e)```야.

</div>
</details>
<br>

### 5.3 　  Automatic Semicolons

> holee

1. 다음 중 진실을 말하는 사람은?

- sunpark: ASI는 (Automatic Semicolon Insertion)의 약자야.
- dongbkim: 자바스크립트는 ```;```를 한번도 쓰지 않고 프로그래밍을 할 수 있어. 
- sohpark: ```break```, ```continue```, ```return```이나 ```yield```뒤에는 항상 ASI가 발생해.
- holee: ```a * 2  +  3 / 12 ``` 일반적인 연산 뒤에도 개행이 일어나면 항상 ASI가 발생해.

2. 진실의 문앞에 수호자들이 나타났다. 다음 중 거짓을 말하는 사람을 가려내자.

- holee: JS사양을 읽어봤더니 ASI는 오류 수정 부분에 해당한다고 볼 수 있어.
- gim: ASI는 세부적으로 파서 오류에 해당해.
- yujo: holee와 gim은 거짓말을 하고 있어. 자바스크립트 엔진에서 파싱할때 자동으로 넣어줄 뿐이야.


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 중 진실을 말하는 사람은?

- sunpark: ASI는 (Automatic Semicolon Insertion)의 약자야.
- dongbkim: 자바스크립트는 ```;```를 한번도 쓰지 않고 프로그래밍을 할 수 있어. 
- sohpark: ```break```, ```continue```, ```return```이나 ```yield```뒤에는 항상 ASI가 발생해.
- holee: ```a * 2  +  3 / 12 ``` 일반적인 연산 뒤에도 개행이 일어나면 항상 ASI가 발생해.


답: sunpark, dongbkim, sohpark

- ```a * 2  +  3 / 12 ``` 일반적인 연산 뒤에도 개행이 일어나면 항상 ASI가 발생하지 않기때문에 아래와 같이 개행을 할 수 있다.  

```js
function  foo ( a )  { 
	return  ( 
		a * 2  +  3 / 12 
	) ; 
}
```

2. 진실의 문앞에 수호자들이 나타났다. 다음 중 거짓을 말하는 사람을 가려내자.

- holee: JS사양을 읽어봤더니 ASI는 오류 수정 부분에 해당한다고 볼 수 있어.
- gim: ASI는 세부적으로 파서 오류에 해당해.
- yujo: holee와 gim은 거짓말을 하고 있어. 자바스크립트 엔진에서 파싱할때 자동으로 넣어줄 뿐이야.

답: holee, gim

</div>
</details>
<br>

### 5.4 　  Errors

> holee

1. 진실을 말하고 있는 사람은?

- dongbkim: ```function  bar ( a , b , a )  {  "use strict" ;  }```는 오류가 발생해.
- nkang: dongbkim님 코드에서 오류가 발생하는 이유는 매개변수 a가 중복 됐기 때문이야.
- sunpark: 아래 코드는 ReferenceError가 발생하고 TDZ의 한 종류라고 할 수 있어.
```js
{
	a = 2;
	let a;
}
```
- sohpark: ```typeof```는 선언되지 않은 예외 처리를 해주기 때문에 ```type a```는 ```undefined```가 출력될꺼야.
```js
{ 
	typeof  a ; 	
	typeof  b ; 
	let  b ; 
}
```
- holee: sohpark님과 같은 이유로 ```typeof b```도 ```undefined``` 가 출력될꺼야.


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 진실을 말하고 있는 사람은?

- dongbkim: ```function  bar ( a , b , a )  {  "use strict" ;  }```는 오류가 발생해.
- nkang: dongbkim님 코드에서 오류가 발생하는 이유는 매개변수 a가 중복 됐기 때문이야.
- sunpark: 아래 코드는 ReferenceError가 발생하고 TDZ의 한 종류라고 할 수 있어.
```js
{
	a = 2;
	let a;
}
```
- sohpark: ```typeof```는 안전 예외 처리를 해주기 때문에 ```type a```는 ```undefined```가 출력될꺼야.
```js
{ 
	typeof  a ; 	
	typeof  b ; 
	let  b ; 
}
```
- holee: sohpark님과 같은 이유로 ```typeof b```도 ```undefined``` 가 출력될꺼야.

정답: dongbkim, nkang, sunpark, sohpark

> typeof는 TDZ에 대해서는 안전 예외가 적용되지 않는다.

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
