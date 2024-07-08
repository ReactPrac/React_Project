import logo from './logo.svg';
import './App.css';

function App() {
	let post = '리액트 기본 문법';

	return (
		<div className="App">
			<div className="black-nav">
				<h4 style={{ color: 'yellow', fontSize: '18px' }}>블로그</h4>
			</div>
			<h4>{post}</h4>
		</div>
	);
}

export default App;
