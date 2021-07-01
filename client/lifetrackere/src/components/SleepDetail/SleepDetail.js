import "./SleepDetail.css";
import React from "react";

function SleepDetail() {
	return (
		<div className="SleepDetail">
			<div className="date">
				<h3>Date</h3>
			</div>
			<div className="divTime">
				<div className="startTime">
					<h3>Start Time</h3>
					<div className="time">10:30 PM</div>
				</div>
				<div className="endTime">
					<h3>End Time</h3>
					<div className="time">6:30 AM</div>
				</div>
			</div>
			<div className="totalHours">
				<p>total hours</p>
			</div>
		</div>
	);
}

export default SleepDetail;
