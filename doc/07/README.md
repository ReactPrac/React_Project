# Props
props
---
- 자식 컴포넌트가 부모 컴포넌트에 있던 state를 사용하려면 props로 전송해서 사용
- 자바스크립트에서는 다른 함수에 있는 변수를 가져다쓸 수 없음
  - 컴포넌트 2개가 부모/자식 관계인 경우는 가능
    - 부모 컴포넌트의 state를 자식 컴포넌트로 전송 가능(props)
    - 자식도 사용 가능
- 함수 파라미터 문법과 똑같음
  - 파라미터 문법 : 함수 하나로 다양한 기능을 사용하기 위해서 사용

|-|-|
|-|-|
|![image](https://github.com/user-attachments/assets/90a6f06d-6476-4613-98e1-0c99386e9de1)|![image](https://github.com/user-attachments/assets/6d06f871-9341-41d1-a7ba-54013a945081)|

<br>

props로 부모 → 자식 state 전송
---
> props 2Step
```
  1. 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명={state이름} /> 
  
  2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용
```

<br>

> 참고
```
  1. props는 <Modal 이런거={이런거}  저런거={저런거}> 이렇게 10개 100개 1000개 무한히 전송 가능
  
  2. 꼭 state만 전송할 수 있는건 아님
    <Modal 글제목={변수명}> 일반 변수, 함수 전송도 가능
    <Modal 글제목="강남우동맛집"> 일반 문자전송은 중괄호 없이 작성 가능
```

<br>

> 전송 방향 주의

|자식 → 부모 전송 불가|옆 컴포넌트 전송 불가|
|-|-|
|![image](https://github.com/user-attachments/assets/bc35fcaf-efde-4a15-91e3-170ca74f293e)|![image](https://github.com/user-attachments/assets/2241aeda-d8fa-4adc-8a9f-75e42c1f34ab)|

<br>



