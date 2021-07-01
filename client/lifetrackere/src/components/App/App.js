import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SleepData from "../SleepData/SleepData";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";

function App() {
	//need to useEffect here to get sleep data and pass it to SleepData Component
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const { data, error } = await apiClient.fetchUserFromToken();
			if (data) setUser(data.user);
			if (error) setError(error);
		};

		const token = localStorage.getItem("lifetracker_token");
		if (token) {
			apiClient.setToken(token);
			fetchUser();
		}
	});

	const handleLogout = async () => {
		await apiClient.logoutUser();
		setUser({});
		setError(null);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar user={user} handleLogout={handleLogout} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/sleep/my-sleep-data"
						element={<SleepData user={user} />}
					/>
					<Route
						path="/login"
						element={<Login user={user} setUser={setUser} />}
					/>
					<Route
						path="/create-new-account"
						element={<Register user={user} setUser={setUser} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
