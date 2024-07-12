# state
state 정의 및 사용 방법
---
> 변수 말고 state를 만들어서 데이터 저장 가능
```
  1. import { useState } from 'react';
  2. useState('보관할 자료')
  3. let [작명, 작명]
    - let [a, b] = useState('리액트 데이터바인딩');
    - a : state에 보관했던 자료 나옴
        : 저장한 자료를 나중에 쓰고 싶으면 a 자리에 state 이름을 자유롭게 작명 후 사용
    - b : state 변경용 함수 ⇒ 사용해야 html 재렌더링 잘 됨
```
- return () 안에는 병렬로 태그 2개 이상 기입 금지

<br>

> state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링
```
  1. UI 기능 개발 편리
  2. 웹페이지가 부드럽게 동작
  3. 바뀌지 않는 데이터들은 state로 굳이 저장할 필요 X
    - 상품명, 글제목, 가격 이런것 처럼 자주 변할 것 같은 데이터들을 저장
```

<br>

> 다양한 컴포넌트에서 쓰이는 state는 최상위 부모에게 만들어야함
```
  state는 부모 → 자식 전송만 가능
```

<br>

<details>
  <summary>destructuring 문법</summary>

ex. array 자료를 각각 변수에 저장하려면
---
```
  let array = ['kim', 20];
```

> 방법1
```
  let name = array[0];  // 'kim'
  let age = array[1];   // 20
```

<br>

> 방법2
```
  let [name, age] = ['Kim', 20]  // name = 'Kim',  age = 20
```
- 왼쪽 오른쪽 형식을 똑같이 맞춰주면 자동으로 알아서 변수가 생성
- 즉, array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 문법

</details>

<br>

onclick
---
- 어떤 html을 클릭시 원하는 코드 실행하는 법
> 일반 html 파일
```
  <div onclick="실행할 자바스크립트~~~">
```

<br>

> JSX
```
  <div onClick={실행할함수}>

  /*
    1. Click이 대문자
    2. {} 중괄호 사용
    3. 그냥 코드가 아니라 함수를 넣어야 동작
  */
```

<br>

> ex1
```
  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: '18px' }}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          글 제목<span onClick={함수}>❤️</span>
          {like}
        </h4>
        <p>7월 9일 발행</p>
      </div>
    </div>
  );
```

<br>

> ex2
```
  <div className="list">
    <h4>
      글 제목<span onClick={function 함수(){console.log(1)}}>❤️</span>
      {like}
    </h4>
    <p>7월 9일 발행</p>
  </div>
```

<br>

> ex3
```
  <div className="list">
    <h4>
      글 제목<span onClick={()=>{console.log(1)}}>❤️</span>
      {like}
    </h4>
    <p>7월 9일 발행</p>
  </div>
```

<br>

state 변경 방법1
---
- 등호로 변경 금지
> ex
```
  <div className="list">
    <h4>
      글 제목<span onClick={()=>{like = like + 1}>❤️</span> // 잘못된 사용방법!
      {like}
    </h4>
    <p>7월 9일 발행</p>
  </div>
```

<br>

- state 변경용 함수 사용
> ex
```
  let [like, likeEdit] = useState(0);  // likeEdit : state 변경용 함수

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: '18px' }}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          글 제목<span onClick={()=>{likeEdit(1);}}>❤️</span>
          {like}
        </h4>
        <p>7월 9일 발행</p>
      </div>
    </div>
  );
```

<br>

state 변경 방법2 - array, object
---
- 하드코딩(권장X)
> ex
```
  let [title, titleEdit] = useState([
    '리액트 데이터바인딩',
    '리액트 연습',
    '집에 가고싶다',
  ]);

  return (
    <span
      className="btn"
      onClick={() => {
        titleEdit([
          '리액트 데이터바인딩',
          '리액트 연습',
          '학원가야지',
        ]);
      }}
    >
      ✏️
    </span>
  )
```

<br>

