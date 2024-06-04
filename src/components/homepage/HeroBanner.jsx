import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import '../../styles/heroBanner.css'

function HeroBanner() {
	return (
		<div className="hero-banner-main-container">
			<div className="hero-banner-container">
				<div className="hero-banner">
					<img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" />
				</div>
				<div className="hero-detials">
					<div>
						<span>
							<FaArrowTrendUp />
						</span>
						<span>85% would make this again</span>
					</div>
					<p>Mighty Super Cheesecake</p>
					<p>
						Look no further for a creamy and ultra smooth classic
						cheesecake recipe! no one can deny its simple decadence.
					</p>
					<button>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeroBanner;
