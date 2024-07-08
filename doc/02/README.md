# JSX
- App.js에 짜고 있는건 html이 아니라 JSX이라는 언어
  - .js 파일에서 쓰는 html 대용품
- 간단한 사용법

> react에서 \<div> 만드는 법(기존)
```
  React.createElement('div', null)
```

<br>

> react에서 \<div> 만드는 법(JSX 사용)
```
  <div></div>
```

<br>

JSX 문법
---
### 1. class 넣을 때 ⇒ className

<br>

### 2. css 파일 적용하려면 상단에 import 추가
```
  import 'css파일 경로'
```

<br>

### 3. 변수 넣을 땐 {중괄호} = 데이터바인딩
> 기존 js 문법
```
  document.querySelector('h4').innerHTML = post;
```

<br>

> jsx 문법
```
  {post}
```

<br>

### 4. style 넣을 땐 style={{스타일명:'값', 스타일명:'값', ...}}

<br>

> 참고
```
   에러메시지는 터미널/브라우저에서 확인 (or 개발자도구)
```

<br>
