import "./SleepData.css";
import React from "react";
import SleepDetail from "../SleepDetail/SleepDetail";
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";

function SleepData({ user }) {
	const [sleepInfo, setSleepInfo] = useState([]);
	const [error, setError] = useState(null);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		if (Object.keys(user).length !== 0) {
			const fetchSleepInfo = async () => {
				setIsFetching(true);

				const sleepInfo = await apiClient.getSleepData();

				if (sleepInfo) setSleepInfo(sleepInfo.data.sleepDataForUser);
				if (error) setError(error);

				setIsFetching(false);
			};

			fetchSleepInfo();
		}
		// }, [user]);
	}, [user, error]);

	// pass what I get from App to SleepDetail --> use map() to render multiple SleepDetail Components

	return (
		<div className="SleepData">
			<h1>Sleep</h1>
			<div className="Overview">
				<h1>Overview</h1>
				<div className="sleepDetail">
					{Object.keys(user).length !== 0 ? (
						sleepInfo.map((singleSleepInfo) => (
							<SleepDetail
								singleSleepInfo={singleSleepInfo}
								key={singleSleepInfo.id}
							/>
						))
					) : (
						<h1> You need to be logged in </h1>
					)}
					{/* <SleepDetail />
					<SleepDetail /> */}
				</div>
			</div>
		</div>
	);
}

export default SleepData;
