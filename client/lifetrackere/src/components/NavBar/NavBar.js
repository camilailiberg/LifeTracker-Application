import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="navbar">
			<div class="activities">
				<Link to="/" className="menu-bars">
					Activity
				</Link>
				<Link to="/" className="menu-bars">
					Excersise
				</Link>
				<Link to="/" className="menu-bars">
					Nutrition
				</Link>
				<Link to="/sleep/my-sleep-data" className="menu-bars">
					Sleep
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
