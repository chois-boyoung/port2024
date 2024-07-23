import React from 'react';
import { footerText } from '../\bcontents';


const Footer = () => {
	return (
		<footre id="footer" role="contentinfo">
			<div className="footer__inner">
				<div className="footer__text">
					<span>chois</span>
					<span>@chois</span>
				</div>

				<div className="footer__info">
					<div className="left">
						<div className="title">
							<a href="/">view</a>
						</div>

						<p className="desc">자기소개서와 이력서를 열람할 수 있습니다.</p>
					</div>

					<div className="right">
						<h3>Resume</h3>

						<ul>
							{footerText.map((footer, key) => (
								<li key={key}>
									<a href={footer.link} rel="noopener noreferrer" target="_blank">
										{footer.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footre>
  )
}

export default Footer