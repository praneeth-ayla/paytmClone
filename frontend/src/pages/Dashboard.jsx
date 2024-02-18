import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

function Dashboard() {
	return (
		<div>
			<AppBar></AppBar>
			<Balance value={10000}></Balance>
			<Users></Users>
		</div>
	);
}

export default Dashboard;
