# 배포
리액트 사이트 build & Github Pages로 배포 
---
- 작업하던 App.js 파일 그대로가 아니라 build용 파일을 생성한 후 올려야함 
  - 웹브라우저는 HTML, CSS, JS 이 세개의 언어만 해석 가능하기 때문
  - 리액트의 state, JSX 해석 불가
- 리액트 프로젝트를 build ⇒ 브라우저 친화적인 HTML CSS JS 파일 변환(컴파일)
  - 해당 파일을 서버에 올려야 사용자들이 사이트를 볼 수 았음 

<br>

<details>
  <summary>Q. 웹서버 가지고 있다면?</summary>

<br>

> 리액트 : HTML파일을 꾸며주는 툴
``` 
  1. npm run build ⇒ build/index.html 파일 생성
  
  2. 서버 API 작성
    - 누군가 메인페이지로 접속하면 /build/index.html 파일 전송
```


</details>

<br>

배포하기 전 체크 사항
---
> 미리보기 띄워볼 때 콘솔창, 터미널에 에러 없어야함
```
  warning 메세지는 사이트 구동에 별 영향X
```

<br>

> 하위 경로에 배포시
```
  http://example.com/
    - 여기에 배포하는 경우엔 따로 설정 필요 X
  
  http://example.com/blog/
    - 이런 하위 경로에 배포하고 싶으면 프로젝트에 따로 설정 필요
    - 프로젝트 파일 중 package.json 오픈 후 homepage 항목 추가
      - 배포할 사이트 경로를 뒤에 추가
      - "homepage": "http://example.com/blog"
    - 리액트 라우터가 설치되어있다면 라우터가 제공하는 basename="" 속성 추가
```

<br>

배포
---
### 1. build(컴파일)
> 터미널
```
  npm run build
```

<br>

> 작업 프로젝트 폴더 내에 build 라는 폴더 생성
```
  작성했던 코드를 전부 .html .css .js 파일로 변환해서 담아줌
  
  ⇒ build 폴더 안에 안에 있는 내용을 모두 서버에 업로드
  
  ** index.html이 메인페이지
```

<br> 

### 2. 무료 호스팅해주는 github pages 이용
> 우측 상단 + 버튼 → New Repository

|-|
|-|
|![image](https://github.com/user-attachments/assets/fc1de7d3-fafe-4b48-9579-ba7122e68902)|

- Repository name 은 꼭 왼쪽에 뜨는 아이디.github.io 라고 입력
  - README 파일 생성도 체크한 뒤에 생성

<br> 

### 3. Repository에 html 파일 올리기 
> build 폴더 내의 파일을 전부 드래그 앤 드롭하여 업로드
```
  build 폴더가 아니라 build 폴더 안의 내용물들을 드래그 앤 드롭!
  
  실수했으면 repository 삭제하고 다시 만들면 됨 
  
  10분 정도 후에 https://깃허브아이디.github.io 라고 주소창에 입력하면 사이트 볼 수 있음
```
 
<br>
 
github pages 에러
---
- 사이트 주소로 접속했는데 404 페이지 노출
```
- 첫 업로드 후엔 보통 10~20분넘게 기다려야 반영
  - 10분 더 기다려보기

- ctrl + shift + r 을 이용해 새로고침

- repository 생성시 깃허브아이디.github.io가 아니라 잘못 적은 가능성有
  - 만약 오타가 있다면 새로 생성 
```
 
<br>
 
추가 호스팅
---
- 여러 repository를 동시에 호스팅 가능
> 다른 HTML 페이지도 호스팅받고 싶으면
```
  ** 깃허브아이디.github.io 라는 repository 삭제하면 안됨
  
  1. 새로운 프로젝트를 올릴 repository를 새로 생성
    - 이름은 아무거나해도 ok
  
  2. repository에 드래그앤드롭으로 원하는 HTML, CSS, JS 파일 업로드
  
  3. repository setting 메뉴에 들어가서 Github pages 이동
  
  4. source 부분을 None이 아니라 main으로 바꿔주고 저장
  
  5. 깃허브아이디.github.io/repository이름/ 접속시 HTML파일 볼 수 있음
    - 안보이면 깃허브아이디.github.io/repository이름/html파일명.html
```

<br>

Question
---
> 첫 페이지 로딩 속도를 빠르게 하려면
```
  리액트, 뷰로 만든 웹앱들은 첫 방문시 필요한 파일을 전부 로드
  
  전송되는 파일 사이즈를 조금이라도 줄여서 빠르게 만들고 싶으면
  컴포넌트들을 lazy하게 로딩하는 방법을 사용
  
  공식 튜토리얼에 있는 lazy 함수
  https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
```
 
<br>
 
> 업데이트 사항이 생겼을 때 재배포
```
  재 build 후 그 파일 그대로 다시 업로드
  
  build 할 때 마다 CSS, JS 파일 명이 무작위로 다시 생성
  
  ⇒ 새로 배포할 때마다 사이트 방문자들은 새로운 CSS,JS 파일 이용 
```
 
<br>
 
> build 할 때 압축 시키지말고 남기고 싶은 파일은?
```
  ./ 부터 시작하는 경로로 첨부한 이미지, js 파일들은 전부 이름이 변함
  
  이름이 변하지 않게 하고 싶으면 public 폴더안에 넣고 build
  
    → build 하고 나서도 그대로 루트경로에 파일이 남아있음
  
  개발시 그런 파일들을 이용하고 싶으면
    - public 폴더에 보관
    - ./ 이게 아닌 / 경로로 import
```
 
<br>
 
> 서버에 올렸는데 접속하면 이상한 페이지가 나오거나 일부 img, css파일이 로드 X
```
  대부분 경로 문제
  
  - build 할 때 에러 여부확인 
  
  - 혹시 하위폴더에 배포한거 아닌지 확인
  
  - 배포한 페이지가 안나오면 크롬개발자도구 오픈
    - index.html이 쓰고있는 css, js, img 파일들의 경로가 제대로 되어있는지 체크 
```
 
<br>
 
> 메인페이지가 아닌 특정 페이지로 접속하면 404 에러 발생
```
  github : 우리가 서버를 만지는게 아니고 그냥 HTML 파일 올린것만 보여주는 곳
    ⇒ 사이트 메뉴에다가 페이지 이동버튼 생성하여 연결
    ⇒ URL에 #기호가 붙는 hashRouter를 리액트 라우터 코드짤 때 사용
```

<br>
 
