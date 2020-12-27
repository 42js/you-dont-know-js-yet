# Digging to the Roots of JS

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 3: Digging to the Roots of JS](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-3:-Digging-to-the-Roots-of-JS) |
| sunpark | [YDNJSY Get Started - 3. Digging to the Roots of JS](https://velog.io/@cos/YDNJSY-Get-Started-3-Digging-to-the-Roots-of-JS) |
| jachoi | [ydkjs yet! Get Started - Chapter 3 요약 정리](https://n00bh4cker.tistory.com/133)|
| gim | [Chapter 3: Digging to the Roots of JS](https://velog.io/@mkitigy/Chapter-3-Digging-to-the-Roots-of-JS)|

## Quiz

[3.1 Iteration](#31---Iteration)<br>
[3.2 Closure](#32---Closure)<br>
[3.3 this Keyword](#33---this-Keyword)<br>
[3.4 Prototypes](#34---Prototypes)<br>

### 3.1    Iteration

1. 자바스크립트의 모든 Iterator 객체는 `value` 와 `done` 속성을 갖는다 (O, X)
2. Iterator 객체의 생성이후 `prev()` 메서드와 `next()` 메서드를 이용하여 Iterable을 순회 할 수 있다 (O, X)
3. `for .. in` 문을 이용하여 Iterable 객체를 순회할 수 있다 (O, X)
4. `strings` 는 Iterable 객체이다 (O, X)
5. 다음의 코드에서 잘못된 부분을 찾으시오
```javascript
let arr = ['hello', 'world', '☆', '★']
for (let [i, j, k] of arr.entries)
	console.log(i, j, k)
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 자바스크립트의 모든 Iterator 객체는 `value` 와 `done` 속성을 갖는다 (***O***, X)
> ... the object has value and done properties, where done is a boolean that is false until the iteration over the underlying data source is complete.

2. Iterator 객체의 생성이후 `prev()` 메서드와 `next()` 메서드를 이용하여 Iterable을 순회 할 수 있다 (O, ***X***)

- prev() 메서드는 존재하지 않는다.
- next() 메서드를 이용하여 Iterable 을 순회할 수 있다

3. `for .. in` 문을 이용하여 Iterable 객체를 순회할 수 있다 (O, ***X***)
 -  for .. of 문을 사용한다
 > ES6 also included several mechanisms (syntax and APIs) for standardized consumption of these iterators. One such mechanism is the for..of loop:

4. `strings` 는 Iterable 객체이다 (***O***, X)
 > ES6 defined the basic data structure/collection types in JS as iterables. This includes strings, arrays, maps, sets, and others.

5. 다음의 코드에서 잘못된 부분을 찾으시오
- entries 는 프로퍼티가 아니다 ㅠㅡㅠ
```javascript
let arr = ['hello', 'world', '☆', '★']
for (let [i, j, k] of arr.entries())
	console.log(i, j, k)
	//출력 결과
	// 1 hello undefined
	// 2 world undefined
	// 3 ☆ undefined
	// 4 ★ undefined
```
</div>
</details>
<br>

### 3.2    Closure

1. 객체와 함수는 클로저를 가진다 (O, X)
2. 다음 코드에서 출력할 결과를 예상해보시오
```javascript
function counter(step = 1) {
var count = 0;
return function increaseCount(){
count = count + step;
return count;
};
}

counter.count = 100;
var inc10 = counter(10);

console.log(inc10());
counter.count += 200;
console.log(inc10());
counter.count += 300;
console.log(inc10());
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 객체와 함수는 클로저를 가진다 (O, ***X***)
 - 클로저는 함수의 고유한 특성이다
 > We see two definitional characteristics here. First, closure is part of the nature of a function. Objects don’t get closures, functions do

2. 다음 코드에서 출력할 결과를 예상해보시오
- counter() 내의 count 변수는 함수 범위의 스코프를 가지기 때문에 함수 바깥에서는 접근 할 수 없다
```javascript
function counter(step = 1) {
var count = 0;
return function increaseCount(){
count = count + step;
return count;
};
}

counter.count = 100;
var inc10 = counter(10);

console.log(inc10()); // 10
counter.count += 200;
console.log(inc10()); // 20
counter.count += 300;
console.log(inc10()); // 30
```
</div>
</details>
<br>

### 3.3    this Keyword
1. 자바스크립트에서 `this` 는 현재 객체를 가리킨다 (O, X)
2. `call()` 메서드를 이용하여 `this`를 설정할 수 있다 (O, X)
3. 함수를 어떤 객체의 메서드로 사용시 `this` 는 그 객체를 가리키게 된다 (O, X)
4. `this` 를 통해 전역변수의 값에 접근 할 수 있다 (O, X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 자바스크립트에서 `this` 는 현재 객체를 가리킨다 (O, ***X***)
- this 는 `execution context` 를 가리킨다
> One common misconception is that a function’s this refers to the functionitself. Because of how this works in other languages, another misconception is that this points the instance that a method belongs to. Both are incorrect. (중략) But functions also have another characteristic besides their scope that influences what they can access. This characteristic is best described as an execution context, and it’s exposed tothe function via its this keyword.

2. `call()` 메서드를 이용하여 `this`를 설정할 수 있다 (***O***, X)
 > A third way to invoke a function is with the call(..) method, which takes an object (otherHomework here) to use for setting the this reference for the function call. The property reference this.topic resolves to "Math".

3. 함수를 어떤 객체의 메서드로 사용시 `this` 는 그 객체를 가리키게 된다 (***O***, X)
>A copy of the assignment function reference is set as a property on the homework object, and then it’s called as homework.assignment(). That means the this for that function call will be the homework object. Hence, this.topic resolves to "JS".

4. `this` 를 통해 전역변수의 값에 접근 할 수 있다 (***O***, X)
> execution context 엔 전역변수도 포함된다
</div>
</details>
<br>

### 3.4    Prototypes

1. 프로토타입 체인에서의 프로퍼티와 동일한 이름을 가진 변수를 만드는 것을 _______ (이)라고 한다

2. 상위 프로토타입의 프로퍼티 값의 변화는 하위 프로퍼티에도 영향을 미친다 (O, X)

3. 모든 객체의 최상위 프로토타입은 `function` 이다(O, X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
1. 프로토타입 체인에서의 프로퍼티와 동일한 이름을 가진 변수를 만드는 것을 __shadowing__ (이)라고 한다

> The topic on otherHomework is “shadowing” the property of the same name on the homework object in the chain.

2. 상위 프로토타입의 프로퍼티 값의 변화는 하위 프로퍼티에도 영향을 미친다 (***O***, X)
- 프로토타입 체인을 통해 연결되어 있기에 상위 프로토타입의 프로토타입의 프로퍼티 값의 변화는 하위 프로퍼티에 영향을 미친다

> A series of objects linked together via prototypes is called the “prototype chain.” The purpose of this prototype linkage (i.e., from an object B to another object A) is so that accesses against B for properties/methods that B does not have, are delegated to A to handle. Delegation of property/method access allows two (or more!) objects to cooperate with each other to perform a task.

3. 모든 객체의 최상위 프로토타입은 `function` 이다(O, ***X***)
> 최상위 프로토타입은 `Object` 이다

</div>
</details>
<br>
