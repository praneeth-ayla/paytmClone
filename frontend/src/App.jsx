import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/signup"
						element={<Signup></Signup>}></Route>
					<Route
						path="/signin"
						element={<Signin></Signin>}></Route>
					<Route
						path="/dashboard"
						element={<Dashboard></Dashboard>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
