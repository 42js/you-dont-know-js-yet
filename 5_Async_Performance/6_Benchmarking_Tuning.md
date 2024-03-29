# Benchmarking & Tuning

## 요약
| Name | URL |
|:---|:---|
| holee | [tail_call_optimization](https://gist.github.com/hochan222/f3407f9db47e3237cbd82539525fce60) |
| sunpark |  |
| dongbkim |  |
| gim |  |
| sohpark |  |
| nkang |  |
| yujo |  |

## Quiz

### 6.1 　 Benchmarking

> dongbkim


1. **Benchmark.js**를 이용하여 string을 array로 생성하는 여러가지 방법들을 벤츠마크하였다. 다음 코드에 대해 설명하고 이 코드의 한계에 대해 서술하시오.   


```js
const Benchmark = require("benchmark");

var suite = new Benchmark.Suite();
const a = "hello";
suite.add("\n======\nuse split",function(){
	a.split("");
})
.add("\n======\nuse spread", function() {
	[...a];
})
.add("\n======\nuse from", function(){
	Array.from(a);
})
.on("cycle", function(e){
	console.log(String(e.target));
})
.on("complete", function(){
	console.log("\n======\n1st WINNER vvvvv"+this.filter("fastest").map("name"));
})
.run({"async": true});

```


<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. 위 코드에 의하면 첫번째 방법이 제일 빠르나, 다른 짧은 string로 테스트 했을 때, 두번째 방법이 제일 빠르다고 나온다. 즉, 해당 테스트 케이스의 경우 대부분 첫번째 방법이 빠르다고 할 수 있으나, 원래 이 코드의 작성 목적인 "string을 array로 생성하는 여러가지 방법들을 벤츠마크"를 테스트하기 위해서 케이스가 충분하지 않아 신뢰도가 떨어진다.
```
# 위 코드 결과

======
use split x 5,399,034 ops/sec ±1.50% (85 runs sampled)

======
use spread x 2,552,140 ops/sec ±0.98% (86 runs sampled)

======
use from x 2,529,205 ops/sec ±0.94% (88 runs sampled)

======
1st WINNER vvvvv
======
use split
```
```
# 짧은 스트링 테스트 결과
======
use split x 9,219,866 ops/sec ±16.07% (67 runs sampled)

======
use spread x 26,158,032 ops/sec ±1.02% (87 runs sampled)

======
use from x 22,984,017 ops/sec ±2.07% (86 runs sampled)

======
1st WINNER vvvvv
======
use spread
```


</div>
</details>
<br>


### 6.2 　 Context Is King

> sunpark

1. JS 코딩을 할 때 알고리즘 문제를 풀 때처럼 시간복잡도를 계산하여 사소한 차이(ex. O(N) vs O(NlgN))도 줄여야 최적화에 도움이 된다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. JS 코딩을 할 때 알고리즘 문제를 풀 때처럼 시간복잡도를 계산하여 사소한 차이(ex. O(N) vs O(NlgN))도 줄여야 최적화에 도움이 된다. ( O / **X** )
> JS에서 미시성능에 너무 집중하다 보면 컴파일러나 엔진에서 이를 생략하거나 무시하는 작업들도 있기 때문에 미시성능에 집중하지 않아도 된다.

</div>
</details>
<br>

### 6.3 　 jsPerf.com

> gim
 
1. 명확한 테스트를 위해 어떤 점을 고려할 수 있을까요? (자유롭게 말해봅시다.)

### 6.5 　 Microperformance

> sohpark

1. 다음 중 저자가 작성하는 코드의 microperformance에 집착할 필요가 없다고 한 이유 중 적절하지 않은 것은?
- 작성된 코드와 실제 엔진이 실행하는 코드가 다를 수 있기 때문
- 브라우저 엔진마다 동작 방식이 다를 수 있기 때문
- 실질적인 성능 측정이 불가능하기 때문
- 성능을 위한 복잡한 코드보다 가독성이 더욱 중요하기 때문
- 성능 개선을 위해 작성한 코드가 몇몇 엔진에서는 오히려 성능을 저하시키기 때문

2. 'unrolling recursion' 이 무엇인지 서술하시오.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 

- 작성된 코드와 실제 엔진이 실행하는 코드가 다를 수 있기 때문
  -> 브라우저의 자바스크립트 엔진은 최적화를 위해 실제 작성한 코드와 다르게 코드를 변형하여 실행할 수 있습니다. 
- 브라우저 엔진마다 동작 방식이 다를 수 있기 때문
  -> 브라우저의 엔진마다 세부적인 동작 방식, 최적화 방식은 모두 다를 수 있습니다. 책에서는 오페라 브라우저가 예전에 wrapper obejct의 boxing/unboxing 관련 동작 방식이 달랐던 것을 예시로 보여주고 있습니다. 
- **실질적인 성능 측정이 불가능하기 때문**
  -> Number, parseInt 두 가지의 함수는 숫자로 만드는 기능을 제공하지만 엄연히 성능의 차이가 있다고 설명하고 있습니다. Benchmark.js 등을 이용해서 성능을 측정하는 것도 가능은 하기에 불가능하다고 말하기는 어렵습니다. 
- 성능을 위한 복잡한 코드보다 가독성이 더욱 중요하기 때문
  -> 결국 다양한 이유에 의해 정말 핵심이 되는 부분이 아니라면 이런 소소한 성능 개선은 크게 유효하지 않기 때문에 오히려 가독성 좋은 코드를 쓰는 것이 좋다고 합니다. 
- 성능 개선을 위해 작성한 코드가 몇몇 엔진에서는 오히려 성능을 저하시키기 때문
  -> 대표적으로 v8엔진은 배열의 길이를 별도의 변수에 캐싱해두는 것이 그냥 arr.length로 접근하는 것보다 비효율적으로 엔진이 동작하게끔 만든다고 합니다.

2. 재귀로 작성된 코드를 최적화를 위해 (혹은 더 쉽게 수행하기 위해) 반복문으로 바꾸는 행위
> some engines have a practice called "unrolling recursion" where it can realize that the recursion you've expressed can actually be done "easier" with a loop.

</div>
</details>
<br>


### 6.6 　 Tail Call Optimization (TCO)

> holee

1. 구글 크롬은 현재 Tail Call Optimization을 지원한다. ( O, X )
2. 사파리는 현재 Tail Call Optimization을 지원한다. ( O, X )
3. Tail Call Optimization을 고르시오. ( bar, baz )
```js
function foo(x) {
	return x;
}
function bar(y) {
	return foo( y + 1 );	
}
function baz() {
	return 1 + bar( 40 );	
}
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
  1. 구글 크롬은 현재 Tail Call Optimization을 지원한다. ( O, <strong>X</strong> )

> https://www.chromestatus.com/feature/5516876633341952

2. 사파리는 현재 Tail Call Optimization을 지원한다. ( <strong>O</strong>, X )
3. Tail Call Optimization을 고르시오. ( **bar**, baz )

</div>
</details>
<br>
