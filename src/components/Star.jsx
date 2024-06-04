import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

function Star({ rate }) {
	return (
		<div className="flex"
			style={{
				color: "#ff642f",
				fontSize: "var(--fs-sm)",
				marginBlock: "10px",
			}}>
			{rate >= 1 ? (
				<FaStar />
			) : rate >= 0.5 ? (
				<FaRegStarHalfStroke />
			) : (
				<FaRegStar />
			)}
			{rate >= 2 ? (
				<FaStar />
			) : rate >= 1.5 ? (
				<FaRegStarHalfStroke />
			) : (
				<FaRegStar />
			)}
			{rate >= 3 ? (
				<FaStar />
			) : rate >= 2.5 ? (
				<FaRegStarHalfStroke />
			) : (
				<FaRegStar />
			)}
			{rate >= 4 ? (
				<FaStar />
			) : rate >= 3.5 ? (
				<FaRegStarHalfStroke />
			) : (
				<FaRegStar />
			)}
			{rate >= 5 ? (
				<FaStar />
			) : rate >= 4.5 ? (
				<FaRegStarHalfStroke />
			) : (
				<FaRegStar />
			)}
		</div>
	);
}

export default Star;
