import React, { useState } from "react";
import "../../styles/latestRecipes.css";
import Title from "../Title";
import { foodItems } from "../../data/data";

function LatestRecipes() {
	const [count, setCount] = useState(5);
	return (
		<div className="latestRecipes-container">
			<Title title="Latest Recipes" />
			<div className="latestRecipes">
				{foodItems.slice(0, count).map((foodItem, i) => (
					<div className="latestRecipes-card" key={i}>
						<div className="latestRecipes-card-img">
							<img src={foodItem.img} alt={foodItem.name} />
						</div>
						<p>{foodItem.name}</p>
					</div>
				))}
			</div>
			<button onClick={() => setCount(count + 5)} disabled={false}>View More</button>
		</div>
	);
}

export default LatestRecipes;
