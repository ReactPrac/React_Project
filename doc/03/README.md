# state
> 변수 말고 state를 만들어서 데이터 저장 가능
```
  1. import { useState } from 'react';
  2. useState('보관할 자료')
  3. let [작명, 작명]
    - let [a, b] = useState('리액트 데이터바인딩');
    - a : state에 보관했던 자료 나옴
        : 저장한 자료를 나중에 쓰고 싶으면 a 자리에 state 이름을 자유롭게 작명 후 사용
    - b : state 변경 도와주는 함수
```
- return () 안에는 병렬로 태그 2개 이상 기입 금지

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

> state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링
```
  1. UI 기능 개발 편리
  2. 웹페이지가 부드럽게 동작
  3. 바뀌지 않는 데이터들은 state로 굳이 저장할 필요 X
    - 상품명, 글제목, 가격 이런것 처럼 자주 변할 것 같은 데이터들을 저장
```

<br>
