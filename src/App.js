import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	// let post = '리액트 기본 문법';
	let [title, setTitle] = useState([
		'리액트 데이터바인딩',
		'리액트 기초',
		'집에 가고싶다',
	]);
	let [like, setLike] = useState([0, 0, 0]);
	let [modal, setModal] = useState(false); // state 형식은 자유(모달창상태 표현만 가능하면 ok)

	[1, 2, 3].map(function (a) {
		return '1233211';
	});

	return (
		<div className="App">
			<div className="black-nav">
				<h4 style={{ fontSize: '18px' }}>ReactBlog</h4>
			</div>
			<button
				onClick={() => {
					let copy = [...title];
					copy.sort();
					setTitle(copy);
				}}
			>
				가나다순 정렬
			</button>
			{/* <div className="list">
				<h4>{title[0]}</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>{title[1]}</h4>
				<p>7월 9일 발행</p>
			</div>
			<div className="list">
				<h4>
					<span
						onClick={() => {
							// setModal((e) => !e);
							setModal(!modal);
						}}
					>
						{title[2]}
					</span>
					<span
						className="btn"
						onClick={() => {
							setLike(like + 1);
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
							setTitle(copy);
						}}
					>
						✏️
					</span>
				</p>
			</div> */}

			{title.map(function (a, i) {
				// title.map() : title이라는 state도 array 자료라 map 사용 가능 => 실제 글갯수만큼 html 생성
				// 파라미터 a : array 안에 있던 데이터
				// 파라미터 i : 반복문 돌 때마다 0부터 1씩 증가하는 정수
				return (
					<div className="list">
						{/* <h4>{a}</h4> */}
						<h4>
							<span
								onClick={() => {
									// setModal((e) => !e);
									setModal(!modal);
								}}
							>
								{title[i]}
							</span>
							<span
								className="btn"
								onClick={() => {
									let copy = [...like];
									copy[i] = copy[i] + 1;
									setLike(copy);
								}}
							>
								❤️
							</span>
							{like[i]}
						</h4>
						<p>7월 9일 발행</p>
					</div>
				);
			})}

			{modal == true ? <Modal></Modal> : null}
			{/* 제목 클릭시 모달창 띄우려면? => 클릭시 state 조절 */}
		</div>
	);
}

function Modal() {
	// 다른 function 바깥에 생성 & 영어대문자
	return (
		// return ( ) 내부는 하나의 태그로 시작해서 하나의 태그로 끝내기
		<div className="modal">
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
