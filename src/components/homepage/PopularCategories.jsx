import React from "react";
import "../../styles/popularCategories.css";
import Title from "../Title";
import { categories } from "../../data/data";
import { NavLink } from "react-router-dom";

function PopularCategories() {
	return (
		<div className="popular-categories-container">
			<Title title="Popular Categories" />
			<div className="popular-categories-container-section">
				{categories.map((category, i) => (
					<NavLink key={i} to={category.link}>
						<div className="category-card">
							<div className="category-card-img">
								<img src={category.img} alt={category.name} />
							</div>
							<p>{category.name}</p>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	);
}

export default PopularCategories;
