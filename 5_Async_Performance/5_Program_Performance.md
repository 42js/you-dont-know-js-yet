# Program Performance

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

### 5.1 　 Web Workers

> nkang
> 

#### 다음 설명 중 옳지 않은 것은?

1. SIMD(Single instruction, multiple data)는 "data parallelism"의 형태로 ES6에서 사용가능해졌다.
2. dedicated Wokers는 그들을 실행시킨 프로그램이 종료되면 함께 종료된다.
3. Shared Workers는 호출하는 프로그램들을 구분하여 통신하기 위해 `port` 객체를 반드시 사용해야 한다.
4. Shared Workers를 사용하는 것은 중복된 dedicated Workers 사용으로 인한 자원 낭비를 감소시키기 위한 것이다.
5. Web Workers는 브라우저 자체의 기능으로 자바스크립트와는 거의 관계가 없다.

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
  
1. ES7에서 사용 가능
2. Shared Workers survive the termination of a port connection if other port connections are still alive, whereas **dedicated Workers are terminated whenever the connection to their initiating program is terminated**.
3. Because a shared Worker can be connected to or from more than one program instance or page on your site, the Worker needs a way to know which program a message comes from. This unique identification is called a "port" -- think network socket ports. So the calling program must use the `**port` object of the Worker for communication:**
```
    `w1.port.addEventListener( "message", handleMessages );

    // ..

    w1.port.postMessage( "something cool" );`
```
4. If your site or app allows for loading multiple tabs of the same page (a common feature), you may very well want to reduce the resource usage of their system by preventing duplicate dedicated Workers; the most common limited resource in this respect is a **socket network connection**, as browsers **limit the number of simultaneous connections to a single host**.

5. All these are great questions to consider as we explore a feature added to the web platform circa HTML5 called "Web Workers." **This is a feature of the browser (aka host environment) and actually has almost nothing to do with the JS language itself.** That is, **JavaScript does not *currently* have any features that support threaded execution.**

</div>
</details>
<br>

#### 이벤트 구조를 사용하는 쓰레드 사이의 양방향 Data Transfer 방식이 아닌 것은?

1. Structured Cloning Algorithm
2. Transferable Objects
3. Serializing all data to a string value

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
  
1.  "**Structured Cloning Algorithm**" ([https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/The_structured_clone_algorithm](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/The_structured_clone_algorithm)) is used to copy/duplicate the object on the other side. This algorithm is fairly sophisticated and can even handle duplicating objects with circular references. The to-string/from-string performance penalty is not paid, but we still have duplication of memory using this approach. There is support for this in IE10 and above, as well as all the other major browsers.

2. "**Transferable Objects**" ([http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast)). What happens is that the object's "ownership" is transferred, but the data itself is not moved. Once you transfer away an object to a Worker, it's empty or inaccessible in the originating location -- that eliminates the hazards of threaded programming over a shared scope. Of course, transfer of ownership can go in both directions.

3. You may notice a common characteristic of most of those uses, which is that they require a large amount of information to be transferred across the barrier between threads using the event mechanism, perhaps in both directions.

답없음
</div>
</details>
<br>

### 5.3 　 asm.js

> yujo

1. asm.js는 모든 타입을 다룰 수 있다. (O / X)
2. asm.js는 JavaScript에 기반한 공식 스펙이다. (O / X)
3. asm.js는 지속적으로 업데이트 되고 있다. (O / X)

<details>
<summary> <b> :page_facing_up: 답지 </b>  </summary>
<div markdown="1">
  
1. X / 숫자 타입만 다룰 수 있다.
2. X / asm.js는 JavaScript에 기반한 비공식 스펙이다.
3. X / 2014년을 끝으로 Depreacte 되었다.
  - [asm.js / MDN](https://developer.mozilla.org/en-US/docs/Games/Tools/asm.js?source=post_page)

</div>
</details>
<br>
