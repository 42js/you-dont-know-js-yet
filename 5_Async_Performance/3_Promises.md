# Promises

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

### 3.1 　 What Is a Promise?

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 3.2 　 Thenable Duck Typing

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 3.3 　 Promise Trust

> gim
 
1. Promise 는 기존의 콜백 방식의 비동기 처리에서 발생하는 _____ 문제를 해결하기 위해 등장했다.

2. 콜백 방식에서 예상할 수 있는 문제점을, Promise는 어떻게 해결할까?

- 빠른 / 늦은 호출
- 결과 값이 없어 아예 호출하지 않음
- 너무 많이 호출
- 매개변수 전달 실패
- 에러 / 예외 무시

3. 다음 코드의 예상 결과는?

```jsx
const p1 = new Promise(resolve => {
	resolve(1, 2, 3);
})

p1.then((param1, param2, param3) => {
	console.log(param1, param2, param3);
});
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
	
1. Promise 는 기존의 콜백 방식의 비동기 처리에서 발생하는 제어의 역전(inversion of control) 문제를 해결하기 위해 등장했다.

2. 콜백 방식에서 예상할 수 있는 문제점을, Promise는 어떻게 해결할까?

- 빠른 / 늦은 호출
	- `then()`을 통해 처음에 비동기로 얻어온 값을 콜백을 호출함으로써 다음 비동기 단계로 넘겨주기 때문에, 해당 오류를 해결 할 수 있다.
- 결과 값이 없어 아예 호출하지 않음
	- 일단 프로미스의 상태가 이행되면 `resolve()`, `reject()` 둘 중 하나는 무조건 실행 된다. 그래서 콜백 자체의 에러 때문에 원하는 결과를 얻지 못하는 한이 있더라도, 일단 콜백이 실행되었다는 사실은 변함 없다.
- 너무 많이 호출
	- 많은 호출이 발생하더라도, 프로미스 자체에서 오직 한번만 이행되도록 설계되었기 때문에 다음 호출들은 무시한다.
- 매개변수 전달 실패
	- 프로미스는 기껏해야 하나의 결정된 값을 가지는데, 만약 프로미스에서 어떤 값을 결정하지 않더라도 value의 기본값은 `undefined`가 되며, 후순위 콜백에 대한 호출은 자연스레 발생한다.
- 에러 / 예외 무시
	- 프로미스 생성이나 결과의 관찰지점에서 JS 에러가 발생한다면 그 에러는 `reject()` 에서 잡힌다.

3. 다음 코드의 예상 결과는?

> // 1, undefined, undefined

</div>
</details>
<br>

### 3.4 　 Chain Flow

> sohpark

1. 다음 코드를 chaining을 이용하여 개선해봅시다.

```javascript
const p1 = Promise.resolve(21);

const p2 = p1.then((num) => num * 2);

p2.then((num) => console.log(num));
```

2. 다음 코드의 출력 결과를 예측하시오.

```javascript
const p = new Promise((resolve, reject) => {
  reject(Promise.resolve("Hello World!"));
});

p.catch((err) => console.log(err)); // 1
p.catch((err) => console.log(Promise.resolve(err))); // 2
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1.

```javascript
const p1 = Promise.resolve(21);

p1.then((num) => num * 2).then((num) => console.log(num));
```

2. 둘 다 `Promise { 'Hello World!' }`가 나온다.
   > If you pass a Promise/thenable value to reject, that untouched value will be set as the rejection reason. A subsequent rejection handler would receive the actual Promise/thenable you passed to reject, not its underlying immediate value.

</div>
</details>
<br>

### 3.5 　 Error Handling

> nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 3.6 　 Promise Patterns

> yujo

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 3.7 　 Promise API Recap

> holee

1. 다음 출력 값들을 예측해보자!

```js
var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( "Hello World" );
var p3 = Promise.reject( "Oops" );

Promise.race( [p1,p2,p3] )
.then( function(msg){
	console.log( msg );		// here!
} );

Promise.all( [p1,p2,p3] )
.catch( function(err){
	console.error( err );	// here!
} );

Promise.all( [p1,p2] )
.then( function(msgs){
	console.log( msgs );	// here!
} );
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
  
1. 다음 출력 값들을 예측해보자!

```js
var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( "Hello World" );
var p3 = Promise.reject( "Oops" );

Promise.race( [p1,p2,p3] )
.then( function(msg){
	console.log( msg );		// 42
} );

Promise.all( [p1,p2,p3] )
.catch( function(err){
	console.error( err );	// "Oops"
} );

Promise.all( [p1,p2] )
.then( function(msgs){
	console.log( msgs );	// [42,"Hello World"]
} );
```

</div>
</details>
<br>

### 3.8 　 Promise Limitations

> sunpark

1. 여러 프로미스가 연쇄적으로 실행될 때 중간에 에러가 발생하면 이 에러가 어떤 프로미스에 일어난 에러인지 알 수 있다. ( O / X )

2. 프로미스는 단일 resolve, reject 값을 가지는 특징이 있다. 프로미스가 여러 값을 전달해야 할 상황이 있다면, 어떻게 하는게 좋을까?

3. 실행한 (기본) 프로미스는 외부에서 중간에 멈출 수 없다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 여러 프로미스가 연쇄적으로 실행될 때 중간에 에러가 발생하면 이 에러가 어떤 프로미스에 일어난 에러인지 알 수 있다. ( O / **X** )
> 연쇄된 프로미스 맨 마지막에 catch를 붙어주면 에러 핸들링이 가능하지만 이때 어느 프로미스에서 일어난 에러인지는 알 수 없다.

2. 프로미스는 단일 resolve, reject 값을 가지는 특징이 있다. 프로미스가 여러 값을 전달해야 할 상황이 있다면, 어떻게 하는게 좋을까?
> 쉽게는 값을 전달할 때 배열이나 객체로 전달해도 가능하다. 또는 값을 분해해 여러 프로미스를 만들어, Promise.all등으로 처리해도 가능하다.

3. 실행한 (기본) 프로미스는 외부에서 중간에 멈출 수 없다. ( **O** / X )
> 이 내용이 프로미스의 단점이긴 하지만, 프로미스의 핵심 원리이기도 하다. 프로미스가 실행되면 무조건 resolve나 reject 둘 중 하나를 호출하기 때문이다.

</div>
</details>
<br>
