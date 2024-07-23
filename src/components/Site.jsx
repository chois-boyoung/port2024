import React from 'react'

const siteText = [
	{
		title: "gsap parallax",
		view: "https://chois-boyoung.github.io/gsap/gsap01.html",
		code: "https://github.com/chois-boyoung/gsap",
		text: "GSAP을 이용한 PALLARAX EFFECT",
		info: [
			"script project",
			"parallax effect",
		]
	},
	{
		title: "mouse effect",
		view: "https://chois-boyoung.github.io/mouseEffect/mouse01.html",
		code: "https://github.com/chois-boyoung/mouseEffect",
		text: "jQuery를 사용하여 만든 다양한 마우스 효과 스크립트",
		info: [
			"script project",
			"mouse effect",
		]
	},
	{
		title: "youtube api site",
		view: "https://choi-youtube.netlify.app/",
		code: "https://github.com/chois-boyoung/webs-youtube",
		text: "react와 youtube api를 사용하여 만든 asmr 추천 영상 페이지",
		info: [
			"script project",
			"youtube api site",
		]
	},
]


const Site = () => {

	

    return (
		<section id="site">
			
			<div className="site__inner">
				<h2 className="site__title">script project <em>스크립트 작업물</em></h2>

				<div className="site__wrap">
					{siteText.map((site, key) => (
						<article className={`site__item s${key+1}`} key={key}>
							<span className="num">{key+1}.</span>
							<a href={site.view} target='_blank' rel= 'noopener noreferrer'>
							
								<div className="script">
									<h3 className="title">{site.title}</h3>
								</div>
							
							</a>

							<div className="text">
								<div>{site.text}</div>
							</div>

							<div className="btn">
								<a href={site.code} target='_blank' rel= 'noopener noreferrer'>code</a>
								<a href={site.view} target='_blank' rel= 'noopener noreferrer'>view</a>
							</div>

							<div className="info">
								<span>{site.info[0]}</span>
								<span>{site.info[1]}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
    )
}

export default Site