import React, { useEffect, useState } from "react";
import axios from "axios";

function Balance({ value }) {
	const [balance, setBalance] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/account/balance", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((res) => {
				setBalance(res.data.balance);
			});
	}, []);

	return (
		<div className="flex ">
			<div className="text-lg font-bold">Your Balance</div>
			<div className="ml-4 text-lg font-semibold">
				Rs {balance ? balance.toFixed(2) : "Loading..."}
			</div>
		</div>
	);
}

export default Balance;
