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

1. 다음 함수 chargeCreditCard()는 타사 API(callback)을 실행하는 함수라 가정하자. 다음 코드에서 문제될 수 있는 것들은 어떤 것들이 있는가?

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

1. 다음 코드는 콜백의 문제를 해결하기 위해 나온 `asyncify`이다. 이 함수에서 `intv` 변수의 역활은 무엇일까?

```javascript
function asyncify(fn) {
  var orig_fn = fn,
    intv = setTimeout( function(){
      intv = null;
      if (fn) fn();
    }, 0 )
  ;

  fn = null;

  return function() {
    if (intv) {
      fn = orig_fn.bind.apply(
        orig_fn,
        [this].concat([].slice.call(arguments))
      );
    }
    else
      orig_fn.apply( this, arguments );
  };
}

// 다음과 같이 사용됨
function result(data) {
	console.log(a);
}

ajax("..pre-cached-url..", asyncify(result));
```

2. 콜백의 `_______` 문제를 해결하기 위해 ES6에서 Promise를 만들게 되었다.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 코드는 콜백의 문제를 해결하기 위해 나온 `asyncify`이다. 이 함수에서 `intv` 변수의 역활은 무엇일까?

> intv는 setTimeout이 실행된 이후에 null로 초기화되어있는데, 이는 setTimeout이 잡큐에 나온 이후 실행되는 결과이기 때문에, 하단에서 비동기 처리가 실행되었는지, 되지 않았는지 확인할 수 있는 flag로 활용된다.

2. 콜백의 **믿음 문제(trust issue)** 를 해결하기 위해 ES6에서 Promise를 만들게 되었다.

</div>
</details>
<br>

