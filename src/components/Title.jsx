import React from "react";

function Title({ title }) {
	return (
		<div style={{marginBlock:'20px'}}>
			<p
				style={{
					fontSize: "var(--fs-lg)",
					fontWeight: "600",
					fontFamily: "Times New Roman",
				}}>
				{title}
			</p>
		</div>
	);
}

export default Title;
