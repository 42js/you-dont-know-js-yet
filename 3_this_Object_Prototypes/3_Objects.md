# Objects

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 3: Objects](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-3:-Objects) |
| sunpark |  |
| dongbkim |  |
| gim | [Chapter 3: Objects](https://velog.io/@mkitigy/Chapter-3-Objects) |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

[3.1　Syntax](#31---Syntax)<br>
[3.2　Type](#32---Type)<br>
[3.3　Contents](#33---Contents)<br>
[3.4　Iteration](#34---Iteration)<br>

### 3.1 　  Syntax

> sunpark

1. 다음 코드의 실행결과는 어떻게 될까?
```javascript
var test = {
  "this": "that",
  "what": "how"
}

test.when = "which"

console.log(test);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 코드의 실행결과는 어떻게 될까?
> 맨 첫줄에 프로퍼티를 2개 만들었고, `test.when`을 통해 `when`이라는 키의 프로퍼티 역시 만들었다. 결국에 나오는 출력값은 `{ this: 'that', what: 'how', when: 'which' }`가 된다.

</div>
</details>
<br>

### 3.2 　  Type

> sunpark

1. 모든 주요 타입은 객체이다. (O / X)

2. 다음 단어를 분류에 맞게 분류해보세요.
> 보기 : Array, Function, String, null, Number, RegExp, undefined, Boolean, Object, Date

- 리터럴 / 생성자 형식과 무관하게 모두 객체이다 : `_____`, `_____`, `_____`, `_____`
- 리터럴 형식과 생성자 형식이 존재하고, JS 엔진에서 상황에 맞게 변환해준다 : `_____`, `_____`, `_____`
- 리터럴 형식이 없어 생성자 형식으로 생성해야 한다 : `_____`
- 객체 래퍼 형식이 없어 그 자체로 유일값이다 : `_____`, `_____`

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 모든 주요 타입은 객체이다. (O / **X**)
> 단순 원시 타입은 객체가 아니다. "자바스크립트는 모든 것이 객체다"라는 말은 옳지 않다.

2. 다음 단어를 분류에 맞게 분류해보세요.
> 리터럴 형식과 생성자 형식이 존재하고, JS 엔진에서 상황에 맞게 변환해준다 : String, Number, Boolean / 객체 래퍼 형식이 없어 그 자체로 유일값이다 : null, undefined / 리터럴 형식이 없어 생성자 형식으로 생성해야 한다 : Date / 리터럴 / 생성자 형식과 무관하게 모두 객체이다 : Object, Function, Array, RegExp

</div>
</details>
<br>

### 3.3 　  Contents

> (Computed Property Names ~ Property Descriptors) dongbkim

1. 다음 코드에서 에러가 발생하는 부분이 있다면 어떤 에러가 뜨는지 밝히고 고치시오.    

```js
var prefix = "hi";

var obj = {
	prefix + "bar" : "hey"
};

obj["heybar"];
```

2. property 이름으로 숫자를 사용할 수 있다. (O / X)    

3. 다음 코드의 결과를 예측하시오. 에러가 발생한다면 고치시오.    
```js
var myArray = [ "foo", 42, "bar" ];

myArray["baz"] = "baz";
myArray.woody = "woody";
myArray["14"] = "buzz"

console.log(myArray.length);
```

4. 다음 코드의 결과를 예측하시오. 에러가 발생한다면 고치시오.   
```js
function anotherFunction() { /*..*/ }

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,
	c: anotherArray,
	d: anotherFunction
};

var newObj = Object.assign(myObject, anotherObject);

console.log(newObj);
```
5. 다음 코드의 결과를 예측하시오. 에러가 발생한다면 고치시오.   
```js
var myObject = {
	a: 2,
	b: 4
};

myObject.a = 8;

Object.defineProperty( myObject, "a", {
	value: 4,
	writable: true,
	configurable: false,
	enumerable: true
} );

console.log(myObject.a);		
myObject.a = 5;
console.log(myObject.a);

Object.defineProperty( myObject, "b", {
	value: 6,
	writable: false
} ); 
console.log(myObject.a);
myObject.a = 8;
console.log(myObject.a);
```  


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



1.   
```js
var prefix = "hi";

var obj = {
	prifix + "bar" : "hey"//SyntaxError, key name으로 computed expression을 넣기 위해서는 `[]`을 추가해줘야 한다.
};

obj["heybar"];//TypeError, 위 에러를 고쳐도 heybar라는 key가 없기 때문에 고쳐줘야 한다.
```

2. property 이름으로 숫자를 사용할 수 있다. (**O** / X)    
If you use any other value besides a string (primitive) as the property, it will first be converted to a string.    

3. 15   
```
0: "foo"
1: 42
2: "bar"
(empty x 11)
14: "buzz"
baz: "baz"
woody: "woody"
length: 15
```

4.  
```
a: 2
b: {c: true}
c: true
d: ƒ anotherFunction()
```

5. 4 5 5 8    

</div>
</details>
<br>



> (Immutability ~ Existence) gim

#### Immutability

1. 상수를 담는 객체를 만든다고 가정 했을 때, 아래의 코드가 유효한지 얘기해 봅시다.

```js
const CONSTANTS = {
	A: 'foo',
	B: 'bar',
	C: 2
};
```

2. 객체의 불변성을 위해 ES5에서 제공하는 Object.freeze() 는 적용된 객체 안에 있는 모든 프로퍼티의 불변성을 보장한다. (O, X)

3. 다음 코드의 결과는?

```js
var innerObj = {
	a: "immutable"
}

var obj = {
	a: "immutable",
	innerObj
}

Object.freeze(obj);

obj.a = "mutable";
obj.innerObj.a = "mutable";

console.log(obj.a); // 1)
console.log(obj.innerObj.a); // 2)

Object.freeze(obj.innerObj);

innerObj.a = "mutable, too";

console.log(innerObj.a); // 3)
```
4. 만약 object에서 deep immutability, deep freeze를 보장할 수 있다면 어떻게 될까요?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 상수를 담는 객체를 만든다고 가정 했을 때, 아래의 코드가 유효한지 얘기해 봅시다.

> 상수를 만든다는 목적으로 보았을 때, 다음과 같은 코드는 특정 값을 `const` 로 할당 받은 변수도 없을 뿐더러, 프로퍼티 접근으로 얼마든지 값을 바꿀 수 있기 때문에 유효한 코드라고 볼 수 없다.

suggested solution)

- 각각의 값을 `const` 로 선언한 특정 변수들에 할당한 뒤, 프로퍼티가 그 변수를 참조하도록 한다.
- object를 immutable하게 만드는 여러 방법들을 취해 프로퍼티 자체의 변동 가능성을 막는다.

2. 객체의 불변성을 위해 ES5에서 제공하는 Object.freeze() 는 적용된 객체 안에 있는 모든 프로퍼티의 불변성을 보장한다. (__O__, X)

> 해당 목적을 위한 여러 접근 중 하나인 Object.freeze() 는 '얕은 불변성'을 보장한다. 즉, 모든 프로퍼티 자체의 불변성은 보장하지만, 프로퍼티가 참조하는 값의 불변성까지 보장하지는 않는다. 

3. 다음 코드의 결과는?

> immutable / mutable / mutable

- 프로퍼티가 참조하고 있는 object의 불변성까지 보장할 수는 없다.
- 프로퍼티가 참조하고 있는 object는 그 프로퍼티의 객체에 속한 것이 아니기 때문에, 어느 한 곳에서 발생한 object에 대한 동작이 다른 곳에서 영향을 끼칠 수 있다.

4. 만약 object에서 deep immutability, deep freeze를 보장할 수 있다면 어떻게 될까요?

> 한 객체 내에서 참조 가능한 모든 object 의 불변성을 보장하게 되면 해당 object 를 참조하고 있는 다른 곳에서 정제하거나 값을 수정하려 해도 불가능 하게 되어 예상치 못한 동작을 수행할 수 있다.

</div>
</details>
<br>

#### Getter & Setter

1. 객체는 기존 프로퍼티 혹은 새로운 프로퍼티에 값을 할당하기 위해 ___ 을 사용하고, 기존 프로퍼티가 참조하는 값을 가져오기 위해 ___ 을 사용한다. 그리고 ES5에서는 이를 오버라이딩 할 수 있는 ___ 와 ___ 을 제공한다.

2. 다음 코드의 결과는?

```js
var obj = {
	get a() {
		return this.a;
	}

	set a(value) {
		this.a = value * 2;
	}
}

obj.a = 2;
console.log(obj.a); // ?
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 객체는 기존 프로퍼티 혹은 새로운 프로퍼티에 값을 할당하기 위해 ___ 을 사용하고, 기존 프로퍼티가 참조하는 값을 가져오기 위해 ___ 을 사용한다. 그리고 ES5에서는 이를 오버라이딩 할 수 있는 ___ 와 ___ 을 제공한다.

> \[\[Get\]\] / \[\[Put\]\] / Getter / Setter

2. 다음 코드의 결과는?

> Uncaught RangeError: Maximum call stack size exceeded - 무한 재귀 호출

</div>
</details>
<br>

#### Existence

1. 객체 안에 프로퍼티가 존재하는지 확인할 수 있는 방법 2가지와 해당 프로퍼티의 value 값을 확인하는 방법이 적절치 않은 이유를 얘기해 봅시다.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
	
1. 객체 안에 프로퍼티가 존재하는지 확인할 수 있는 방법 2가지와 해당 프로퍼티의 value 값을 확인하는 방법이 적절치 않은 이유를 얘기해 봅시다.

- `myObj.hasOwnProperty(key);`
- `key in myObj`
- 실제 존재하지 않는 프로퍼티인지, value 값이 존재하지 않는 것인지 알 수 없다.

</div>
</details>
<br>



### 3.4 　  Iteration

> sohpark

1. forEach, every, some 의 동작방식의 차이를 설명하시오.

2. 객체 리터럴 형식으로 만들어진 객체의 프로퍼티는 iteration을 수행할 때 프로퍼티의 삽입한 순서대로 순회한다. ( O, X )

3. 다음 코드가 오류 없이 동작하려면 표시한 줄에서 무엇을 고쳐야하는지, 또 왜 오류가 발생했는지 설명하시오.

```javascript
let obj = {
  hello: 1,
  abc: 2,
  yolo: 3,
  1: "hmm",
  2: "umm",
};

for (let i of obj) { // (•̀ᴗ•́)و
  console.log(i);
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1.
세 함수 모두 배열을 순회하는데 사용되며, 순회하면서 특정 콜백 함수를 실행할 수 있습니다. 큰 차이는 콜백의 반환값을 관찰하는지에 있습니다. 

- forEach: 콜백의 반환값을 무시합니다. 
- every: 콜백이 falsy value를 반환하면 더 이상 순회하지 않고 종료합니다.
- some: 콜백이 truthy value를 반환하면 더 이상 순회하지 않고 종료합니다.

2. 객체 리터럴 형식으로 만들어진 객체의 프로퍼티는 iteration을 수행할 때 프로퍼티의 삽입한 순서대로 순회한다. ( O, __X__ )

> 어떤 형태로 생성되었는지는 관련이 없습니다. for ... in 으로 순회한 객체의 프로퍼티는 순서가 늘 보장되지 않습니다. 

> 다만 ES5까지는 공식적으로 순서가 없다고 하였으나, ES6부터는 나름대로 관찰되는 순서가 있다고 합니다. 문자열의 경우 삽입한 순서대로 나오며, 숫자로 인식되는 프로퍼티명은 오름차순으로 나옵니다. 그리고 숫자가 문자열로 된 프로퍼티보다 먼저 나옵니다. 물론, 이 또한 보장된 것은 아니니 참고만 부탁드립니다. 

3. 
of 를 in 으로 교체하면 됩니다. 일반 객체는 배열과 달리 @@iterator(iterator 객체를 반환해주는 함수) 가 내장되어 있지 않아 for ... of 를 수행할 수 없습니다. 



</div>
</details>
<br>
