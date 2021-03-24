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

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

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
