import "./Activity.css";
import React from "react";
import { Link } from "react-router-dom";

function Activity({ user }) {
	return (
		<div className="Activity">
			<div className="content">
				<div className="topPart">
					<h1>Activity Feed</h1>
					<div className="addButtons">
						{Object.keys(user).length === 0 ? (
							<></>
						) : (
							<Link to="/add-sleep-data">
								<button className="addSleep">Add Sleep</button>
							</Link>
						)}
					</div>
				</div>
				<div className="activityFeedInfo">
					<div className="avgSleepHours">
						<h3>Average Sleep Hours</h3>
						<h1 className="avgSleepNumber">12.00</h1>
					</div>
				</div>
				<div className="bottomContent">
					<h2>More Stats</h2>
				</div>
				<div className="statsContent">
					<div className="statsContentInfo">
						<h3>Total Hour Slept</h3>
						<div className="statsNumber">0</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Activity;
