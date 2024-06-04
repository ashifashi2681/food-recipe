import React from "react";
import Star from "../Star";
import Title from "../Title";
import { foodItems } from "../../data/data";

function SweetTooth() {
	return (
		<div className="delicious-container">
			<Title title="Sweet Tooth" />
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
							<p className="text-fs-sm font-[600]">
								{foodItem.name}
							</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default SweetTooth;
