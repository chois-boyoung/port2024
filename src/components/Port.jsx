import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { portText } from '../\bcontents';

const Port = () => {

	const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
	//Ref = this 와 같은 역할, 변수
	//null = 0
	//article 값이 여러 개이기 때문에 [];


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
            },
        });

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