# Using Closures

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 7: Using Closures](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-7:-Using-Closures) |
| sunpark |  |
| dongbkim |  |

## Quiz
[7.1　See the Closure](#71---See-the-Closure)<br>
[7.2　The Closure Lifecycle and Garbage Collection (GC)](#72---The-Closure-Lifecycle-and-Garbage-Collection-GC)<br>
[7.3　An Alternative Perspective](#73---An-Alternative-Perspective)<br>
[7.4　Why Closure?](#74---Why-Closure)<br>

### 7.1 　  See the Closure

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 7.2 　  The Closure Lifecycle and Garbage Collection (GC)

> holee

1. 다음 studentRecords를 명시적으로 참조를 제거하시오.

```js
function manageStudentGrades(studentRecords) { 
  var grades = studentRecords.map(getGrade);
  
  //Here Code

  return addGrade;
  // ..
}
```

```________________```

2. 다음은 GC의 대상으로 표함 되는가?

(1)  

```js
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o는 o2를 참조한다.
  o2.a = o; // o2는 o를 참조한다.

  return "azerty";
}

f();
```

(2)  

```js
var div = document.createElement("div");
div.onclick = function(){
  doSomething();
};
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 studentRecords를 명시적으로 참조를 제거하시오.

```js
function manageStudentGrades(studentRecords) { 
  var grades = studentRecords.map(getGrade);
  
  // unset `studentRecords` to prevent unwanted 
  // memory retention in the closure 
  studentRecords = null;

  return addGrade;
  // ..
}
```

2. 다음은 GC의 대상으로 표함 되는가?

```js
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o는 o2를 참조한다.
  o2.a = o; // o2는 o를 참조한다.

  return "azerty";
}

f();
```

```js
var div = document.createElement("div");
div.onclick = function(){
  doSomething();
}; // div 오브젝트는 이벤트 핸들러를 'onclick' 속성을 통해 참조한다.
// 이벤트 핸들러의 스코프에도 div 오브젝트가 있으므로 div 오브젝트에 접근할 수 있다. 따라서 이벤트 핸들러도 div 오브젝트를 참조한다.
// 순환이 발생했고 메모리 누수가 일어난다.
```

</div>
</details>
<br>

### 7.3 　  An Alternative Perspective

1. 클로져를 통해 만든 스코프는 상위 스코프에 종속되어있다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 클로져를 통해 만든 스코프는 상위 스코프에 종속되어있다. ( O / **X** )
  > Closure instead describes the magic of keeping alive a function instance, along with its whole scope environment and chain, for as long as there’s at least one reference to that function instance floating around in any other part of the program.

</div>
</details>
<br>

### 7.4 　  Why Closure?

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
