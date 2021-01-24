# Using Closures

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 7: Using Closures](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-7:-Using-Closures) |
| sunpark |  |
| dongbkim |  |
| gim | [Chapter 7: Using Closures](https://velog.io/@mkitigy/Chapter-7-Using-Closures) |

## Quiz
[7.1　See the Closure](#71---See-the-Closure)<br>
[7.2　The Closure Lifecycle and Garbage Collection (GC)](#72---The-Closure-Lifecycle-and-Garbage-Collection-GC)<br>
[7.3　An Alternative Perspective](#73---An-Alternative-Perspective)<br>
[7.4　Why Closure?](#74---Why-Closure)<br>

### 7.1 　  See the Closure

> dongbkim

1. 다음의 코드의 예상 결과를 말하고 이유를 서술하시오.

```js
function adder(num1) {
	return function addTo (num2) {
		return num1 * num2;
	};
}

var add10To = adder(10);
add10To(15); //???? 결과는??
```
<br/>
2. 철수는 결과값으로 "1,2,3"을 나오게 하고 싶어서 코드를 작성했다. 다음 코드에서 철수가 원하는 결과값이 나왔다면 O, 아니라면 X와 함께 고쳐주자.

```js
var keeps = [];

for (var i = 1; i < 4; i++) {
    keeps[i] = function keepI(){
        return i;
    };
}

keeps[0]();
keeps[1]();
keeps[2]();
```
<br/>
3. 다음 중 클로저를 사용한 것을 고르시오. 클로저가 아닌 것은 왜 아닌지 서술하시오.


ㄱ.

```js
function lookupStudent(studentID) {
    return function nobody(){
        var msg = "Nobody's here yet.";
        console.log(msg);
    };
}

var student = lookupStudent(112);

student();
```
<br/>

ㄴ.

```js
function say(myName) {
    var greeting = "Hello";
    output();

    function output() {
        console.log(
            `${ greeting }, ${ myName }!`
        );
    }
}
say("Kyle");
```
<br/>

ㄷ.
```js
function greetStudent(studentName) {
    return function greeting(){
        console.log(
            `Hello, ${ studentName }!`
        );
    };
}

greetStudent("Kyle");
```
<br/>

ㄹ.

```js
function lookupStudentRecord(studentID) {
    ajax(
        `https://some.api/student/${ studentID }`,
        function onRecord(record) {
            console.log(
                `${ record.name } (${ studentID })`
            );
        }
    );
}
lookupStudentRecord(114);
```
<br/>


4. 클로저란 무엇인가요? (자유롭게 서술)
<br/>
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. **150**

<br/>
2.

```js
var keeps = [];

for (let i = 1; i < 4; i++) {
    keeps[i] = function keepI(){
        return i;
    };
}

keeps[0]();
keeps[1]();
keeps[2]();
```

```js
var keeps = [];

for (var i = 1; i < 4; i++) {
	int j = i;
    keeps[i] = function keepI(){
        return j;
    };
}

keeps[0]();
keeps[1]();
keeps[2]();
```
클로저는 값에 대한 것이 아니고 해당 변수에 접근하는 것이기 때문에, var의 변수 특징 상 위의 코드에서 값이 계속 유지가 된다. 때문에 각각에 다른 변수를 클로즈 오버하게 해주면 된다.

3. **ㄹ**, ajax에서 closure를 활용했다.
<br/>
ㄱ.
클로즈 오버할 수 있는 변수가 있으나 사용하지 않았다.
<br/>
ㄴ.
변수를 알맞게 넣고, close over를 시도하였으나, invoke할 때 따로 변수에 저장하지 않아 아무런 변화가 일어나지 않는다.
<br/>
ㄷ.
invocation이 myName 과 greeting이 있는 곳에서 일어났기 때문에 클로저가 아니다.
<br/>

4. 한 함수가 바깥에 있는 변수를 사용하고, 그 변수들이 닿을 수 없는 스코프 안에서 실행되는 동안 클로저를 볼 수 있다.

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

1. 첫번째 코드를 두번째로 바꿨을 때, 장점에 대해서 서술하시오.

```js
var APIendpoints = {
    studentIDs:
        "https://some.api/register-students",
    // ..
};

var data = {
    studentIDs: [ 14, 73, 112, 6 ],
    // ..
};

function makeRequest(evt) {
    var btn = evt.target;
    var recordKind = btn.dataset.kind;
    ajax(
        APIendpoints[recordKind],
        data[recordKind]
    );
}

// <button data-kind="studentIDs">
//    Register Students
// </button>
btn.addEventListener("click",makeRequest);
```
<br/>

```js
var APIendpoints = {
    studentIDs:
        "https://some.api/register-students",
    // ..
};

var data = {
    studentIDs: [ 14, 73, 112, 6 ],
    // ..
};

function setupButtonHandler(btn) {
    var recordKind = btn.dataset.kind;

    btn.addEventListener(
        "click",
        function makeRequest(evt){
            ajax(
                APIendpoints[recordKind],
                data[recordKind]
            );
        }
    );
}

// <button data-kind="studentIDs">
//    Register Students
// </button>

setupButtonHandler(btn);
```


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 첫번째 코드 같은 경우, 이벤트가 발생할 때마다 DOM 속성을 읽어야 하는데에 비해 두번째 코드는 이를 한번만 할 수 있게 해주고 적절하게 변수의 노출 범위를 제한한다.



</div>
</details>
<br>
