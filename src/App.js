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

	let [titleList, setTitleList] = useState(0);

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
						<h4>
							<span
								onClick={() => {
									// setModal((e) => !e);
									setModal(true);
									setTitleList(i);
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

			{modal == true ? (
				<Modal
					color={'pink'}
					titleList={titleList}
					title={title}
					setTitle={setTitle}
				></Modal>
			) : null}
			{/* 제목 클릭시 모달창 띄우려면? => 클릭시 state 조절 */}
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

export default App;
