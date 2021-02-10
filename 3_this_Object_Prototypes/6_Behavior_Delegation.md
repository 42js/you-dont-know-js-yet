# Behavior Delegation

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 6: Behavior Delegation](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-6:-Behavior-Delegation) |
| sunpark |  |
| dongbkim |  |
| gim |  |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

[6.1　Toward Delegation-Oriented Design](#61---Toward-Delegation-Oriented-Design)<br>
[6.2　Class Versus Objects](#62---Class-Versus-Objects)<br>
[6.3　Simpler Design](#63---Simpler-Design)<br>
[6.4　Nicer Syntax](#64---Nicer-Syntax)<br>
[6.5　Introspection](#65---Introspection)<br>

### 6.1 Toward Delegation-Oriented Design

> yujo

1. 전통적인 객체 지향 디자인과 위임 지향 디자인의 가장 큰 차이는?
2. OLOO 스타일로 코드를 작성할 때 누가 어떤 객체를 생성했는지 알고 있는 것은 중요하지 않다. (O / X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 부모, 자식 개념이 없고 오브젝트를 연결하는 개념만 존재한다.
    - 프로토타입 체인에는 복사, 부모 객체로 부터 자식 객체 생성 같은 개념이 존재 하지 않는다. 그저 객체를 연결하는 일만 한다.
    - 객체 조작의 일부와 책임을 다른 객체에 위임한다.
2. OLOO 스타일로 코드를 작성할 때 누가 어떤 객체를 생성했는지 알고 있는 것은 중요하지 않다. (**O** / X)
    - OLOO 위임만을 사용할 경우 크게 고려할 대상이 아니다.

</div>
</details>
<br>


### 6.2 　  Class Versus Objects

> holee

1. OLOO 스타일에서는 OO 스타일과는 다르게 서로간의 관계에 대해서 부모와 자식 사이로 생각하지 않고 독립적인 객체(peer)로서 취급한다. ( O / X )  

2. OLOO는 생성과 초기화가 반드시 동일한 작업으로 통합되지 않는 분리 원칙을 더 잘 지원한다. ( O / X )  

3. 다음은 ( OO / OLOO ) 디자인 패턴에 관한 코드이다.

```js
class Button extends Widget {
	constructor(width,height,label) {
		super( width, height );
		this.label = label || "Default";
		this.$elem = $( "<button>" ).text( this.label );
	}
	render($where) {
		super.render( $where );
		this.$elem.click( this.onClick.bind( this ) );
	}
	onClick(evt) {
		console.log( "Button '" + this.label + "' clicked!" );
	}
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. OLOO 스타일에서는 OO 스타일과는 다르게 서로간의 관계에 대해서 부모와 자식 사이로 생각하지 않고 독립적인 객체로서 취급한다. ( **O** / X )  

2. OLOO는 생성과 초기화가 반드시 동일한 작업으로 통합되지 않는 분리 원칙을 더 잘 지원한다. ( **O** / X )  

3. 다음은 ( **OO** / OLOO ) 디자인 패턴에 관한 코드이다.

```js
class Button extends Widget {
	constructor(width,height,label) {
		super( width, height );
		this.label = label || "Default";
		this.$elem = $( "<button>" ).text( this.label );
	}
	render($where) {
		super.render( $where );
		this.$elem.click( this.onClick.bind( this ) );
	}
	onClick(evt) {
		console.log( "Button '" + this.label + "' clicked!" );
	}
}
```

> 아래는 OOLO에 관한 디자인 패턴이다.

```js
var Widget = {
	init: function(width,height){
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	},
	insert: function($where){
		if (this.$elem) {
			this.$elem.css( {
				width: this.width + "px",
				height: this.height + "px"
			} ).appendTo( $where );
		}
	}
};

var Button = Object.create( Widget );
```

</div>
</details>
<br>

### 6.3 　  Simpler Design

1. OLOO(Object Link to Other Objects)에서는 상속을 하기 위해 `new` 키워드를 사용해야 한다. ( O / X )

2. A라는 클래스를 상속한 B와 C 클래스가 있다고 할때, B 클래스에서 C 클래스 인스턴스를 사용한다고 할때 구조적으로 문제가 있는 객체지향의 특징 중 하나는?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. OLOO(Object Link to Other Objects)에서는 상속, 인스턴스화를 하기 위해 `new` 키워드를 사용해야 한다. ( O / **X** )
> OLOO는 사용하는 인스턴스 자체가 오브젝트이기 때문에 따로 새로 만들 필요가 없다. 상속이나 인스턴스화를 할 때엔 `Object.create()`를 사용한다.

2. A라는 클래스를 상속한 B와 C 클래스가 있다고 할때, B 클래스에서 C 클래스 인스턴스를 사용한다고 할때 구조적으로 문제가 있는 객체지향의 특징 중 하나는?
> 다형성(Polymorphism)의 문제로 만약 A 클래스에서 사용하는 foo() 함수를 사용한다고 할때 그때 foo가 B클래스에서 오는지 C클래스에서 오는지 확실히 하기 위해 더욱 복잡하게 구조를 짤 수 밖에 없다. 따라서 이에 대해서 책에서는 "Ugly explicit Pseudopolymorphism(추한 명시적 유사 다형성)"  이라고 명명했다.

</div>
</details>
<br>

### 6.4 　  Nicer Syntax

> dongbkim

1. 객체 내부에서 `concise method declaration`을 사용한 method는 재귀 방식을 사용할 수 없다. (O / X)     

2. `Object.create`가 `Object.setPrototypeOf`보다 처리 속도 면에서 더 느리다.(O / X)    

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 객체 내부에서 `concise method declaration`을 사용한 method는 recursion 방식을 사용할 수 없다. (O / **X**)


	사용할 수는 있지만 자신을 호출하는 형태로는 불가능하다.     



2. `Object.create`가 `Object.setPrototypeOf`보다 처리 속도 면에서 더 느리다.(O / **X**)    
X
- MDN Object.setPrototypeof()    
> Warning: Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in every browser and JavaScript engine. (...) Instead, create a new object with the desired [[Prototype]] using Object.create().


```
//벤치마크 테스트 결과
node 8.9.1 results:

Iteration(s):            100000000
==================================
Object.create:           46.56
Object.setPrototypeOf:   353.4

Chrome 59.0.3071.104 results:

Iteration(s):            100000000
==================================
Object.create:           46.36
Object.setPrototypeOf:   326.56
```
[출처](https://gist.github.com/calebmer/c74e2a7941044e5f28b8)


</div>
</details>
<br>

### 6.5 　  Introspection

> gim

1. `a instanceof b` 에서 `instanceof` 연산자는 `a` 와 `b` 가 서로 클래스 - 인스턴스 관계인지 검사한다. (O / X)

2. 다음 코드의 결과를 예측해 봅시다.

```js
var Foo = { /* ... */ };

var Bar = Object.create( Foo );
Bar...

var b1 = Object.create( Bar );

Foo.isPrototypeOf(Bar); // (1)
Bar.isPrototypeOf(Foo); // (2)
Foo.isPrototypeOf(b1); // (3)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `a instanceof b` 에서 `instanceof` 연산자는 `a` 와 `b` 가 서로 클래스 - 인스턴스 관계인지 검사한다. (O / __X__)

> instanceof 연산자는 두 객체의 관계를 검사하는 것이 아닌, 두 객체의 관련성 여부를 검사하는 것이기 때문에 직접적으로 인스턴스화 시킨 클래스가 아니더라도 프로토타입 연결이 되어 있다면 `true` 를 반환한다.

2. 다음 코드의 결과를 예측해 봅시다.

```js
// true, false, true
```

> `Bar` 가 `Foo` 의 프로토타입 객체와 연결되어 있기 때문에 (1) 번이 `true` 이고, `b1` 또한 연결된 `Foo` 의 prototype link 를 참조하기 때문에 (3) 번도 `true` 이다.

</div>
</details>
<br>
