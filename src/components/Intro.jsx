import React from 'react';

import about from "../assets/img/face.jpg";

const Intro = () => {
	const introText = {
		title: "port developer",
	};


	return (
		<section id="intro">
			<div className="intro__inner">
				<h1 className='intro__title'>{introText.title}</h1>

				<div className="intro__lines" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>

				<div className="intro__text">
					<div className="text">
						<div className="text__left">
							<div className="text__title">profile</div>

							<div className="text__desc">
								<div><em>이름</em>최보영</div>
								<div><em>생년월일</em>1996.05.05</div>
								<div><em>주소</em>경남 김해시</div>
								<div><em>학력</em>경남대학교 졸업</div>
							</div>
						</div>

						<div className="text__right">
							<div className="text__title">Credential</div>
							<div className="text__desc">
								<div><em>2016.</em>자동차운전면허 2종 보통</div>
								<div><em>2019.</em>유치원 정교사 2급</div>
								<div><em>2023.</em>웹디자인기능사</div>
							</div>
						</div>
					</div>

					<div className="img">
						<img src={about} alt="어바웃" />
					</div>
				</div>

				<div className="intro__lines bottom" aria-hidden="true">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
			</div>
		</section>
	)
}

export default Intro