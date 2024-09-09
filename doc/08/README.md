# input
input
---
> 리액트에서는 닫는 태그 필수
```javascript
  <input></input>
  <input />
```

<br>

<details>
  <summary>인풋박스 종류</summary>

<br>

> html과 동일
```javascript
  <input type="text"/>
  <input type="range"/>
  <input type="date"/>
  <input type="number"/>
  <textarea></textarea>
  <select></select>
```

<br>

</details>

<br>

\<input> 입력시 코드 실행
---
> 이벤트핸들러 부착(onChange or onInput)
```javascript
  <input onChange={()=>{ 실행할코드 }}/>
  <input onInput={()=>{ 실행할코드 }}/> 
```

<br>

\<input>에 입력한 값 가져오기
---
> 파라미터 추가 후 target.value
```javascript
  <input onChange={(e)=>{ console.log(e.target.value) }}/>
```

<br>

> 작동원리
```javascript
1. 이벤트핸들러에 들어가는 함수에 파라미터(e)를 추가

2. e는 이벤트 객체 호출
  - 현재 발생하는 이벤트와 관련한 유용한 기능들을 제공하는 일종의 변수
```

> 명령어
```javascript
  e.target : 현재 이벤트가 발생한 곳 알려줌
  
  e.preventDefault() : 이벤트 기본 동작을 막아줌
  
  e.stopPropagation() : 이벤트 버블링도 막아줌
    - 좋아요버튼 누를 때 모달창도 떠버리는 버그 해결가능
```

<br>

사용자가 input에 입력한 데이터 저장
---
> state 아니면 변수에 저장해서 사용
```javascript
  function App (){
  
    let [입력값, 입력값변경] = useState('');  // state에 문자를 저장하고 싶은데 기본값을 뭘 넣을지 모르겠으면 따옴표 2개(=빈문자)
    return (
      <input onChange={(e)=>{ 
        입력값변경(e.target.value) 
        console.log(입력값)
      }} />
    )
  }
```

<br>

> 코드 실행시 a 입력하면 콘솔창에 아무것도 안뜨는데, aa 입력시 a만 콘솔창에 출력되는 이유
```javascript
  1. state 변경함수 특징(state 변경함수는 약간 늦게 처리됨)
    = async하게 (비동기적으로) 처리

  2. 자바스크립트에선 늦게 처리되는 코드들은 잠깐 제쳐두고 바로 다음줄 실행

  3. console.log(입력값) 먼저 실행

  ⇒ 실행 순서만 다를 뿐 state 변경은 문제 X 
```

<br>
