# 동적 UI 만들기
동적 UI 생성 3STEP
---
```
  1. html css로 미리 디자인 완성

  2. UI 현재 상태를 state로 저장

  3. state에 따라 UI가 어떻게 보일지 작성
```

<br>

JSX에서 조건문 쓰는 법
---
- 조건문은 if / else 문법 but JSX 안에서는 바로 사용 불가
- if 문법 대신 삼항연산자 사용
> 삼항연산자(ternary operator)
```javascript
  조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
```

<br>

React vs JavaScript
---
- Modal 창을 조작한다고 했을 때
> 리액트
```javascript
  버튼 누르면 모달창 스위치(state)만 건드림
```

<br>

> 자바스크립트
```javascript
  버튼 누르면 모달장 html을 직접 건드림
```

<br>
