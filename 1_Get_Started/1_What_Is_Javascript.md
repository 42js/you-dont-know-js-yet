# What Is Javascript?

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 1: What Is JavaScript?](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-1:-What-Is-JavaScript%3F) |
| sunpark | [YDNJSY Get Started - 1. What is JavaScript?](https://velog.io/@cos/YDNJSY-Get-Started-What-is-JavaScript) |
| jachoi | [ydkjs yet! Get Started - Chapter 1 요약 정리](https://n00bh4cker.tistory.com/131)|
| gim | [Chapter 1: What is Java Script?](https://velog.io/@mkitigy/Chapter-1-What-is-Java-Script) |

## Quiz

## 01장 :cat: Chapter 1: What Is JavaScript?

[1.1　Language Specification](#11---Language-Specification)<br>
[1.2　Multi-paradigm languages](#12---Multi-paradigm-languages)<br>
[1.3　Filling the Gaps](#13---Filling-the-Gaps)<br>
[1.4　Is it an interpreted script or a compiled program](#14---is-it-an-interpreted-script-or-a-compiled-program)<br>
[1.5　Strict mode](#15---Strict-mode)<br>

### 1.1 　  Language Specification

1. JS를 관리하는 기술 운영위원회 인 ECMA은 공식 사양을 관리하며 정기적으로 만나 회의를 하고 변경사항에 대하여 투표 후 표준 조직인 TC39에 제출한다. ( O / X )

2. 스펙에 대한 제안은 TC39 위원들만 가능하고 일반 사람들은 투표권을 갖는다. ( O / X )

3. TC39의 구성원은 5단계 과정을 걸쳐서 표준을 제시한다. ( O / X )

4. console.log()는 Javascript Spec에서 정의된다. ( O / X )

5. JS는 상위호환(Forwards Compatibility)을 지원한다. ( O / X )

6. 다음 과정은 자바스크립트의 실행 방식입니다. 단계별로 설명해보세요.

<img src="https://user-images.githubusercontent.com/22424891/97806073-25874f80-1c9d-11eb-96c2-8ff82ca62501.png" height="100px" />

- 1. ```_____________________```
- 2. ```_____________________```
- 3. ```_____________________```
- 4. ```_____________________```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">


1. JS를 관리하는 기술 운영위원회 인 ECMA은 공식 사양을 관리하며 정기적으로 만나 회의를 하고 변경사항에 대하여 투표 후 표준 조직인 TC39에 제출한다. ( O / **X** )

   > JS를 관리하는 기술 운영위원회 인 TC39은 공식 사양을 관리하며 정기적으로 만나 회의를 하고 변경사항에 대하여 투표 후 표준 조직인 ECMA에 제출한다. **p.4**

2. 스펙에 대한 제안은 TC39 위원들만 가능하고 일반 사람들은 투표권을 갖는다. ( O / **X** )

    > You have to get a TC39 member to champion a proposal for it to be considered “Stage 0” officially. **p.5**

3. TC39의 구성원은 5단계 과정을 걸쳐서 표준을 제시한다. ( **O** / X )

    > All TC39 proposals progress through a five-stage process— of course, since we’re programmers, it’s 0-based!—Stage 0 through Stage  **p.5**

4. console.log()는 Javascript Engine이 아닌 Web API나 Node.js에서 정의된다. ( O / **X** )

    > Another common example is console.log(..) (and all the other console.* methods!). These are not specified in JS, but because of their universal utility are defined by pretty much every JS environment, according to a roughly agreed consensus. **p.9**

5. JS는 상위호환(Forwards Compatibility)을 지원한다. ( O / **X** )

    > JS는 하위호환(Backwards Compatibility)를 지원하지만, 상위호환(Forwards Compatibility)를 지원하지 않습니다. **p.13**

    > 하위호환이란 이전 버젼에 구현된 스펙들에 대해 다음 버젼에서도 정상 작동된다는 것을 보장한다는 것이고, 상위호환은 새로운 버젼에 들어간 스펙을 사용한 코드를 이전버젼으로 돌려도 에러 없이 돌아간다는 것이다.

6. 다음 과정은 자바스크립트의 실행 방식입니다. 단계별로 설명해보세요.

<img src="https://user-images.githubusercontent.com/22424891/97806073-25874f80-1c9d-11eb-96c2-8ff82ca62501.png" height="100px" />

- 1. ```프로그램이 개발자의 편집기를 떠난 후에는 Babel에 의해 변환되고 Webpack에 의해 압축 된 다음 JS 엔진에 매우 다른 형태로 전달된다.```
- 2. ```JS 엔진은 코드를 AST로 구문 분석한다.```
- 3. ```그런 다음 엔진은 해당 AST를 일종의 바이트로 변환한다. 이진 중간 표현(IR)인 코드는 최적화 JIT(Just-In-Time) 컴파일러에 의해 더욱 세분화/변환된다.```
- 4. ```마지막으로 JS VM이 프로그램을 실행한다.```

    > **p.24**

</div>
</details>
<br>

### 1.2 　  Multi-paradigm languages

1. 자바스크립트는 함수형 언어이다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 자바스크립트는 함수형 언어이다. ( O / **X** )

    > JavaScript is most definitely a multi-paradigm language. **p.12**

</div>
</details>
<br>

### 1.3 　  Filling the Gaps

1. 이전 환경에 있는 것처럼 최신 문법을 사용 할 수 있게 API 메서드에 대한 정의를 제공하는 패던을 ```_______``` 이라고 한다.

2. Promise 프로토타입인 finally 메소드는 ES2016이상 버전에서 사용할 때 정상 작동한다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 이전 환경에 있는 것처럼 최신 문법을 사용 할 수 있게 API 메서드에 대한 정의를 제공하는 패던을 ```_______``` 이라고 한다.

    > This pattern is called a polyfill (aka “shim”). **p.18**

2. Promise 프로토타입인 finally 메소드는 ES2016이상 버전에서 사용할 때 정상 작동한다. ( O / **X** )

    > If this code were used in a pre- ES2019 environment, the finally(..) method would not exist, and an error would occur. **p.18**

</div>
</details>
<br>

### 1.4 　  Is it an interpreted script or a compiled program

1. JS가 컴파일되기 때문에 코드가 실행되기 전에 정적 오류(예 : 잘못된 구문)에 대한 알림을 받는다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

2. JS가 컴파일되기 때문에 코드가 실행되기 전에 정적 오류(예 : 잘못된 구문)에 대한 알림을 받는다. ( **O** / X )

    > And again, the reason that matters is, since JS is compiled, we are informed of static errors (such as malformed syntax) before our code is executed.  **p.25**

</div>
</details>
<br>

### 1.5 　  Strict mode

1. Strict mode 를 전체에 선언해 보세요!

```______________```

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. Strict mode 를 전체에 선언해 보세요!

```"use strict";```

    > ```"use strict";``` **p.28**

</div>
</details>
<br>
