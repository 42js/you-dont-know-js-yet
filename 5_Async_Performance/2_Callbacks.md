# Callbacks

## 요약
| Name | URL |
|:---|:---|
| holee |  |
| sunpark |  |
| dongbkim |  |
| gim |  |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

### 2.1 　  Continuations

> yujo

- 다음 코드의 출력 결과(순서)는?


```js
console.log('Good');

setTimeout(function() {
	console.log('42');
}, 3000);

console.log('Bye');
```


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

`Good Bye 42`

</div>
</details>
<br>

### 2.2 　  Sequential Brain

> yujo

1. 다음 코드의 출력 결과를 맞춰보세요.
2. 다음 코드를 어떻게 개선할 수 있을까요?

```js
setTimeout(
  (name) => {
    let coffeeList = name;
    console.log(coffeeList);
    setTimeout(
      (name) => {
        coffeeList += ', ' + name;
        console.log(coffeeList);
        setTimeout(
          (name) => {
            coffeeList += ', ' + name;
            console.log(coffeeList);
          },
          500,
          'Mocha',
        );
      },
      500,
      'Americano',
    );
  },
  500,
  'Espresso',
);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 'Espresso' -> 'Espresso, Americano' -> 'Espresso, Americano, Mocha'
2. Promise, generator, async/await 

</div>
</details>
<br>

### 2.3 　  Trust Issues

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 2.4 　  Trying to Save Callbacks

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

