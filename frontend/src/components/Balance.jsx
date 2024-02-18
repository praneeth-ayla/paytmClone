import React from "react";

function Balance({ value }) {
	return (
		<div className="flex ">
			<div className="text-lg font-bold">Your Balance</div>
			<div className="ml-4 text-lg font-semibold">Rs {value}</div>
		</div>
	);
}

export default Balance;
