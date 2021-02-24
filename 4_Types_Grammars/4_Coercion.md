# Coercion

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

[4.1　Converting Values](#41---Converting-Values)<br>
[4.2　Abstract Value Operations](#42---Abstract-Value-Operations)<br>
[4.3　Explicit Coercion](#43---Explicit-Coercion)<br>

### 4.1 　  Converting Values

> sohpark

1. 형변환은 정적 타이핑 언어에서는 _____ 시점에, 동적 타이핑 언어에서는 _____ 시점에 이루어진다.
2. 각각의 예시가 implicit, explicit coercion 중 무엇인지 설명하시오.
```javascript
let a = 42;
let b = String(a);  // 1
let c = "We are from" + a + "Seoul";  // 2
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 컴파일, 런타임
2. 1 - explicit | 2 - implicit

</div>
</details>
<br>

### 4.2 　  Abstract Value Operations

> [ToString] sohpark

1. toString 함수가 자동으로 적용되는 경우는 어떨 때인지 설명하시오.
2. 다음 출력 결과는?
```javascript
let obj = {
  a: "hi",
  b: (a, b) => a + b,
  c: undefined,
  d: null,
};

console.log(JSON.stringify(obj));  // 1
console.log(JSON.stringify("42"))  // 2
```
3. 다음 출력 결과는?
```javascript
var a = {
  val: [1, 2, 3, 4, 5],

  toJSON: function () {
    return this.val.slice(1);
  },
};

console.log(a.toJSON() === "[2, 3]");  // 1
console.log(JSON.stringify(a));  // 2
```
4. 다음의 출력 결과는?
```javascript
let obj = {
  a: "hi",
  b: 42,
  c: null,
};

console.log(JSON.stringify(obj, ["b", "c"], "--"));
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 객체가 내장된 toString함수를 가지고 있고, 문자열처럼 사용하려고 할 때 (예를 들어 implicit coercion같은), 자동으로 toString함수가 호출되고, 그 반환값이 대신 사용된다. 
> if an object has its own `toString()` method on it, and you use that object in a `string`-like way, its `toString()` will automatically be called, and the `string` result of that call will be used instead.
2. 1 - ```{"a":"hi","d":null}``` | 2 - ```"42"```
3. 1 - false | 2 - ```[2,3,4,5]```
4.
```JSON
{
--"b": 42,
--"c": null
}
```

</div>
</details>
<br>

> [ToNumber ~ ToBoolean] nkang

1. 다음 코드들의 결과를 각각 쓰시오

```jsx
var a = {
	toString: function(){
		return 010;
	}
};
var b = {
	toString: function(){
		return "010";
	}
};
Number(a); //__________________________________
Number(b); //__________________________________
```
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


답: 8 , 10

0-prefixed octal numbers are not handled as octals (just as normal base-10 decimals) in this operation, though such octals are valid as number literals (see Chapter 2).

</div>
</details>
<br>


```jsx
var a = new Boolean( false );
var b = new Number( 0 );
var c = new String( "" );
var d = a && b && c;
console.log(d); //__________________________________
```
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

답: String {""}, falsy value가 아닌 것은 모두 true로 coercion

</div>
</details>
<br>


```jsx
var a = document.all;
var b = "0";
var c = a && b;
console.log(c); //____________________________
Boolean(c); //_______________________________
```
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


답: HTMLAllCollection(3) [html, head, body], false document.all은 내용이 존재하는 object이지만 브라우저에서는 false로 취급

</div>
</details>
<br>

### 4.3 　  Explicit Coercion

> [Explicitly: String <--> Numbers] yujo

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

> [Explicitly: Parsing Numeric String ~ Explicitly: * --> Boolean] holee

1. Number() 와 parseInt()의 차이점은?  

2. parseInt("42.42”)의 값으로 알맞은 것은?  

- (1) 42  
- (2) 42.42  
- (3) NaN 
- (4) 42.  

3. parseInt("42", 16)의 값으로 알맞은 것은?  

- (1) 앞공백 16칸 삽입, “                42”   
- (2) 뒤공백 16칸 삽입, “42                “  
- (3) 16진수로 변환, “66”  
- (4) mod값 출력, 3  
- (5) 16자리까지 출력, “42”  

4. 다음은 parseInt의 인수로 String 타입을 보장하기 위한 코드다. 다음 출력을 위해 빈칸에 들어갈 알맞은 단어는?
 
```js
var a = {
	num: 21,
	[ << 빈칸 >> ]: function() { return String( this.num * 2 ); }
};

parseInt( a ); // 42
```

5. ```parseInt (  false,  16  ) ;```에서 출력값은 250이며, 이유는 false에서 fa를 16진수로 해석하여 변환됐기 때문이다. ( O / X )  

6. 아래 코드는 명시적 Boolean 변환에 대한 코드이다. ( O / X )  

```js
var  d  =  "";

!!d;
```

7. 다음 Boolean()의 반환값으로 true인것을 고르시오.  

```js
var a = [];
var b = {};
var c = "";
var d = "0";
var e = 0;
var f = null;
var g;

Boolean( a ); 
Boolean( b ); 
Boolean( c ); 
Boolean( d ); 
Boolean( e ); 
Boolean( f ); 
Boolean( g ); 
```


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. Number() 와 parseInt()의 차이점은?  

Number는  하나라도 숫자가 아니면 NaN을 반환하지만 parseInt는 숫자가 아닐때까지 인식해서 숫자로 반환한다.  

2. parseInt("42.42”)의 값으로 알맞은 것은?  
- (1) 42  
- (2) 42.42  
- (3) NaN 
- (4) 42.  

답: 1

3. parseInt("42", 16)의 값으로 알맞은 것은?  
- (1) 앞공백 16칸 삽입, “                42”   
- (2) 뒤공백 16칸 삽입, “42                “  
- (3) 16진수로 변환, “66”  
- (4) mod값 출력, 3  
- (5) 16자리까지 출력, “42”  

답: 3

4. 다음 출력을 위해 빈칸에 들어갈 알맞은 단어는?
 
```js
var a = {
	num: 21,
	toString: function() { return String( this.num * 2 ); }
};

parseInt( a ); // 42
```

5. ```parseInt (  false,  16  ) ;```에서 출력값은 250이며, 이유는 false에서 fa를 16진수로 해석하여 변환됐기 때문이다. ( **O** / X ) 

6. 아래 코드는 명시적 Boolean 변환에 대한 코드이다. ( **O** / X )  

```js
var  d  =  "";

!!d;
```

7. 다음 Boolean()의 반환값으로 true인것을 고르시오.  

```js
var a = [];
var b = {};
var c = "";
var d = "0";
var e = 0;
var f = null;
var g;

Boolean( a ); // true
Boolean( b ); // true
Boolean( c ); // false
Boolean( d ); // true
Boolean( e ); // false
Boolean( f ); // false
Boolean( g ); // false
```

답: a, b, d

</div>
</details>
<br>

> 뒷파트는 다음주(3/3)에! 
