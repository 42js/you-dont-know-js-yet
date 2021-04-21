# Benchmarking & Tuning

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

### 6.1 　 Benchmarking

> dongbkim

### 6.2 　 Context Is King

> sunpark

### 6.3 　 jsPerf.com

> gim

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
