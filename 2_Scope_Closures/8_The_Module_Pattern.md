# The Module Pattern

## 요약
| Name | URL |
|:---|:---|
| holee | [Chapter 8: The Module Pattern](https://github.com/hochan222/Everything-in-JavaScript/wiki/Chapter-8:-The-Module-Pattern) |
| sunpark |  |
| dongbkim |  |

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

> sunpark

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



</div>
</details>
<br>

### 8.3 　  Node CommonJS Modules

> dongbkim

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">



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
