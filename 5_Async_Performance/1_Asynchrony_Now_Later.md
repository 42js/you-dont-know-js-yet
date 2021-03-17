# Asynchrony: Now & Later

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

### 1.1 　  A Program in Chunks

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 1.2 　  Event Loop

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 1.3 　  Parallel Threading

> gim

1. 비동기는 한 번에 두 가지 일을 처리할 수 있다는 관점에서 보았을 때 '병렬적'이라고 할 수 있다. (O / X)

2. 다음 코드의 결과는? (`ajax()` 는 비동기 처리를 수행하는 Pseudo code 이다.)

```js
var a = 1;

function multiple() {
  a = a * 2;
}

function add() {
  a = a + 2;
}

ajax('url1', multiple);
ajax('url2', add);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 비동기적 수행은 한 번에 두 가지 일을 처리할 수 있다는 관점에서 보았을 때 '병렬적'이라고 할 수 있다. (O / __X__)

> 싱글 스레드로 동작하는 엔진과 호스팅 환경의 이벤트 루프의 상호 작용으로 적절하게 동기적으로 처리할 뿐이지만, 그 속도가 아주 빠르기 때문에 우리가 인식하기에는 '병렬적'으로 처리하는 것처럼 보일 수 있다.

2. 다음 코드의 결과는? (ajax() 는 비동기 처리를 수행하는 Pseudo code 이다.)

> 알 수 없다. 두 실행문 중 먼저 응답이 된 순서대로 콜백을 실행하게 되기 때문에 조건에 따라 달라질 수 있고, 이렇게 예측 불가능한 조건을 race condition(경합 조건)이라고 한다.

</div>
</details>
<br>

### 1.4 　  Concurrency

> sohpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 1.5 　  Jobs

> nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 1.6 　  Statement Ordering

> nkang

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

