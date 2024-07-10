# Component
html vs component
---
> html
```
  <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
```

<br>

> Component
```
  <div>
    <Modal></Modal>
  </div>
```

<br>

Component
---
- 복잡한 html을 한 단어로 치환 가능(축약한 HTML 덩어리)

<br>

> 사용방법
```
  1. function을 이용해서 함수를 하나 만들어주고 작명
  
  2. 그 함수 내 return () 안에 축약을 원하는 HTML 작성
  
  3. 원하는 곳에서 <함수명></함수명> 사용하면 2번에서 축약한 HTML 등장
```

<br>

> 주의
```
  1. component 작명할 땐 영어대문자로 작명
  
  2. return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없음
  
  3. function App(){} 내부에서 생성 불가
    ⇒ function App(){} 도 컴포넌트 생성문법
    ⇒ component 안에 component 생성 X
  
  4. <컴포넌트></컴포넌트> or <컴포넌트/> 
```

<br>

> arrow function 가능
```
  function Modal(){
    return ( <div></div> )
  }
  
  let Modal = () => {
    return ( <div></div>) 
  }
```

<br>

> 어떤 HTML들을 Component 만드는게 좋을까?
```
  - 사이트에 반복해서 출현하는 HTML 덩어리들을 Component로 생성
  
  - 내용이 매우 자주 변경될 것 같은 HTML 부분을 잘라서 Component로 생성
  
  - 다른 페이지를 만들고 싶다면 그 페이지의 HTML 내용을 하나의 Component로 생성
  
  - 다른 팀원과 협업할 때 웹페이지를 Component 단위로 나눠서 작업을 분배
  
    ⇒ 컴포넌트는 함수 문법이랑 똑같아서 용도도 똑같음
      - 긴 코드 축약할 때
      - 다른 곳에서 코드 재사용할 때
      - 복잡한 코드를 작은 기능으로 나눌 때
```

<br>

> 단점
```
  HTML 깔끔하게 쓰려고 Component를 과도하게 만들면 관리가 힘들어짐
  
  <ex>
  function Modal 안에서 글제목 state를 쓰고싶어서 {글제목} 이렇게 쓰면 X
    - 자바스크립트에선 한 function 안에 있는 변수를 다른 function에서 맘대로 쓸 수 없음
    - props라는 문법을 이용해 state를 <Modal>까지 전해줘야 비로소 사용 가능
  
  ⇒ 꼭 필요한 곳만 Component 사용!
```

<br>
