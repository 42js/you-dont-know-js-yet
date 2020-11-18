# The Scope Chain

## 요약
| Name | URL |
|:---|:---|
| holee |  |
| sunpark |  |
| jachoi |  |
| dongbkim |  |

## Quiz

[3.1　Shadowing](#31---Lookup-Is-Mostly-Conceptual)<br>
[3.2　Function Name Scope](#32---Function-Name-Scope)<br>
[3.3　Arrow Functions](#33---Arrow-Functions)<br>

### 3.1 　  Shadowing

> jachoi

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>

### 3.2 　  Function Name Scope 

```
var a = function ofTheTeacher() {
    console.log(ofTheTeacher);
};

a();

console.log(ofTheTeacher);
```
1. 위 `ofTheTeacher`가 있는 scope에 대해 서술하시오.
2. 에러가 나는 곳을 찾고, 이유를 서술하시오.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
1.ofTheTeacher is declared as an identifier **inside the function itself**
2.**console.log(ofTheTeacher)** 1번과 같은 이유.
</div>
</details>
<br>

### 3.3 　  Arrow Functions

> holee

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">

</div>
</details>
<br>
