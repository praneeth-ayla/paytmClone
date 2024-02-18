import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";

function Signin() {
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
						type={"email"}></InputBox>
					<InputBox
						label={"Password"}
						placeholder={"123456"}
						type={"password"}></InputBox>
					<Button label={"Sign In"}></Button>
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
