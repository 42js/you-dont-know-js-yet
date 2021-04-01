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

1. `console` I/O은 항상 동기적으로 작동하기 때문에 온전히 결과를 예측할 수 있다. (O / X)
2. Chunk 의 단위는 보통 _________이다.


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `console` I/O은 항상 동기적으로 작동하기 때문에 온전히 결과를 예측할 수 있다. (O / **X**)
`console` I/O는 성능상 유리할 경우 백그라운드에서 비동기적으로 처리되므로 "항상 동기적으로 작동된다"는 것은 옳지 않으며,  그로 인한 지연 발생 가능성 때문에 예상치 못한 결과를 얻게 될 수 있으므로 "온전히 결과를 예측할 수 있다"고 볼 수 없다.        
 it may perform better (from the page/UI perspective) for a browser to handle console I/O asynchronously in the background, without you perhaps even knowing that occurred. ...(중략)... Just be aware of this possible asynchronicity in I/O in case you ever run into issues in debugging where objects have been modified after a console.log(..) statement and yet you see the unexpected modifications show up.



2. Chunk 의 단위는 보통 **function** 이다.




</div>
</details>
<br>


### 1.2 　  Event Loop

> dongbkim

1. `setTimeout`은 타이머가 끝나고 콜백을 이벤트 루프 큐에 넣기 때문에 콜백 실행 시각을 보장할 수는 없다.(O / X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `setTimeout`은 타이머가 끝나고 콜백을 이벤트 루프 큐에 넣기 때문에 콜백 실행 시각을 보장할 수는 없다.(O /** X**)       

"`setTimeout`은 ... 콜백을 이벤트 루프 큐에 넣기 때문에 "이 틀렸다.    
It's important to note that setTimeout(..) doesn't put your callback on the event loop queue. What it does is set up a timer.       


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

1. 두 개의 작업이 동시성을 가진다는 것은 해당 작업의 동작(operation)이 이벤트 루프에서 동시에 일어나는 것을 의미한다. ( O, X )
2. 동시성을 갖지만 상호 작용을 하지 않는 작업에 대해서는 nondeterminism(비결정성 - 실행때마다 작업 순서나 결과가 달라지는 것)을 신경쓰지 않아도 된다. ( O, X )
3. 다음의 출력 순서는?
```javascript
setTimeout(() => {
    console.log('task1');
}, 0);

setTimeout(() => {
    console.log('task2');
}, 0);

setTimeout(() => {
    console.log('task3');
}, 0);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. X
> "Process 1" and "Process 2" run concurrently (task-level parallel), but their individual events run sequentially on the event loop queue.
2. O
> As two or more "processes" are interleaving their steps/events concurrently within the same program, they don't necessarily need to interact with each other if the tasks are unrelated. If they don't interact, nondeterminism is perfectly acceptable.
3. 출력 순서는 적힌 순서대로 보장되지 않는다. 고로 매번 달라질 수 있기에 알 수가 없다.

</div>
</details>
<br>

### 1.5 　  Jobs


> nkang
1. 다음 코드의 실행 결과를 순서대로 적으시오. __ - __ - __ - __ - __
```
Promise.resolve()//즉시 해소되는 프라미스1
  .then(_=>console.log('promise1 step1')) //첫번째 then (A)
  .then(_=>console.log('promise1 step2'));//두번째 then (B)

Promise.resolve()//즉시 해소되는 프라미스2
  .then(_=>console.log('promise2 step1')) //첫번째 then (C)
  .then(_=>console.log('promise2 step2'));//두번째 then (D)

console.log('ec running'); (E)

```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

E-A-C-B-D
```
ec running
promise1 step1
promise2 step1
promise1 step2
promise2 step2
```
프라미스의 then은 즉시 잡큐에 넣도록 스펙에서 규정하고 있으므로 즉시 해소된다 하더라도 현재 실행 중인 EC가 완료된 후 다음 잡으로 실행됨.

resolve로 즉시 해소되어도 then의 함수는 바로 호출되지 않고 우선 EC가 다 해소된 이후 잡큐에서 꺼내 실행됨

- 처음 등장한 프라미스1의 첫 번째 then이 잡큐에 등록
- 이 시점에서 then은 실행되지 않으므로 두 번째 then은 무시
- 이어 두 번째 등장한 프라미스2의 첫 번째 then이 잡큐에 등록. 이제 잡큐에는 두 개의 PromiseJobs가 등록됨
- 마지막 줄의 console.log가 실행되어 현재의 ScriptJobs가 완료
- 잡큐에 있는 다음 잡인 1번에서 등록한 첫 번째 프라미스의 첫 번째 then이 실행, 그 결과 다시 then이 호출되어 이를 잡큐에 등록
- 두 번째 잡큐에 들어있는 잡은 두 번째 프라미스의 첫 번째 then임. 이것도 실행하면 그 결과 잡큐에 두 번째 then의 내용을 등록
- 이제 첫 번째 프라미스의 두 번째 then이 실행
- 이어서 두 번째 프라미스의 두 번째 then이 실행

</div>
</details>
<br>

2. 다음 코드의 실행 결과를 순서대로 적으시오. __ - __ - __ - __ - __
```
console.log('Message no. 1: Sync');

setTimeout(function() {
  console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function(resolve, reject) {
   resolve();
});

promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})
.then(function(resolve) {
   console.log('Message no. 4: 2nd Promise');
});
console.log('Message no. 5: Sync');

```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1-5-3-4-2
```
Message no. 1: Sync
Message no. 5: Sync
Message no. 3: 1st Promise
Message no. 4: 2nd Promise
Message no. 2: setTimeout
```
Promise가 수행된 후에 반환되는 콜백은 Job Queue에 추가.

Job Queue는 이벤트 루프의 tick이 오면 큐에 있는 모든 작업을 수행.

그리고 그 뒤에 Task를 실행.

</div>
</details>
<br>

### 1.6 　  Statement Ordering

> nkang

다음 문장은 참일까요, 거짓일까요.

A. JS engine이 코드를 실행하는 순서는 코드를 작성하는 순서와 동일하다. (T/F)

B. 컴파일러가 표현식들의 순서를 재배치하는 과정은 관찰 가능하다. (T/F)


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

F, F

</div>
</details>
<br>
