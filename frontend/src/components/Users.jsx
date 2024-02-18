import React, { useState } from "react";
import Button from "./Button";

function Users() {
	const [users, setUsers] = useState([
		{ firstName: "Harkirat", lastName: "Singh", _id: 1 },
		{ firstName: "news", lastName: "trial", _id: 2 },
		{ firstName: "Praneeth", lastName: "ayla", _id: 3 },
	]);

	return (
		<>
			<div className="mt-6 text-lg font-bold ">Users</div>
			<div className="my-2">
				<input
					type="text"
					placeholder="Search users..."
					className="w-full px-2 py-1 border rounded border-slate-200"
				/>
			</div>
			<div>
				{users.map((user) => (
					<User user={user} />
				))}
			</div>
		</>
	);
}

function User({ user }) {
	return (
		<div className="flex justify-between">
			<div className="flex">
				<div className="flex justify-center w-12 h-12 mt-1 mr-2 rounded-full bg-slate-200">
					<div className="flex flex-col justify-center h-full text-xl">
						{user.firstName[0]}
					</div>
				</div>
				<div className="flex flex-col justify-center h-full ">
					{user.firstName} {user.lastName}
				</div>
			</div>

			<Button label={"Send Money"}></Button>
		</div>
	);
}
export default Users;
