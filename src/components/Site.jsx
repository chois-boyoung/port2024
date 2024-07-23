import React from 'react';

import { siteText } from '../\bcontents';


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