# The Bigger Picture

## 요약
| Name | URL | 
|:---|:---|
| holee | [Chapter 4: The Bigger Picture](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-4:-The-Bigger-Picture) |
| sunpark | [YDNJSY Get Started - 4. The Bigger Picture & Appendix](https://velog.io/@cos/YDNJSY-Get-Started-4-The-Bigger-Picture) |
| jachoi |  |

## Quiz

## Chapter 4: The Bigger Picture

[4.1　Scope and Closure](#41---Scope-and-Closure)<br>
[4.2　Prototypes](#42---Prototypes)<br>
[4.3　Values vs References](#43---Values-vs-References)<br>
[4.4　Coercive Conditional Comparison](#44---Coercive-Conditional-Comparison)<br>

### 4.1 　  Scope and Closure

1. 다음 중 아래와 같이 선언 했을 때 ```ReferenceError``` 가 발생하는 문법은? (About Temporal Dead Zone(TDZ))

- 1
```js
new Car('red'); // Does it work?

class Car {
  constructor(color) {
    this.color = color;
  }
}
```

- 2
```js
greet('World'); // Does it work?

function greet(who) {
  return `Hello, ${who}!`;
}
```

- 3
```js
const a = 2;
function square(a = a) {
  return a * a;
}

square(); // Does it work?
```

2. import, var, function 선언은 TDZ에 영향을 받지 않는다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 중 아래와 같이 선언 했을 때 ```ReferenceError``` 가 발생하는 문법은? (About Temporal Dead Zone(TDZ))

    > TDZ는 const, let, class 구문의 유효성에 영향을 미치는 중요한 개념이다. TDZ는 선언 전에 변수를 사용하는 것을 허용하지 않는다.

- 1
```js
new Car('red'); // throws `ReferenceError`

class Car {
  constructor(color) {
    this.color = color;
  }
}
```

- 2
```js
greet('World'); // work!

function greet(who) {
  return `Hello, ${who}!`;
}
```

- 3
```js
const a = 2;
function square(a = a) { // throws `ReferenceError`
  return a * a;
}

square(); 
```

    > 본 매개변수 a는 선언 전에 a = a 표현식의 오른쪽에서 사용되었다. a에서 참조 에러가 발생한다.

2. import, var, function 선언은 TDZ에 영향을 받지 않는다. ( **O** / X )

``` js 
value; // => undefined
var value;
```

```js
// Works!
greet('World'); // => 'Hello, World!'
function greet(who) {
  return `Hello, ${who}!`;
}

// Works!
greet('Earth'); // => 'Hello, Earth!'
```

    > 호이스팅이 일어나서 함수 선언 전에 호출해도 에러가 발생하지 않는다.

```js
// Works!
myFunction();
import { myFunction } from './myModule';
```

</div>
</details>
<br>

### 4.2 　  Prototypes

1. JavaScript의 Prototype 메커니즘은 다른 객체 Prototype를 하나의 객체에 복사하는 것이다. ( O / X )

2. 다음 코드에서 출력은?

```js
function Dog(){
    this.pupper = 'Pupper';
};

Dog.prototype.pupperino = 'Pups.';
var maddie = new Dog();
var buddy = Object.create(Dog.prototype);

//Using Object.create()
console.log(buddy.pupper); 
console.log(buddy.pupperino); 

//Using New Keyword
console.log(maddie.pupper); 
console.log(maddie.pupperino); 
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. JavaScript의 Prototype 메커니즘은 다른 객체 Prototype를 하나의 객체에 복사하는 것이다. ( **O** / X )

    > JavaScript의 Prototype 메커니즘은 다른 객체 Prototype에 하나의 객체에 존재하는 내부 링크를 참조하는 것이다.

2. 다음 코드에서 출력은?

```js
function Dog(){
    this.pupper = 'Pupper';
};

Dog.prototype.pupperino = 'Pups.';
var maddie = new Dog();
var buddy = Object.create(Dog.prototype);

//Using Object.create()
console.log(buddy.pupper); //Output is undefined
console.log(buddy.pupperino); //Output is Pups.

//Using New Keyword
console.log(maddie.pupper); //Output is Pupper
console.log(maddie.pupperino); //Output is Pups.
```

#### Object.create 내부 구조

```js
Object.create = function (o) { 
    function F() {};
    F.prototype = o; 
    return new F(); 
}
```    

</div>
</details>
<br>

### 4.3 　  Values vs References

1. 다음 코드에서 출력은?
```js
var myName = "Kyle";
var yourName = myName;
myName = "Frank";

console.log(myName);
console.log(yourName);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 코드에서 출력은?
```js
var myName = "Kyle";
var yourName = myName;
myName = "Frank";

console.log(myName);
// Frank
console.log(yourName);
// Kyle
```

    > primitive value이고 할당/전달 시에 항상 복사본으로 전달하고 객체 값 (배열, 객체, 함수 등)은 항상 참조로 처리 된다.

</div>
</details>
<br>

### 4.4 　  Coercive Conditional Comparison

1. 다음 코드에서 동작하는 scope는?
```js
var x = "hello";

if (Boolean(x) == true) { 
  // (1)
}

if (Boolean(x) === true) { 
  // (2)
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 코드에서 동작하는 scope는?
```js
var x = "hello";

if (Boolean(x) == true) { 
  // will run
}

if (Boolean(x) === true) { 
  // will run
}
```

</div>
</details>
<br>