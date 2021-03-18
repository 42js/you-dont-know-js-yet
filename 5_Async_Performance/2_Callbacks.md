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

1. 다음 함수 chargeCreditCard()는 타사 API을 실행하는 함수라 가정하자. 다음 코드에서 문제될 수 있는 것들은 어떤 것들이 있는가?

```js
analytics.trackPurchase( purchaseData, function(){
	chargeCreditCard();
	displayThankyouPage();
} );
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 함수 chargeCreditCard()는 타사 API(callback)을 실행하는 함수라 가정하자. 다음 코드에서 문제될 수 있는 것들은 구체적으로 어떤 것들이 있는가?

```js
analytics.trackPurchase( purchaseData, function(){
	chargeCreditCard();
	displayThankyouPage();
} );
```

- 특정 조건에서 여러 번의 callback 호출을 시도하게 타사에서 불시에 바꿀 수 있다.
- callback 호출을 일찍 혹은 호출하지않을 수 있다.
- 필요한 환경/매개 변수를 콜백에 전달하지 못 할 수 있다.
- 일부 예외나 오류를 타사에서 전달해주지  알 수 없다.

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

