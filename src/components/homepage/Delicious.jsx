import React from "react";
import Title from "../Title";
import { foodItems } from "../../data/data";
import "../../styles/delicious.css";
import Star from "../Star";

function Delicious() {
	return (
		<div className="delicious-container">
			<Title title="Super Delicious" />
			<div>
				{foodItems
					.sort(() => Math.random() - 0.5)
					.slice(0, 4)
					.map((foodItem, i) => (
						<div key={i} className="food-card">
							<div className="food-card-img">
								<img src={foodItem.img} alt="" />
							</div>
							<Star rate={foodItem.rate} />
							<p className="text-fs-sm font-[600]">{foodItem.name}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default Delicious;
