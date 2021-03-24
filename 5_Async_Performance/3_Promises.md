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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>
