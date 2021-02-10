# Behavior Delegation

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

[6.1　Toward Delegation-Oriented Design](#61---Toward-Delegation-Oriented-Design)<br>
[6.2　Class Versus Objects](#62---Class-Versus-Objects)<br>
[6.3　Simpler Design](#63---Simpler-Design)<br>
[6.4　Nicer Syntax](#64---Nicer-Syntax)<br>
[6.5　Introspection](#65---Introspection)<br>

### 6.1 　  Toward Delegation-Oriented Design

> yujo

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>


### 6.2 　  Class Versus Objects

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 6.3 　  Simpler Design

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 6.4 　  Nicer Syntax

> dongbkim

1. 객체 내부에서 `concise method declaration`을 사용한 method는 재귀 방식을 사용할 수 없다. (O / X)     

2. `Object.create`가 `Object.setPrototypeOf`보다 처리 속도 면에서 더 느리다.(O / X)    

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 객체 내부에서 `concise method declaration`을 사용한 method는 recursion 방식을 사용할 수 없다. (O / **X**)


	사용할 수는 있지만 자신을 호출하는 형태로는 불가능하다.     



2. `Object.create`가 `Object.setPrototypeOf`보다 처리 속도 면에서 더 느리다.(O / **X**)    
X
- MDN Object.setPrototypeof()    
> Warning: Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in every browser and JavaScript engine. (...) Instead, create a new object with the desired [[Prototype]] using Object.create().


```
//벤치마크 테스트 결과
node 8.9.1 results:

Iteration(s):            100000000
==================================
Object.create:           46.56
Object.setPrototypeOf:   353.4

Chrome 59.0.3071.104 results:

Iteration(s):            100000000
==================================
Object.create:           46.36
Object.setPrototypeOf:   326.56
```
[출처](https://gist.github.com/calebmer/c74e2a7941044e5f28b8)


</div>
</details>
<br>

### 6.5 　  Introspection

> gim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>
