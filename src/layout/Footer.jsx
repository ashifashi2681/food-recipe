import React from "react";
import { footerData } from "../data/data";
import { NavLink } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import '../styles/footer.css'



function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-row1">
				<div className="footer-left">
					<div className="footer-logo">
						<img src="./images/logo.png" alt="logo" />
					</div>
					<div className="footer-text">
						<p>
							"On the other hand, we denounce with righteous
							indignation and dislike men who are so beguiled and
							demoralized by the charms of pleasure of the moment"
						</p>
					</div>
				</div>

				<div className="footer-right">
					{footerData.map((footerItem, i) => (
						<div className="footer-item-section" key={i}>
							<span className="footer-item-title">
								{footerItem.title}
							</span>
							<ul>
								{footerItem.links.map((link, i) => (
									<li key={i}>
										<NavLink to={link.link}>
											{link.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="footer-row2">
				<p>Copyright © 2022. All rights reserved.</p>
				<div className="social-icons">
					<span>
						<FiFacebook />
					</span>
					<span>
						<FaXTwitter />
					</span>
					<span>
						<FaInstagram />
					</span>
					<span>
						<FiYoutube />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
