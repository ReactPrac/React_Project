import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	// let post = '리액트 기본 문법';
	let [title, titleEdit] = useState([
		'리액트 데이터바인딩',
		'리액트 기초',
		'집에 가고싶다',
	]);
	let [like, likeEdit] = useState(0);

	return (
		<div className="App">
			<div className="black-nav">
				<h4 style={{ fontSize: '18px' }}>ReactBlog</h4>
			</div>
			<button
				onClick={() => {
					let copy = [...title];
					copy.sort();
					titleEdit(copy);
				}}
			>
				가나다순 정렬
			</button>
			{/* <div className="list">
				<h4>글 제목</h4>
				<p>7월 9일 발행</p>
			</div> */}
			<div className="list">
				<h4>{title[0]}</h4>
				<p>7월 9일 발행</p>
			</div>
			{/* <div className="list">
				<h4>{post}</h4>
				<p>7월 9일 발행</p>
			</div> */}
			<div className="list">
				<h4>{title[1]}</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>
					{title[2]}
					<span
						className="btn"
						onClick={() => {
							likeEdit(like + 1);
						}}
					>
						❤️
					</span>
					{like}
				</h4>
				<p>
					7월 9일 발행
					<span
						className="btn"
						onClick={() => {
							let copy = [...title];
							copy[2] = '학원가야지';
							titleEdit(copy);
						}}
					>
						✏️
					</span>
				</p>
			</div>
		</div>
	);
}

export default App;