- 원본 데이터를 직접 조작하는 것 보다는 기존값은 보존해주는 식으로 코드짜는게 좋은관습
> 독립적 카피본(shallow copy, deep copy)을 만들어 변수에 저장한 후 수정
```
  let [title, titleEdit] = useState([
    '리액트 데이터바인딩',
    '리액트 연습',
    '집에 가고싶다',
  ]);

  return (
    <span
      className="btn"
      onClick={() => {
        let copy = [...title];
        copy[2] = '학원가야지';
        titleEdit(copy);
      }}
    >
      ✏️
    </span>
  )
```

<br>

<details>
  <summary>spread operator 문법</summary>

...
---
- array나 object 자료형 왼쪽에 위치
- 괄호를 벗겨달라는 뜻(괄호 벗기기용 연산자)
  - [1,2,3] → 1,2,3
- array나 object 자료형을 복사할 때 사용
> ex
```
  let data1 = [1, 2, 3];   
  let data2 = [...data1];  //  data1에 있던 자료들을 괄호 뺀 후 다시 array 생성(새로운 array로 인식 : 화살표 변경)
  console.log(data1 === data2);  // false
```

</details>

<br>

state 변경함수 동작 원리
---
- state 변경함수를 쓸 때 기존state === 신규state 이렇게 먼저 검사함
  - 같으면 state 변경 X
```
  let [title, titleEdit] = useState([
    '리액트 데이터바인딩',
    '리액트 연습',
    '집에 가고싶다',
  ]);

  return (
    <span
      className="btn"
      onClick={() => {
        let copy = title;
        copy[2] = '학원가야지';
        console.log(title == copy);  // true(변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true)
        titleEdit(copy);
      }}
    >
      ✏️
    </span>
  )
```

> Q. copy라는 변수랑 기존 state랑 안에 있는 자료가 다른데 왜 같을까?
```
  기존 state는 '집에 가고싶다', copy에는 '학원가야지'이 들어있지만
  
  기존state === copy 결과는 true

  ⇒ javascript reference data type 문제! array/object 동작원리로 이해해보자
```

<br>

array/object 동작원리 
---
|-|
|-|
|![image](https://github.com/silverywaves/React_Project/assets/155939946/f889271b-bffc-494c-8e74-37975056269d)|
1. 자바스크립트는 array/object 자료를 하나 만들면 자료는 램에, 변수엔 위치 저장
> ex
```
  let arr = [1,2,3]
  
  [1,2,3] 자료는 램이라는 가상공간에 저장
  
  let arr 변수엔 그 자료가 어디있는지 가리키는 화살표(위치) 저장
```

<br>

2. array/object 를 복사하면 위차가 복사
> ex
```
  let data1 = [1,2,3];
  let data2 = data1;   // 복사문법(data1에 있던 자료를 data2에 복사)
  console.log(data2);  // [1,2,3] 
```
> but
```
  data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라 똑같은 값을 공유
    ⇒ data1을 변경하면 data2도 자동으로 변경
  
  왜냐면 변수에는 화살표만 저장되기 때문에 결국 화살표를 복사한 것!!
  
  그래서 data1, data2는 똑같은 화살표를 가지게 되므로 같은 자료를 가리킴 
```

<br>

3. 같은 화살표를 가지고 있는 변수끼리는 등호로 비교해도 똑같음
> ex
```
  let data1 = [1,2,3];
  let data2 = data1;  // 복사
  data2[0] = 1000;    // data2 내부 변경
  console.log(data2 === data1)   //true
```

<br>

---

### 참고 : eslint
> 터미널 / 브라우저 콘솔창에 warning이 뜨는 이유
```
  빨간색 error는 해결 필수
  노란색 warning 메세지 등장시 무시 가능
    : eslint라는 기능이 잘못된 코딩관습 교정해주는 것
```

<br>

> 기능 잠시 off 하기
```
  /*eslint-disable*/    js 파일 최상단에 추가
```

<br>
