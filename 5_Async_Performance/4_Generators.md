# Generators

## 요약

| Name     | URL |
| :------- | :-- |
| holee    |     |
| sunpark  |     |
| dongbkim |     |
| gim      |     |
| sohpark  |     |
| nkang    |     |
| yujo     |     |

## Quiz

### 4.1 　 Breaking Run-to-Completion

> dongbkim


1. 다음 코드의 결과를 예측하고 버그가 있다면 고치시오.     
(1)             
```js
function *foo(){
	yield 1;
	yield 2;
	yield 3;
	return 5;
}

var it = foo();
while(it.done != true)
{
	console.log(it.next());
}
```
        
(2)                        
```js
let x = 1;
let y = 10;

function *bar(){
	x--;
	x = (yield x) + y;
	yield;
	x += 10;
	x *= (yield 2);
}

function *baz(){
	var b = (yield 1);
	y = (yield b) + x;
	y += (yield 1);
	x -= yield 20;
	console.log(x + y);
}

function step(gen){
	var it = gen();
	var last;

	return function go(){
		last = it.next(last).value;
	};
}

var s1 = step(bar);
var s2 = step(baz);

s1();
s1();
s2();
s1();
s2();
s2();
s1();
s2();
s2();

```
(3)      
```js
let x = 1;
let y = 10;

function *bar(){
	x--;
	x = (yield x) + y;
	yield;
	x += 10;
	x *= (yield 2);
	x--;
}

function *baz(){
	var b = (yield 1);
	y = (yield b) + x;
	y += (yield 1);
	x -= yield 20;
	console.log(x + y);
}

function step(gen){
	var it = gen();

	return function go(){
		var last = it.next(1).value;
	};
}

var s1 = step(bar);
var s2 = step(baz);

s1();
s1();
s2();
s1();
s2();
s2();
s1();
s2();
s2();

```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1.      
```shell
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 5, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
.
.
.
```
고친 코드
```js
function *foo(){
	yield 1;
	yield 2;
	yield 3;
	return 5;
}

var it = foo();
// var buf = it.next();
// console.log(buf);

// while(buf.done !== true)
// {
// 	buf = it.next();
// 	console.log(buf);
// }

var buf;
do {
	buf = it.next();
	console.log(buf);
} while(buf.done !== true);

```


(2) 42            
(3) 42


</div>
</details>
<br>




### 4.2 　 Generator'ing Values

> gim

1. \_\_\_ 는 producer로서 이전의 값과 연관된 값을 연속적으로 제공한다. 이는 외부에서 해당 스코프의 값을 참조하는 개념인 \_\_\_ 를 차용하기 때문에 가능한 디자인 패턴이다.
2. producer에서 제공한 값을 단계적으로 처리하기 위해 가장 적합한 인터페이스는 \_\_\_ 라고 할 수 있다.
3. `for..of` 구문의 동작 방식

- 참조하려는 객체가 \_\_\_ 인지 확인한다.
- 해당 객체의 \_\_\_ 메서드를 자동으로 호출한다.
- 위 메서드로 반환된 \_\_\_ 객체의 \_\_\_ 메서드를 반복적으로 호출하여 해당 value를 참조한다.

4. generator function 또한 `for..of` 문을 통해 연속적인 값을 참조할 수 있다. 하지만 직접 호출을 해주어야 하는데, 그 이유는 무엇일까?

```js
for (let value of generator()) { // why?
    logic...
}
```

5. generator 의 iterator 객체를 사용하는 `for..of` 구문에서 `break` 를 사용한 종료는 해당 객체에 대한 불완전한 완결성을 가진다. 그렇기에 사용자 측면에서 완결성을 제어하기 위해 \_\_\_ 구문과 iterator 객체의 \_\_\_ 메서드를 사용할 수 있다.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>

1. Generator / Closure
2. Iterator
3. iterable / `Symbol.iterator` / iterator / `next`
4. `for..of`는 iterable을 필요로 한다. generator function 에서 반환된 iterator 객체는 `Symbol.iterator`와 `next`를 모두 가지고 있기 때문에 iterable 이면서 iterator 라고 본다.
5. `try..finally` / `return`

</div>
</details>
<br>

### 4.3 　 Iterating Generators Asynchronously

> gim

1. 기존의 콜백을 사용한 비동기 처리와 비교했을 때, 다음 코드로 얻을 수 있는 이점에 대해 이야기 해봅시다.

```jsx
function foo() {
  ajax(url, (err, data) => {
    if (err) {
      it.throw(err);
    } else {
      it.next(data);
    }
  });
}

function* main() {
  try {
    var text = yield foo();
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}

var it = main();

it.next();
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>

1. async-await 의 `await` 관점으로 보면 좀 더 이해 하기 편하다.
   - `it.next()` 를 호출 하면 맨 처음 `yield` 지점의 `foo()`를 호출.
   - `foo()` 의 비동기 처리가 끝날 때까지 `*main`의 후순위 로직은 기다린다.
   - `ajax()` 에서 받아온 데이터를 판단하여 `it` 객체의 메서드를 호출하고 그에 대한 처리는 `*main` 에서 수행한다.

이와 같은 흐름으로 'ajax 요청 -> 데이터 처리' 의 동기(처럼 보이는) 처리가 가능하다.

</div>
</details>
<br>

### 4.4 　 Generators + Promises

> sohpark

1. 다음과 같은 프라미스를 반환하는 함수와 제네레이터가 정의되어 있을 때, `Hello World`를 출력하게 하려면 어떻게 해야할지 then을 이용하여 코드를 작성해주세요.

```javascript
function apiCall(x) {
  return Promise.resolve(x); // 비동기 함수. Promise 반환
}

