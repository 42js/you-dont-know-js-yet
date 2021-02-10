# Appendix A. ES6 *class*

## 요약
| Name | URL |
|:---|:---|
| holee | [Appendix A: ES6 class](https://github.com/hochan222/Everything-in-JavaScript/wiki/Appendix-A:-ES6-class) |
| sunpark |  |
| dongbkim |  |
| gim |  |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

[A.1　class](#A1---class)<br>
[A.2　class Gotchas](#A2---class-Gotchas)<br>
[A.3　Static > Dynamic?](#A3---Static-Dynamic)<br>

### A.1 　  class

> sohpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### A.2 　  class Gotchas

> nkang
다음 코드의 실행 결과를 각각 예상하시오.

1. 
```jsx
class C {
	constructor(id) {
		this.id = id;
	}
	id() {
		console.log( "Id: " + this.id );
	}
}

var c1 = new C( "c1" );
C.prototype.id = function() {
  console.log("New Id: " + this.id );
};
c1.id();
```

2.
```jsx
class C {
	constructor(id) {
		this.newId = id;
	}
	id() {
		console.log( "Id: " + this.id );
	}
}

var c1 = new C( "c1" );
C.prototype.id = function() {
  console.log("newId: " + this.newId );
  console.log("id: " + this.id );
};
c1.id();
```

3.
```
class P {
	foo() { console.log( "P.foo" ); }
}

class C extends P {
	foo() {
		super();
	}
}

var c1 = new C();
c1.foo(); // "P.foo"

var D = {
	foo: function() { console.log( "D.foo" ); }
};

var E = {
	foo: C.prototype.foo
};

// Link E to D for delegation
Object.setPrototypeOf( E, D );

E.foo(); // "P.foo"

var D = {
	foo: function() { console.log( "D.foo" ); }
};

// Link E to D for delegation
var E = Object.create( D );

// manually bind `foo`s `[[HomeObject]]` as
// `E`, and `E.[[Prototype]]` is `D`, so thus
// `super()` is `D.foo()`
E.foo = C.prototype.foo.toMethod( E, "foo" );

E.foo(); // "D.foo"
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
1.
  ```
  Uncaught TypeError: c1.id is not a function
  ```
2.
  ```
  newId: c1
  id: function() {
    console.log("newId: " + this.newId );
    console.log("id: " + this.id );
  }
  ```
  
3.
  ```
  Uncaught SyntaxError: 'super' keyword unexpected here
  ```

</div>
</details>
<br>

### A.3 　  Static > Dynamic?

> yujo

1. 자바스크립트의 Class는 정적이다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 자바스크립트의 Class는 정적이다. ( O / **X** )

</div>
</details>
<br>
