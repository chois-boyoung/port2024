import React from 'react'

import thumb01 from "../assets/img/face.jpg";

const Site = () => {

	const siteText = [
		{
			title: "parallax effect",
			view: "https://choi-youtube.netlify.app/",
			info: [
				"script project",
				"parallax effect",
			]
		},
		{
			title: "mouse effect",
			view: "https://choi-youtube.netlify.app/",
			info: [
				"script project",
				"mouse effect",
			]
		},
		{
			title: "gsap scroll effect",
			view: "https://choi-youtube.netlify.app/",
			info: [
				"script project",
				"gsap scroll effect",
			]
		},
	]


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
									<div className="img">
										<img src={thumb01} alt="" />
									</div>

									<h3 className="title">{site.title}</h3>
								</div>
							
							</a>

							<div className="text">
								
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