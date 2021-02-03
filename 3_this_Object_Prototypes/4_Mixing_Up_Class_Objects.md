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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 4.4 　  Mixins

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
