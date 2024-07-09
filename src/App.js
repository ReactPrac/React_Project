import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	let post = '리액트 기본 문법';
	let [title, b] = useState([
		'리액트 데이터바인딩',
		'리액트 연습',
		'집에 가고싶다',
	]);

	return (
		<div className="App">
			<div className="black-nav">
				<h4 style={{ fontSize: '18px' }}>ReactBlog</h4>
			</div>
			<div className="list">
				<h4>글 제목</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>{title[0]}</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>{post}</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>{title[1]}</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>{title[2]}</h4>
				<p>7월 9일 발행</p>
			</div>
		</div>
	);
}

export default App;
