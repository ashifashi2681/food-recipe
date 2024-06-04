import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/inboxSection.css'

function InboxSection() {
	return (
		<div className="inbox-section-container">
			<p className="inbox-title">Deliciousness <br/> to your inbox</p>
			<p className="inbox-sub-title">
				Enjoy weekly hand picked recipes and recommendations
			</p>
			<div className="inbox-input">
				<input type="email" placeholder="Email Address" />
				<button>JOIN</button>
			</div>
			<span>
				By joining our newsletter you agree to our{" "}
				<NavLink to="/contitions">Terms and Conditions</NavLink>
			</span>
		</div>
	);
}

export default InboxSection;
