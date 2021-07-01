import "./SleepData.css";
import React from "react";
import SleepDetail from "../SleepDetail/SleepDetail";

function SleepData({ sleepInfo }) {
	console.log("SleepInfo", sleepInfo);

	// pass what I get from App to SleepDetail --> use map() to render multiple SleepDetail Components

	return (
		<div className="SleepData">
			<h1>Sleep</h1>
			<div className="Overview">
				<h1>Overview</h1>
				<div className="sleepDetail">
					{/* {sleepInfo.map((singleSleepInfo) => (
						<SleepDetail
							singleSleepInfo={singleSleepInfo}
							key={singleSleepInfo.id}
						/>
					))} */}
					<SleepDetail />
					<SleepDetail />
				</div>
			</div>
		</div>
	);
}

export default SleepData;
