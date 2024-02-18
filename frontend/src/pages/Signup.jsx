import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

function Signup() {
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
						label={"FirstName"}
						placeholder={"Jhon"}
						type={"text"}></InputBox>
					<InputBox
						label={"LastName"}
						placeholder={"Doe"}
						type={"text"}></InputBox>
					<InputBox
						label={"Username"}
						placeholder={"jhondoe@gmail.com"}
						type={"email"}></InputBox>
					<InputBox
						label={"Password"}
						placeholder={"123456"}
						type={"password"}></InputBox>
					<Button label={"Sign Up"}></Button>
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
