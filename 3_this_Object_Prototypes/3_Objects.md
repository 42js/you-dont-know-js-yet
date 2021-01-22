# Objects

## 요약
| Name | URL |
|:---|:---|
| holee |  |
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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 3.2 　  Type

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 3.3 　  Contents

> (Computed Property Names ~ Property Descriptors) dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
