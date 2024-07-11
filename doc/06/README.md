# Map
map
---
- 많은 div들을 반복문으로 줄일 때 사용
- for 반복문은 JSX 중괄호 안에서 사용할 수 없어서 map()을 대신 사용
- 비슷한 html 여러개 필요하면 map() 안에 담으면 됨

<br>

자바스크립트 map 함수
---
> 기능1 : array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행
```
  var arr = [2,3,4];  // 모든 array 자료 우측엔 map() 함수를 붙일 수 있d음
  arr.map(function(){
    console.log(1)    // 결과 : console.log(1) 3번 실행
  });
```

<br>

> 기능2 : 콜백함수에 파라미터 작명시 그 파라미터는 array 안에 있던 모든 자료를 하나씩 출력
```
  var arr = [2,3,4];
  arr.map(function(a){    // 콜백함수 : 소괄호안에 있는 함수
    console.log(a)        // 결과 : 2, 3, 4
  });
```

<br>

> 기능3 : return 오른쪽 값을 array로 담아줌
```
  var arr = [2,3,4];
  var newArray = arr.map(function(a){
    return a * 10
  });
  console.log(newArray)    // 결과 : [20, 30, 40]
```

<br>

JSX 안에서 html을 반복생성하기 위한 map
---
> 예제코드
```
  function App (){
    return (
      <div>
        { 
          [1,2,3].map(function(){    // map 쓰고나면 그 자리에 [] 남음
            // 현재 상태 : [ <div>안녕</div>, <div>안녕</div>, <div>안녕</div> ]
            // 리액트는 array안에 html 담아놔도 잘 보여줌
            return ( <div>안녕</div> )  // 결과 : <div>안녕</div> 3개 출력
          }) 
        }
      </div>
    )
  }
```

<br>

> 결과
```
  안녕
  안녕
  안녕
```

<br>

> 작동 원리
```
  [1, 2, 3] 에다가 map을 붙였으니 그 안의 자료 갯수만큼 map 내부 코드를 실행
  map 내부에 return <div>안녕</div> 작성되어있는 상태
    ⇒ <div>안녕</div> 이걸 array에 3번 담아줌
    ⇒ 결과 : [ <div>안녕</div>, <div>안녕</div>, <div>안녕</div> ]
```

<br>

> 반복된 html에 각각 다른 내용 출력
```
  {title.map(function (a, i) {
    // title.map() : title이라는 state도 array 자료라 map 사용 가능 => 실제 글갯수만큼 html 생성
    // 파라미터 a : array 안에 있던 데이터
    // 파라미터 i : 반복문 돌 때마다 0부터 1씩 증가하는 정수
    return (
      <div className="list">
        {/* <h4>{a}</h4> */}
        <h4>{title[i]}</h4>
        <p>7월 9일 발행</p>
      </div>
    );
  })}
```

<br>
