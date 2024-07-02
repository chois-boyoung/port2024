import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";

const portText = [
	{
		num:"01",
		title: "지유가오카 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port01,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/jiyugaoka/",
		name: "지유가오카 사이트",
	},
	{
		num:"02",
		title: "chois 유튜브 사이트",
		desc: "리액트를 이용한 사이트 제작",
		img: port02,
		code: "",
		view: "https://choi-youtube.netlify.app/",
		name: "chois 유튜브 사이트",
	},
	{
		num:"03",
		title: "espoir 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port03,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/espoir/",
		name: "espoir 사이트",
	},
	{
		num:"04",
		title: "남도주류 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port04,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/namdo/",
		name: "남도주류 사이트",
	},
	{
		num:"05",
		title: "지음커뮤지케이션 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port05,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/onepage/",
		name: "지음커뮤니케이션 사이트",
	},
	{
		num:"06",
		title: "설화수 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port06,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/sulwhasoo/",
		name: "설화수 사이트",
	},
	{
		num:"07",
		title: "원효로떡볶이 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port07,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/rice/",
		name: "원효로떡볶이 사이트",
	},
	{
		num:"08",
		title: "예약시스템 메인페이지",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port08,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/reserve/",
		name: "예약시스템 메인페이지",
	},
	{
		num:"09",
		title: "미카코카레 사이트",
		desc: "웹 표준을 준수한 사이트 제작",
		img: port09,
		code: "",
		view: "https://boyoung9605.cafe24.com/portfolio/curry/",
		name: "미카코카레 사이트",
	},
]

const Port = () => {

	const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        })

			return () => {
				scrollTween.kill();
			};
		}, []);

	return (
		<section id="port" ref={horizontalRef}>
			<div className="port__inner">
				<div className="port__title">
					site <em>사이트 작업물</em>
				</div>

				<div className="port__wrap">
					{portText.map((port, key) => (
						<article 
							className={`port__item p${key + 1}`} 
							key={key}
							ref={(el) => (sectionRef.current[key] = el)}
							>
							<span className="num">{port.num}</span>
							<a href={port.code} target='_blank' className="img" rel= 'noopener noreferrer'>
								<img src={port.img} alt={port.name} />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">{port.desc}</p>
							<a href={port.view} target='_blank' className="site" rel= 'noopener noreferrer'>사이트 보기</a>
						</article>
					))}

				</div>
			</div>
		</section>
	)
}

export default Port