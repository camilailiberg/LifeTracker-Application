import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SleepData from "../SleepData/SleepData";
import Login from "../Login/Login";
import Register from "../Register/Register";
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";

function App() {
	//need to useEffect here to get sleep data and pass it to SleepData Component
	const [user, setUser] = useState({});
	const [sleepInfo, setSleepInfo] = useState([]);

	useEffect(() => {
		const fetchSleepInfo = async () => {
			const sleepInfo = await apiClient.getSleepData();
			console.log("fetchSleepData", sleepInfo); //TODO: Delete comment
			setSleepInfo(sleepInfo);
		};

		fetchSleepInfo();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/sleep/my-sleep-data"
						element={<SleepData sleepInfo={sleepInfo} />}
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
