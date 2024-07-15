import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
	// let post = '리액트 기본 문법';
	let [title, setTitle] = useState([
		'리액트 데이터바인딩',
		'리액트 기초',
		'집에 가고싶다',
	]);
	let [like, setLike] = useState([0, 0, 0]);
	let [modal, setModal] = useState(false); // state 형식은 자유(모달창상태 표현만 가능하면 ok)

	let [titleList, setTitleList] = useState(0);
	let [inputValue, setInputValue] = useState('');

	let [currentDate, setCurrentDate] = useState('');

	useEffect(() => {
		// 컴포넌트가 마운트될 때 현재 날짜를 설정
		let date = new Date();
		let formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;
		setCurrentDate(formattedDate);
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
			{title.map(function (a, i) {
				// title.map() : title이라는 state도 array 자료라 map 사용 가능 => 실제 글갯수만큼 html 생성
				// 파라미터 a : array 안에 있던 데이터
				// 파라미터 i : 반복문 돌 때마다 0부터 1씩 증가하는 정수
				return (
					<div className="list" key={i}>
						{/* 반복문으로 html 생성하면 key={html마다 다른숫자} 추가해야함 */}
						{/* <h4>{a}</h4> */}
						<h4
							onClick={() => {
								// setModal((e) => !e);
								setModal(true);
								setTitleList(i);
							}}
						>
							{title[i]}
							<span
								className="btn"
								onClick={(e) => {
									e.stopPropagation(); // 상위html로 퍼지는 이벤트버블링을 막고싶으면 사용
									let copy = [...like];
									copy[i] = copy[i] + 1;
									setLike(copy);
								}}
							>
								❤️
							</span>
							{like[i]}
							<span
								className="btn"
								onClick={(e) => {
									e.stopPropagation();
									let copy = [...title];
									copy.splice(i, 1); // array자료에서 x번째 데이터를 삭제하고 싶으면 array자료.splice(x, 1)
									setTitle(copy);
								}}
							>
								✖️
							</span>
						</h4>
						<p>{currentDate} 발행</p>
					</div>
				);
			})}
			<input
				value={inputValue}
				onChange={(e) => {
					// e : 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있음
					setInputValue(e.target.value);
					console.log(inputValue);
				}}
			></input>
			<button
				onClick={() => {
					if (inputValue.trim() == '') {
						alert('입력값이 없습니다');
						return;
					}
					let copy = [...title];
					copy.unshift(inputValue); // unshift(inputValue) : array자료 맨 앞에 자료추가하는 문법
					setTitle(copy);
					console.log(copy);
					setInputValue('');
					let copyLike = [...like];
					copyLike.unshift(0);
					setLike(copyLike);
				}}
			>
				추가
			</button>
			{modal == true ? (
				<Modal
					color={'pink'}
					titleList={titleList}
					title={title}
					setTitle={setTitle}
				></Modal>
			) : null}
			{/* 제목 클릭시 모달창 띄우려면? => 클릭시 state 조절 */}
			<Modal2></Modal2>
		</div>
	);
}

function Modal(props) {
	return (
		// return ( ) 내부는 하나의 태그로 시작해서 하나의 태그로 끝내기
		<div className="modal" style={{ background: props.color }}>
			<h4>{props.title[props.titleList]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button
				onClick={() => {
					let copy = [...props.title];
					copy[0] = '글수정';
					props.setTitle(copy);
				}}
			>
				✏️
			</button>
		</div>
	);
}

class Modal2 extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'kim',
			age: 20,
		};
	}

	render() {
		return (
			<div>
				안녕 {this.state.age}
				<button
					onClick={() => {
						this.setState({ age: 21 });
					}}
				>
					버튼
				</button>
			</div>
		);
	}
}

export default App;
