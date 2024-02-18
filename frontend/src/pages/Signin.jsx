import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	return (
		<div className="flex justify-center h-screen bg-slate-300">
			<div className="flex flex-col justify-center">
				<div className="p-2 px-4 text-center bg-white rounded-lg w-80 h-max">
					<Heading label={"Sign In"}></Heading>
					<SubHeading
						label={
							"Enter your credentials to access your account"
						}></SubHeading>
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
								"http://localhost:3000/api/v1/user/signin",
								{
									username,
									password,
								}
							);
							localStorage.setItem("token", response.data.token);
							navigate("/dashboard");
						}}
						label={"Sign In"}></Button>
					<BottomWarning
						label={"Don't have an account?"}
						buttonText={"Sign Up"}
						to={"/signup"}></BottomWarning>
				</div>
			</div>
		</div>
	);
}

export default Signin;
