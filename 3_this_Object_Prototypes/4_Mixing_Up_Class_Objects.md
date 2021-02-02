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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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
