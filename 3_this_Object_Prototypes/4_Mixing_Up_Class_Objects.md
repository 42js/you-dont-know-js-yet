# Mixing (Up) "Class" Objects

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 4: Mixing (Up) "Class" Objects](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-4:-Mixing-(Up)-%22Class%22-Objects) |
| sunpark |  |
| dongbkim |  |
| gim | [Chapter 4: Mixing (Up) "Class" Objects](https://velog.io/@mkitigy/Chapter-4-Mixing-Up-Class-Objects) |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

[4.1　Class Theory](#41---Class-Theory)<br>
[4.2　Class Mechanics](#42---Class-Mechanics)<br>
[4.3　Class Inheritance](#43---Class-Inheritance)<br>
[4.4　Mixins](#44---Mixins)<br>

### 4.1 　  Class Theory

> nkang
1. 캡슐화(encapsulation)과 정보 은닉(information hiding)의 차이를 설명하세요.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

캡슐화는 C의 구조체(struct)나 공용체(union), 함수처럼 여러 대상을 하나의 단위로 묶을 수 있는 기능이고 정보 은닉은 C의 파일 범위 변수(static), C++의 private, protected와 같이 구현의 세부 사항을 숨기고 인터페이스만 제공하는 기능이다. 흔히 두 개념은 같은 의미로 사용되기도 하지만 캡슐화는 여러 요소를 하나로 묶는 기능인데 비해 정보 은닉은 외부에 공개하지 않는 원칙을 의미하므로 엄밀하게는 차이가 있다.

</div>
</details>

2. 추상 자료형의 장점이 아닌 것은?

  a. 수정용이성
  b. 재사용성
  c. 보안성
  d. 수행효율성

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

추상 자료형(ADT)는 자료 집합과 적용 가능한 연산을 함께 선언한 자료형이다. 자료의 구성과 연산의 구현에 관한 세부 사항은 숨기고 연산을 수행하기 위한 사용법(interface)만 기술한다. 추상 자료형은 수정용이성(자료형 사용 부분을 바꾸지 않고 구현 코드를 변경 가능), 재사용성(여러 다른 상황에서 같은 코드를 재사용), 보안성(구현 세부사항을 프로그램의 다른 곳에서 변경하지 못하도록 보호)이라는 장점을 가진다.
</div>
</details>

3. 여러 타입의 데이터를 같은 이름으로 처리할 수 있는 특성으로 함수수준이나 자료형 수준에서 활용가능한 것은?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

다형성(polymorphism), 여러 타입을 다룰 수 있는 서브프로그램을 다형 서브프로그램이라고 하고 타입을 인수로 받는 타입을 다형 타입이라고 한다.

</div>
</details>

<br>

### 4.2 　  Class Mechanics

> yujo

다음 코드의 출력결과를 맞춰보세요!

1.
```js
class Person {
  name = 'yujo';
  constructor(props) {
    name = props;
  }

  showMyName() {
    console.log(`My name is ${name}`);
  }
}

yunho = new Person();
yunho.showMyName();
```

2.
```js
class Person {
  name = 'yujo';
  constructor(props) {
    name = props;
  }

  showMyName() {
    console.log(`My name is ${name}`);
  }
}

 yujo = new Person('yunho');
 yujo.showMyName();
```

3.
```js
class Person {
  Person(props) {
    name = props;
  }

  showMyName() {
    console.log(`My name is ${name}`);
  }
}

 yujo = new Person('yunho');
 yujo.showMyName();
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. My name is undefined
1. My name is yunho
1. My name is yunho

</div>
</details>
<br>

### 4.3 　  Class Inheritance

> holee

1. Javascript는 "다중 상속"을 위한 기본 메커니즘을 제공하지 않는다. (O, X)

2. Javascript에서 상속이라 불리는 동작이 발생할 때 값 복사가 일어난다. (O, X)

3. ES6의 class와 ES5의 Function Constructor의 차이점은?

```js
// ES5 Function Constructor
function Person(name) {
  this.name = name;
}

// ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

4. 자바스크립트에서 static class member 변수를 선언하는 이유는?

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. Javascript는 "다중 상속"을 위한 기본 메커니즘을 제공하지 않는다. (__O__, X)

2. Javascript에서 상속이라 불리는 동작이 발생할 때 값 복사가 일어난다. (O, __X__)

> 전통적인 클라스는 복사가 일어나지만 자바스크립트는 참조가 일어난다.  

3. 주요 차이점은 상속을 할 때 발생한다. ES6가 조금 더 사용하고 기억하기 쉽다.  

```js
// ES5 Function Constructor
function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 Class
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
```

4. 자바스크립트에서 static class member 변수를 선언하는 이유는?

> 인스턴스에 연결되지 않으며 인스턴스가 무엇을 참조하는지와 관계없이 동일한 값을 갖는다.  

</div>
</details>
<br>

### 4.4 　  Mixins

> sunpark

1. sunpark는 `Vehicle`을 상속받는 `Car` 오브젝트를 만들려고 했지만, 의도한 결과와는 다른 결과가 나왔습니다. 왜 그렇게 되었으며, 이를 어떻게 수정해야 하는지 설명하세요.
```javascript
function mixin( sourceObj, targetObj ) {
  for (var key in sourceObj) {
    targetObj[key] = sourceObj[key];
  }
  return targetObj;
}

var Vehicle = {
  engines: 1,

  ignition: function() {
    console.log( "Turning on my engine." );
  },

  drive: function() {
      this.ignition();
      console.log( "Steering and moving forward!" );
  }
};

var Car = mixin({
  wheels: 4,

  drive: function() {
      Vehicle.drive.call( this );
      console.log(
          "Rolling on all " + this.wheels + " wheels!"
      );
  }
}, Vehicle);

Vehicle.drive(); // 의도 : Steering and moving forward!
Car.drive(); // 의도 : Rolling on all 4 wheels!

// 실행결과 : RangeError: Maximum call stack size exceeded
```

2. 다음 코드의 실행결과는 무엇이며 이를 설명하시오.
```javascript
var foo = {
  check: function() {
    this.greeting = "Hello World";
    this.count = this.count ? this.count + 1 : 1;
  },
  greet: function() {
    console.log(`${this.greeting} ${this.count} times!`);
  }
};

var bar = {
  check: function() {
    foo.check.call(bar);
    this.greeting = "Bye World";
  },
  greet: function() {
    foo.greet.call(this);
  }
};

foo.check();
bar.check();
foo.greet(); // (1)
bar.greet(); // (2)

foo.check.call(bar);
bar.check.call(foo);
foo.greet(); // (3)
bar.greet(); // (4)

```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. sunpark는 `Vehicle`을 상속받는 `Car` 오브젝트를 만들려고 했지만, 의도한 결과와는 다른 결과가 나왔습니다. 왜 그렇게 되었으며, 이를 어떻게 수정해야 하는지 설명하세요.
> 1) Car를 정의할 때 mixin 순서가 반대가 되어 값들을 반대로 Vehicle에 들어가게 됩니다. 2) mixin 함수 내부에서 요소값을 가져올때 수정된 내용을 조사하는 if문이 없어 (`if (!(key in targetObj))`) `drive`를 가져올 때 이미 구현된 내용을 유지해야 하지만 무조건 붙어넣어 문제가 생긴다.

2. 다음 코드의 실행결과는 무엇이며 이를 설명하시오.
```console
Hello World 1 times!
Bye World 1 times!
Bye World 1 times!
Hello World 3 times!
```
> 3, 4번에 대해서는 bar 내부에서의 call은 this가 bar로 지정되었기때문에 밖에서 호출했을 때 call 문(`bar.check.call(foo);`)은 무시된다.

</div>
</details>
<br>
