# 리액트 React 설치와 개발환경 셋팅
개발환경 셋팅
---
### 1. [Node.js 홈페이지 접속](https://nodejs.org/en) 후 LTS라고 써있는 버전 설치
|-|
|-|
|![image](https://github.com/silverywaves/React_Project/assets/155939946/7ff886f6-cfeb-4714-9cca-d94288af80e1)|

<br>

### 2. [Visual Studio Code 에디터 설치](https://code.visualstudio.com/download)
|-|
|-|
|![image](https://github.com/silverywaves/React_Project/assets/155939946/29a1909d-d1cb-4f1e-91d1-09f2e4cf17eb)|

<br>

리액트 프로젝트 생성
---
### 1. 작업용 폴더 생성
|-|
|-|
|![image](https://github.com/silverywaves/React_Project/assets/155939946/fe6dc428-972c-4a8f-b221-330d9efeb4c8)|

<br>

### 2. 폴더에 shift + 우클릭 → powershell 열기
|-|
|-|
|![image](https://github.com/silverywaves/React_Project/assets/155939946/7ddfefa7-11a0-4476-a7c1-911cb9c9c4e2)|

<br>

### 3. 프로젝트 생성 명령어 입력
> 터미널 창
```
  npx create-react-app 프로젝트명
```

<br>

> Vite 로 리액트 셋팅 가능
```
  npm create vite@latest
```

- 설치 후에 프로젝트 폴더 오픈해서 터미널에서 npm install
- 미리보기 시작 명령어는 npm run dev

<br>

<details>
  <summary>Error</summary>

허가되지 않은 스크립트 입니다
---
> 윈도우 하단 검색메뉴에서 Powershell 검색 - 우클릭 - 관리자 권한으로 실행
```
  Set-ExecutionPolicy Unrestricted
```

<br>

npx command not found ~
---
```
- 터미널 재시작

- nodejs 재설치 및 버전 확인

- 설치 경로 바꾸지 않기(C 드라이브)
```

<br>

The engine "node" is incompatible with this module 
---
> nodejs 버전이 낮거나 너무 높다는 뜻
```
  nodejs를 요구하는 버전으로 재설치
```

<br>

</details>

<br>

### 4. App.js가 메인페이지
|-|
|-|
|![image](https://github.com/silverywaves/React_Project/assets/155939946/528feb5a-5e61-4e0d-a9e9-cbfb47713342)|
- node_modules 폴더 : 라이브러리 코드 보관함
- public 폴더 : static 파일 모아놓는 곳
- src 폴더 : 코드 짜는 곳(source 코드 보관함)
- package.json : 프로젝트 정보

<br>

### 5. 내 사이트를 브라우저로 미리보기
> (에디터 상단메뉴)Terminal - New Terminal
```
  npm start
```

- 브라우저 자동으로 안뜨면 localhost:3000 이라고 크롬 브라우저 열고 직접 입력

<br>
