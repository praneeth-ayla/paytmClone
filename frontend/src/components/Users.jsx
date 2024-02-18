import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";

function Users() {
	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
			.then((response) => {
				setUsers(response.data.allUsers);
			});
	}, [filter]);

	return (
		<div>
			<div className="mt-6 text-lg font-bold ">Users</div>
			<div className="my-2">
				<input
					type="text"
					placeholder="Search users..."
					className="w-full px-2 py-1 border rounded border-slate-200"
					onChange={(e) => {
						setFilter(e.target.value);
					}}
				/>
			</div>
			<div>
				{users.map((user) => (
					<User
						user={user}
						key={user._id}
					/>
				))}
			</div>
		</div>
	);
}

function User({ user }) {
	return (
		<div className="flex justify-between">
			<div className="flex">
				<div className="flex justify-center w-12 h-12 mt-1 mr-2 rounded-full bg-slate-200">
					<div className="flex flex-col justify-center h-full text-xl">
						{user.firstname[0]}
					</div>
				</div>
				<div className="flex flex-col justify-center h-full ">
					{user.firstname} {user.lastname}
				</div>
			</div>

			<Button label={"Send Money"}></Button>
		</div>
	);
}
export default Users;
