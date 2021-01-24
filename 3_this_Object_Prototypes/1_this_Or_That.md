# *this* Or That?

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 1: this Or That?](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-1:-this-Or-That%3F) |
| sunpark |  |
| dongbkim |  |
| gim | [Chapter 1: this Or That?](https://velog.io/@mkitigy/Chapter-1-this-Or-That) |
| sohpark | [Chapter 1: this Or That?](https://stitchcoding.tistory.com/37) |
| nkang |  |
| yujo |  |

## Quiz

[1.1　Why `this`?](#11---Why-this?)<br>
[1.2　Confusions](#12---Confusions)<br>
[1.3　What's `this`?](#13---Whats-this)<br>

### 1.1 　  Why `this`?

> holee

1. this를 활용한 함수는 활용하지 않은 함수보다 Context의 양이 적어 메모리 및 레지스터를 공간을 덜 사용한다. (O, X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. this를 활용한 함수는 활용하지 않은 함수보다 context의 양이 적어 메모리 및 레지스터를 공간을 덜 사용한다. (__O__, X)

> Javascript에서 Context는 Stack Frame이므로 매개변수의 정보만큼 Stack 공간을 덜 차지한다.  

> 매개변수(parameter)와 인수 정보(arguments)가 줄어듦으로 이는 Execution Context의 세 종류중 하나인 Function Context 부분이 가지고 있는 세 객체중 Variable Object부분이 줄어든다. 따라서 이는 메모리와 레지스터의 감소로 이어진다.  

> NOTE: 인수가 전달되지 않은 매개변수는 undefined으로 초기화된다.  

추가 정보: [activation record](https://github.com/hochan222/Everything-in-JavaScript/wiki/activation-record) 

</div>
</details>
<br>

### 1.2 　  Confusions

> sunpark

1. 다음 코드의 실행 결과를 설명하시오.

```javascript
function test(num) {
  console.log(`Counting ${num} times!`);
  this.count++;
}

test.count = 0;

for (var i = 0; i < 10; i++)
  test.call(test);

console.log(`test.count : ${test.count}`);
```

2. 이 코드의 실행결과를 함수 안 `this`가 가리키는 것을 중점으로 설명하시오.

```javascript
function foo() {
  var a = 10;
  this.bar();
}

function bar() {
  console.log(`How about ${this}?`);
}

function test() {
  console.log(`What is ${this}?`);
  bar();

  function bar() {
    console.log(`What about ${this} one?`);
  }
}

foo();
bar();
test.call(test);
foo.call(test);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 코드의 실행 결과를 설명하시오.

> for문을 통해 `test` 함수를 실행했지만 `call` 프로퍼티수가 부족해 num에 항상 `undefined` 값으로 할당되 출력된다. (이 부분에서 오류는 나지 않는다) 그리고 `call`을 통해 `this`를 바인딩했기 때문에 마지막 `test.count`값은 정상적으로 카운트 되어 10이 출력된다.

> 참고 : [Function.prototype.call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

2. 이 코드의 실행결과를 함수 안 `this`가 가리키는 것을 중점으로 설명하시오.

> `foo()`를 통해 호출하게 되면 `foo` 안 `this`는 전역변수를 가리켜 전역에 선언되어있는 `bar` 함수를 호출한다. 이때 `bar` 안 `this`도 역시 전역변수를 가리킨다. `bar()`를 통해 호출하게 되면 전과 동일하게 `bar`안 `this`는 전역변수를 가리킨다. `test.call(test)`를 통해 호출하게 되면 `test` 안 `this`는 `test`로 바인딩된다. 하지만 `test` 안 `bar()`에서 `this`는 전역변수를 가리킨다. 마지막으로 `foo.call(test)`는 `foo`안 `this`는 `test`로 바인딩되지만, `test` 객체 안에 `bar` 함수가 없기 때문에 TypeError가 나게 된다. (전역과 다르가 함수 스코프의 경우에는 object로 변수에 접근할 수 없다.)

</div>
</details>
<br>

### 1.3 　  What's `this`?

> dongbkim  


1. `this`는 함수가 호출되는 방식에 의해 결정되며 컴파일 시의 binding이다.(O / X)

2. `this`는 함수가 어디에서 선언이 되었는지와 관련이 있다.(O / X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `this`는 함수가 호출되는 방식에 의해 결정되며 컴파일 시 binding이다.(O / **X**)
We said earlier that `this` is not an author-time binding but a runtime binding.


2. `this`는 함수가 어디에서 선언이 되었는지와 관련이 있다.(O / **X**)
`this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.


</div>
</details>
<br>
