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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 4.2 　  Abstract Value Operations

> [ToString] sohpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

> [ToNumber ~ ToBoolean] nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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
