# The Module Pattern

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 8: The Module Pattern](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-8:-The-Module-Pattern) |
| sunpark |  |
| dongbkim |  |
| gim | [Chapter 8: The Module Pattern](https://velog.io/@mkitigy/Chapter-8-The-Module-Pattern) |

## Quiz
[8.1　Encapsulation and Least Exposure (POLE)](#81---Encapsulation-and-Least-Exposure-POLE)<br>
[8.2　What Is a Module?](#82---What-Is-a-Module)<br>
[8.3　Node CommonJS Modules](#83---Node-CommonJS-Modules)<br>
[8.4　Modern ES Modules (ESM)](#84---Modern-ES-Modules-ESM)<br>

### 8.1 　  Encapsulation and Least Exposure (POLE)

> holee

1. 광범위한 캡슐화의 목표는 함께 공통 목적을 제공하는 데이터나 함수의 번들링 또는 공동 배치에 있다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 광범위한 캡슐화의 목표는 함께 공통 목적을 제공하는 데이터나 함수의 번들링 또는 공동 배치에 있다. ( **O** / X )

</div>
</details>
<br>

### 8.2 　  What Is a Module?

1. **Stateful**을 설명해보시오.

2. 함수들의 집합인 Namespace는 Stateful하지만 visibility-control이 없어 Module이 아니다. ( O / X )

3. Classic Modules는 visibility-control를 구현하기 위해 JS Specs중 _________를 사용한다. 이때문에 변수와 함수들은 기본적으로 ( public / private )으로 정의된다.

4. IIFE를 사용해 같은 모듈을 각각 다른 여러 인스턴스로 만들 수 있다. ( O / X )

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. **Stateful**을 설명해보시오.
  > A module is also stateful: it maintains some information over time, along with functionality to access and update that information. **p.170** 정리하자면 시간이 지나도 데이터(정보)를 가지고 있고 이를 활용할 수 있는 성질을 말한다.

2. 함수들의 집합인 Namespace는 Stateful하지만 visibility-control이 없어 Module이 아니다. ( O / **X** )
  > Namespace는 함수들의 집합이기 때문에 Stafeful하지 않고 Stateless하다. Namespace의 함수들은 항상 공개적이기 때문에 visibility-control도 없다고 생각할 수 있다. **p.171**

3. Classic Modules는 visibility-control를 구현하기 위해 JS Specs중 **Lexical scope / Closure**를 사용한다. 이때문에 변수와 함수들은 기본적으로 ( public / **private** )으로 정의된다.
  > By virtue of how lexical scope works, defining variables and functions inside your outer module definition function makes everything by default private. Only properties added to the public API object returned from the function will be exported for external public use. **p.175**

4. IIFE를 사용해 같은 모듈을 각각 다른 여러 인스턴스로 만들 수 있다. ( O / **X** )
  > IIFE는 선언 이후 오로지 한번 사용되기 때문에 여러 인스턴스로 만들 수 없다.

</div>
</details>
<br>

### 8.3 　  Node CommonJS Modules

> dongbkim

1. 클래식 모듈과 Node CommonJS 모듈은 모두 파일 당 모듈 하나씩이다. (O,X)

<br/>

2. 첫번째 코드를 두번째로 바꾸었을 때, 장점에 대해서 말하시오.
```js
module.exports = {};
```
```js
Object.assign(module.exports, {})
```

<br/>

3. 다음 코드에 대해서 설명하시오.
```js
var getName = require("a/b/c/d.js").getName;
```

<br/>
<br/>

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. X
<br/>
Common Js module 과 ESM이 파일 당 모듈 하나가 원칙이지만 classic module은 아니다. 
<br/>

2. module.exports를 얕은 복사를 함으로 안전성을 높이며, 한 개 이상의 모듈을 추가할 수 있다. 
<br/>

3. d.js의 모듈 인스턴스 중 getName만 access했다.

<br/>
</div>
</details>
<br>

### 8.4 　  Modern ES Modules (ESM)

> holee

1. 다음과 같이 ESM 코드를 작성하였다. import 코드로 알맞은 것은?

```js
export default function getName(studentID) { 
  // ..
}
```

(1)
```js
import { getName } from "/path/to/students.js";
getName(73);   // Suzy
```

(2)
```js
import getName from "/path/to/students.js";
getName(73);   // Suzy
```

(3)
```js
import getName2 from "/path/to/students.js";
getName(73);   // Suzy
```
<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

1. 다음과 같이 ESM 코드를 작성하였다. import 코드로 알맞은 것은?

> (2), (3)  
> [export default]: 파일 전체를 export하고 이름을 마음대로 정할 수 있다.  
> [export 변수]: 해당 변수만 export하고 해당 변수명 그대로 가져와야한다.  

</div>
</details>
<br>