function* main() {
  try {
    let result = yield apiCall('Hello World');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
```

2. 다음 코드를 보고 나올 수 있는 이야기 중 옳지 않은 것은?

```javascript
function apiCall(x) {
  return Promise.resolve(x); // 비동기 함수. Promise 반환
}

function* gen() {
  let val1 = yield apicall('someurl01');
  let val2 = yield apicall('someurl02');

  let val3 = yield apicall('someurl' + val1 + val2);

  console.log(val3);
}

run(gen);
```

- run 함수는 인자로 받은 제네리이터 안에서 promise를 yield 하면 resolve된 값을 반환하게끔 도와주는 함수이다.
- gen함수가 제네레이터가 아니라면 yield대신 await를 사용하는 방법이 있다.
- 제네리이터 특성상 val1, val2는 병렬 작업이 불가능하다.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1.

```javascript
let it = main();
let p = it.next().value;
p.then(
  res => {
    it.next(res);
  },
  err => {
    it.throw(err);
  }
);
```

2. `제네리이터 함수의 특성상 val1, val2는 병렬 작업이 불가능하다.`는 잘못된 말로, val1과 val2를 얻어오는 Promise는 병렬적으로 작업이 가능하다. yield와 Promise.all을 이용하는 방법이 있는데, 책에서 소개된 방법들은 아래와 같다.

```javascript
function* gen() {
  let p1 = apicall('someurl01');
  let p2 = apicall('someurl02');

  let val1 = yield p1;
  let val2 = yield p2;

  let val3 = yield apicall('someurl' + val1 + val2);

  console.log(val3);
}
```

```javascript
function* gen() {
  let vals = yield Promise.all([apicall('someurl01'), apicall('someurl02')]);

  let [val1, val2] = vals;

  let val3 = yield apicall('someurl' + val1 + val2);

  console.log(val3);
}
```

</div>
</details>
<br>

### 4.5 　 Generator Delegation

> nkang

다음 코드의 실행 결과를 쓰시오. 

```jsx
function *innerGenerator() {
  yield *['a', 'b', 'c'];
}

function *generator() {
  yield *[1, 2, 3];
  const innerGen = innerGenerator();
  console.log(innerGen);
  yield *innerGenerator();
}

[...generator()];
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

```jsx
Iterator [Generator] {}
[ 1, 2, 3, 'a', 'b', 'c' ]
```

제너레이터는 `yield *` 를 통하여 다른 제너레이터 함수를 실행할 수 있다. innerGeneration를 호출하면 이터레이터 객체가 반환되지만 실제로 innerGenerator가 실행되지는 않는다. 

(yield-delegation doesn't even have to be directed to another generator; it can just be directed to a non-generator, general iterable.)


</div>
</details>
<br>	

### 4.6 　 Generator Concurrency

> yujo

1. 제너레이터의 핵심은 `동시성` 프로그래밍이다. (O / X)
2. 제너레이터를 사용하면 `병렬` 작업을 실행할 수 있다. (O / X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
```
1.O  
2.X 
```
</div>
</details>
<br>	

### 4.7 　 Thunks

> yujo

1. 비동기 패턴에서 Thunks를 Promise 대신 사용하는 것을 권장한다. (O / X)



<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


```
1.X 

Thunk는 Prmise의 믿음성/조합성을 보장하지 못 한다.
```

</div>
</details>
<br>	

### 4.8 　 Pre-ES6 Generators

> holee

1. Generator의 ES5 polyfill을 위한 유명한 라이브러리 중 facebook이 만든 (___________)가 있다.

2. 다음은 Generator polyfill 코드의 일부이다. 빈칸에 들어갈 변수의 기능을 설명하라.

```js
function foo(url) {
	...
	return {
		next: function(v) {
			if (!__blank__) {
				__blank__ = 1;
				return {
					done: false,
					value: process()
				};
			}
			else if (__blank__ == 1) {
				__blank__ = 2;
				return {
					done: true,
					value: process( v )
				};
			}
		...
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. Generator의 ES5 polyfill을 위한 유명한 라이브러리 중 facebook이 만든 (regenerator)가 있다.

2. 다음은 Generator polyfill 코드의 일부이다. 빈칸에 들어갈 변수의 기능을 설명하라.

```js
function foo(url) {
	// manage generator state
	var state;

	// generator-wide variable declarations
	var val;

	function process(v) {
		switch (state) {
			case 1:
				console.log( "requesting:", url );
				return request( url );
			case 2:
				val = v;
				console.log( val );
				return;
			case 3:
				var err = v;
				console.log( "Oops:", err );
				return false;
		}
	}

	// make and return an iterator
	return {
		next: function(v) {
			// initial state
			if (!state) {
				state = 1;
				return {
					done: false,
					value: process()
				};
			}
			// yield resumed successfully
			else if (state == 1) {
				state = 2;
				return {
					done: true,
					value: process( v )
				};
			}
			// generator already completed
			else {
				return {
					done: true,
					value: undefined
				};
			}
		},
		"throw": function(e) {
			// the only explicit error handling is in
			// state *1*
			if (state == 1) {
				state = 3;
				return {
					done: true,
					value: process( e )
				};
			}
			// otherwise, an error won't be handled,
			// so just throw it right back out
			else {
				throw e;
			}
		}
	};
}
```
</div>
</details>
