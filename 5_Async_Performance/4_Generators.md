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

### 4.2 　 Generator'ing Values

> gim

### 4.3 　 Iterating Generators Asynchronously

> gim

### 4.4 　 Generators + Promises

> sohpark

1. 다음과 같은 프라미스를 반환하는 함수와 제네레이터가 정의되어 있을 때, `Hello World`를 출력하게 하려면 어떻게 해야할지 then을 이용하여 코드를 작성해주세요.

```javascript
function apiCall(x) {
  return Promise.resolve(x); // 비동기 함수. Promise 반환
}

function* main() {
  try {
    let result = yield apiCall("Hello World");
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
  let val1 = yield apicall("someurl01");
  let val2 = yield apicall("someurl02");

  let val3 = yield apicall("someurl" + val1 + val2);

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
  (res) => {
    it.next(res);
  },
  (err) => {
    it.throw(err);
  }
);
```

2. `제네리이터 함수의 특성상 val1, val2는 병렬 작업이 불가능하다.`는 잘못된 말로, val1과 val2를 얻어오는 Promise는 병렬적으로 작업이 가능하다. yield와 Promise.all을 이용하는 방법이 있는데, 책에서 소개된 방법들은 아래와 같다.

```javascript
function* gen() {
  let p1 = apicall("someurl01");
  let p2 = apicall("someurl02");

  let val1 = yield p1;
  let val2 = yield p2;

  let val3 = yield apicall("someurl" + val1 + val2);

  console.log(val3);
}
```

```javascript
function* gen() {
  let vals = yield Promise.all([apicall("someurl01"), apicall("someurl02")]);

  let [val1, val2] = vals;

  let val3 = yield apicall("someurl" + val1 + val2);

  console.log(val3);
}
```

</div>
</details>
<br>

### 4.5 　 Generator Delegation

> nkang

### 4.6 　 Generator Concurrency

> yujo

### 4.7 　 Thunks

> yujo

### 4.8 　 Pre-ES6 Generators

> holee
