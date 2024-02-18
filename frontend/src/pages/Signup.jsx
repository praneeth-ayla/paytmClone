import React, { useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

function Signup() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="flex justify-center h-screen bg-slate-300">
			<div className="flex flex-col justify-center">
				<div className="p-2 px-4 text-center bg-white rounded-lg w-80 h-max">
					<Heading label={"Sign Up"}></Heading>
					<SubHeading
						label={
							"Enter your information to create an account"
						}></SubHeading>
					<InputBox
						label={"Firstname"}
						placeholder={"Jhon"}
						type={"text"}
						onChange={(e) => {
							setFirstname(e.target.value);
						}}></InputBox>
					<InputBox
						label={"Lastname"}
						placeholder={"Doe"}
						type={"text"}
						onChange={(e) => {
							setLastname(e.target.value);
						}}></InputBox>
					<InputBox
						label={"Username"}
						placeholder={"jhondoe@gmail.com"}
						type={"email"}
						onChange={(e) => {
							setUsername(e.target.value);
						}}></InputBox>
					<InputBox
						label={"Password"}
						placeholder={"123456"}
						type={"password"}
						onChange={(e) => {
							setPassword(e.target.value);
						}}></InputBox>
					<Button
						onClick={async () => {
							const response = await axios.post(
								"http://localhost:3000/api/v1/user/signup",
								{
									firstname,
									lastname,
									username,
									password,
								}
							);
							localStorage.setItem("token", response.data.token);
						}}
						label={"Sign Up"}></Button>
					<BottomWarning
						label={"Already have an account?"}
						buttonText={"Sign In"}
						to={"/signin"}></BottomWarning>
				</div>
			</div>
		</div>
	);
}

export default Signup;
