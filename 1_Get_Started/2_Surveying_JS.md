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
[2.3　Declaring and Using Variables](#63---Declaring-and-Using-Variables)<br>

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

console.log(`My name is ${ me[___빈칸___)] }.`);
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

1. 자바스크립트의 Primitive value (원시값) 6가지를 설명하세요.

    > Number(숫자), String(문자열), Boolean(부울), bigint, Undefined, Symbol이 JS의 Primitive value이다. **p.33~36**

2. 다음과 같은 코드가 있다고 할때, 빈칸에 들어갈 코드를 작성하시오.

    > 객체를 대괄호를 통해 value값을 가져오는 경우임으로, `"first"` 또는 `'first'`가 들어가야 한다. **p. 38**

3. 다음 코드의 출력값을 작성하시오.

    > `false`는 Boolean이기 때문에 `"boolean"`이 출력되고, `null`은 Primitive value가 아니기 때문에 `"object"`가 출력된다. **p.38**

</div>
</details>
<br>

### 2.3 　  Declaring and Using Variables

1. `let` 키워드로 선언한 변수는 Function scoping을 사용한다. ( O / X )

2. 다음 코드에서 에러가 나는 줄수를 찾으시오.

```javascript
const hello = "world!"
let this_is = true;
var oh_my = "god";

if (this_is) {
  let this = "work?";
  hello = "42!";
}

this = 10;
```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. `let` 키워드로 선언한 변수는 Function scoping을 사용한다. ( O / **X** )

    > The `let` keyword has some differences to `var`, with the most obvious being that `let` allows a more limited access to the variable than `var`. This is called "block scoping" as opposed to regular or function scoping. **p.40**

</div>
</details>
<br>
