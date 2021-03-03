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
[4.4　Implicit Coercion](#44---Implicit-Coercion)<br>
[4.5　Loose Equals Versus Strict Equals](#45---Loose-Equals-Versus-Strict-Equals)<br>
[4.6　Abstract Relational Comparison](#46---Abstract-Relational-Comparison)<br>

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

1. 다음 코드의 출력값과 타입은?
```js
const a = "3.14"
const b = 5;

console.log(b + +a)
```

2. 다음 코드의 출력값과 타입은?
```js
const c = "3.14"
const d = "5"

console.log(d + +c)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 8.14
2. "53.14"
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

### 4.4 　  Implicit Coercion

> [Simplifying Implicitly ~ Implicitly: Booleans --> Numbers] sunpark

1. JS에서 String 타입과 Number 타입를 + 연산자를 통해 연산하게 된다면, 결과는 `___(A)___` 타입을 가지게 된다. Explicit하게 `___(B)___` 타입을 `___(A)___` 타입으로 바로 변환하는 것으로 알겠지만, 실제로는 Implicit하게 `___(B)___` 타입을 `___(C)___` 함수를 통해 나온 값으로 `___(D)___` 함수를 실행해 `___(A)___` 타입으로 변환한다. 빈칸에 들어갈 타입명 / 함수명 은?

2. sunpark는 아래와 같이 매개변수들을 받아 매개변수들 중 하나의 값만 truthy할 경우에 `true`를, 나머지 경우에는 `false`를 리턴하는 `onlyOne` 함수를 만들었다. 하지만 sunpark의 의도대로 함수는 작동하지 않았다. 의도대로 함수가 작동될려면 어떻게 함수를 수정해야 할까?

```javascript
function onlyOne(...args) {
  return args.reduce((sum, arg) => arg ? sum + arg : sum, 0) == 1;
}

onlyOne(false, true, false);  // true!
onlyOne(42, 0, 0, 0);         // why false??
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. JS에서 String 타입과 Number 타입를 + 연산자를 통해 연산하게 된다면, 결과는 **String** 타입을 가지게 된다. Explicit하게 **Number** 타입을 **String** 타입으로 바로 변환하는 것으로 알겠지만, 실제로는 Implicit하게 **Number** 타입을 **valueOf()** 함수를 통해 나온 값으로 **toString()** 함수를 실행해 **String** 타입으로 변환한다.

2. sunpark는 아래와 같이 매개변수들을 받아 매개변수들 중 하나의 값만 truthy할 경우에 `true`를, 나머지 경우에는 `false`를 리턴하는 `onlyOne` 함수를 만들었다. 하지만 sunpark의 의도대로 함수는 작동하지 않았다. 의도대로 함수가 작동될려면 어떻게 함수를 수정해야 할까?

```javascript
function onlyOne(...args) {
  return args.reduce((sum, arg) => !!arg ? sum + !!arg : sum, 0) == 1;
}

onlyOne(false, true, false);  // true!
onlyOne(42, 0, 0, 0);         // why false??
```

> 위와 같이, 값을 더할 때 Boolean으로 coercion해야 정상적으로 작동된다.

</div>
</details>
<br>

> [Implicitly: * --> Boolean ~ Symbol Coercion] dongbkim


1. 다음 결과를 예측하시오.
```js
console.log(typeof a && null && 0);
console.log(NaN || "hi");
```

2. 다음 결괄르 예측하시오.
```js
var symToStr = Symbol(1234);
Number(symToStr);
```





<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. null / "hi"     
2. Uncaught **TypeError**: Cannot convert a Symbol value to a number
> what we'll discuss in this book, explicit coercion of a symbol to a string is allowed, but implicit coercion of the same is disallowed and throws an error.


</div>
</details>
<br>

### 4.5 　  Loose Equals Versus Strict Equals

> [Equality Performance ~ Abstract Equality] gim

1. == 는 값의 동등함을, === 는 값과 타입 모두의 동등함을 비교한다. (O, X)

2. 다음 코드의 결과와 동등 비교가 되는 과정을 설명해 봅시다.

```js
let origin = {a: 1, b: 2};
let dest = origin;

origin['c'] = 3;
origin == dest // (1)
origin === dest // (2)
```
```js
let a = '42';

a == true; // (1)
a === true; // (2)
```
```js
let a = null;
let b;

a == null; // (1)
a == b; // (2)
a == false; // (3)
a == ''; // (4)
a == 0; // (5)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `==` 는 값의 동등함을, `===` 는 값과 타입 모두의 동등함을 비교한다. (O, __X__)

> 두 연산자 모두 값과 타입을 비교하지만,  `==` 는 강제변환을 허용하고 `===` 는 강제변환을 허용하지 않는다.

2. 다음 코드의 결과와 동등 비교가 되는 과정을 설명해 봅시다.

> 1. 둘 다 `true` 이다. 두 객체가 같은 레퍼런스를 공유하고 있다면, 값의 변화도 양측에서 다같이 일어나고 `==` 의 강제 변환 가능성도 존재하지 않는다.

> 2. `==` vs `===`
> - Boolean 값인 `true` 가 number 타입인 `1` 로 강제 변환 된다.
> - String 값인 `'42'` 가 number 타입인 `42` 로 강제 변환 된다.
> - 두 값의 동등 비교는 `false` 이다.
> ------------------------------
> - 두 값의 강제 변환은 일어나지 않는다. 그리고 `a` 는 truthy 한 값이지, `true` 는 아니다. (값 + 타입 비교)

> 3. `==` 에서 `null` 과 `undefined` 는 서로만 같은 값으로 인식한다.
</div>
</details>
<br>

> [Edge Cases] sohpark

1. 각각의 값은?
```javascript
[] == ![];
0 == [null];
"true" == true;
0 == "\n";
42==["42"]
```
2. 저자가 ```===```의 사용을 추천하는 경우는?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 
```javascript
[] == ![];       // true
0 == [null];     // true
"true" == true;  // false
0 == "\n";       // true
42 == ["42"]     // true
```
2. 비교 피연산자 중 하나가 boolean, [], "", 0인 경우는 ```==```의 이용을 피하라고 말한다.  
> If either side of the comparison can have `true` or `false` values, don't ever, EVER use `==`.
> If either side of the comparison can have `[]`, `""`, or `0` values, seriously consider not using `==`.


</div>
</details>
<br>

### 4.6 　  Abstract Relational Comparison

> sohpark

1. ```a < b```의 값을 구하기 위해 사용하는 Abstract Relational Comparison 알고리즘의 대략적인 흐름을 설명하시오.
2. 두 객체를 a, b를 비교할 때, ```a == b```, ```a > b```, ```a < b``` 모두 false임에도 ```a <= b``` 는 true를 반환하는지 설명하시오. 

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 두 값 모두 먼저 ToPrimitive 함수를 이용하여 값을 치환합니다. 둘 중 하나라도 'string'이 아니라면, 두 값 모두 ToNumber를 이용하여 숫자로 치환한 후 비교합니다.  
> The algorithm first calls `ToPrimitive` coercion on both values, and if the return result of either call is not a `string`, then both values are coerced to `number` values using the `ToNumber` operation rules, and compared numerically.
2. ```a <= b``` 는 두 값을 비교하는 것이 아니라 ```a > b```의 반대를 반환하는 로직이기 때문이다. 

</div>
</details>
<br>
