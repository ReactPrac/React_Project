# class 컴포넌트
class 컴포넌트
---
- 예전 리액트에서 사용하던 방식
  - 지금은 function 권장 
> class 문법으로 컴포넌트 만드는 법 
```javascript
  class Modal2 extends React.Component {
  	// constructor, super, render 채워넣어야함
  	constructor() {
  		super();
  	}
  
  	render() {
  		return <div>안녕</div>;
  	}
  }
```

<br>

class 컴포넌트 - state 생성
---
```javascript
  class Modal2 extends React.Component {
  	// constructor, super, render 채워넣어야함
  	constructor() {
  		super();
      this.state = {
        name : 'kim',
        age : 20
      }
  	}
  
  	render() {
  		return <div>안녕 {this.state.name}</div>;
  	}
  }
```

<br>

class 컴포넌트 - state 변경
---
```javascript
  class Modal2 extends React.Component {
  	constructor() {
  		super();
      this.state = {
        name : 'kim',
        age : 20
      }
  	}
  
  	render() {
  		return (
        <div>안녕 {this.state.age}
          <button onClick={()=>{
            this.setState({age : 21})
          }}>버튼</button>
        </div>;
      )
  	}
  }
```

<br>

class 컴포넌트 - props
---
```javascript
  class Modal2 extends React.Component {
  	constructor(props) {
  		super(props);
      this.state = {
        name : 'kim',
        age : 20
      }
  	}
  
  	render() {
  		return (
        <div>안녕 {this.props}
          <button onClick={()=>{
            this.setState({age : 21})
          }}>버튼</button>
        </div>;
      )
  	}
  }
```

<br>

