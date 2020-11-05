# Surveying JS

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 2: Surveying JS](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-2:-Surveying-JS) |
| sunpark | [YDNJSY Get Started - 2. Surveying JS](https://velog.io/@cos/YDNJSY-Get-Started-2-Surveying-JS) |
| jachoi | [ydkjs yet! Get Started - Chapter 2 요약 정리](https://n00bh4cker.tistory.com/132)|

## Quiz

[2.1　Each File is a Program](#21---Each-File-is-a-Program)<br>
[2.2　Values](#22---Values)<br>
[2.3　Declaring and Using Variables](#23---Declaring-and-Using-Variables)<br>
[2.4　Functions](#24---Functions)<br>
[2.5　Comparisons](#25---Comparisons)<br>
[2.6　How We Organize in JS](#26---How-We-Organize-in-JS)<br>

### 2.1 　  Each File is a Program

1. 5개의 JS 파일이 존재하는 서비스에서 한 파일 안에 오류가 발생하면 서비스가 작동하지 않는다 ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. 5개의 JS 파일이 존재하는 서비스에서 한 파일 안에 오류가 발생하면 서비스가 작동하지 않는다 ( O / **X** )

   > Obviously, if your application depends on five .js files, and one of them fails, the overall application will probably only partially operate, at best. **p.32**


</div>
</details>
<br>

### 2.2 　  Values

1. 자바스크립트의 Primitive value (원시값) 6가지를 설명하세요.

2. 다음과 같은 코드가 있다고 할때, 빈칸에 들어갈 코드를 작성하시오.

```javascript
var me = {
    first: "Kyle",
    last: "Simpson",
    age: 39,
    specialties: [ "JS", "Table Tennis" ]
};

console.log(`My name is ${ me[<빈칸>] }.`);
// My name is Kyle
```

3. 다음 코드의 출력값을 작성하시오.

```javascript
const myValue = [true, false, null];
console.log(typeof myValue[1]);
console.log(typeof myValue[2]);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 자바스크립트의 Primitive value (원시값) 7가지를 설명하세요.

    > Number(숫자), String(문자열), Boolean(부울), bigint, Undefined, Null, Symbol이 JS의 Primitive value이다. [참고](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-primitive-value) **p.33~36**

2. 다음과 같은 코드가 있다고 할때, 빈칸에 들어갈 코드를 작성하시오.

    > 객체를 대괄호를 통해 value값을 가져오는 경우임으로, `"first"` 또는 `'first'`가 들어가야 한다. **p. 38**

3. 다음 코드의 출력값을 작성하시오.

    > `false`는 Boolean이기 때문에 `"boolean"`이 출력되고, `null`은 [여기](https://developer.mozilla.org/en-US/docs/Glossary/null)를 참고하자. **p.38**

</div>
</details>
<br>

### 2.3 　  Declaring and Using Variables

1. `let` 키워드로 선언한 변수는 Function scoping을 사용한다. ( O / X )

2. 다음 코드에서 에러가 나는 줄수를 **모두** 찾으시오.

```javascript
const hello = "world!"
let this_is = true;
var oh_my = "god";

if (this_is) {
  let this = "work?";
  hello = "42!";
}

console.log(this);
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `let` 키워드로 선언한 변수는 Function scoping을 사용한다. ( O / **X** )

    > The `let` keyword has some differences to `var`, with the most obvious being that `let` allows a more limited access to the variable than `var`. This is called "block scoping" as opposed to regular or function scoping. **p.40**

2. 다음 코드에서 에러가 나는 줄수를 **모두** 찾으시오.

    > 6번째 줄에서 변수 이름을 this로 할당했는데, this는 키워드이기 때문에 변수 이름으로 생성할 수 없다. 또한 7번째 줄에서는 `const`로 선언한 값을 변경하려 하기 때문에 에러가 날 것이다. 결과적으로 6, 7번째 줄에서 오류가 난다. **p.41**

</div>
</details>
<br>

### 2.4 　  Functions

1. 변수에 함수를 넣는 함수표현식은 컴파일 단계에서 변수에 함수를 할당한다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 변수에 함수를 넣는 함수표현식은 컴파일 단계에서 변수에 함수를 할당한다. ( O / **X** )

    > Different from the function declaration form, a function expression is not associated with its identifier until that statement during runtime. **p.44**

</div>
</details>
<br>

### 2.5 　  Comparisons

1. 다음 비교식들의 true, false값을 적으시오.

```javascript
"" == null;
"92" < 96;
"false" == "[]";
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음 비교식들의 true, false값을 적으시오.

    > False, True, False **p.50~52**

</div>
</details>
<br>

### 2.6 　  How We Organize in JS

1. Class를 상속할 때 함수를 상속받기 위해 `super`를 통해 부모 함수를 호출해야 한다. ( O / X )

2. Module에서 새로운 객체를 만들기 위해 `new` 키워드를 사용해야 한다. ( O / X )

3. ES Modules를 통해 함수를 가져올 때 가져오는 함수는 모듈에서 `export` 키워드를, 실제 사용할 파일에선 `import` 키워드를 사용해야 한다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. Class를 상속할 때 함수를 상속받기 위해 `super`를 통해 부모 함수를 호출해야 한다. ( **O** / X )

    > The `super(..)` call in each constructor delegates to the parent `Publication` class's constructor for its initialization work, and then they do more specific things according to their respective publication type (aka, "sub-class" or "child class"). **p.57**

2. Module에서 새로운 객체를 만들기 위해 `new` 키워드를 사용해야 한다. ( O / **X** )

    > The only observable difference here is the lack of using `new`, calling the module factories as normal functions. **p.62**

3. ES Modules를 통해 함수를 가져올 때 가져오는 함수는 모듈에서 `export` 키워드를, 실제 사용할 파일에선 `import` 키워드를 사용해야 한다. ( **O** / X )

    > **p.64~65**

</div>
</details>
<br>
