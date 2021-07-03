import "./Header.css";
import React, { useContext, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Chip, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

const Header = () => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}
	return (
		<span onClick={() => window.scroll(0, 0)} className="header">
			🍿Bioscope
			{currentUser ? (
				<Button size="large" color="secondary" onClick={handleLogout}>
					{currentUser ? (
						<Chip
							// style={{ marginLeft: "10px" }}
							icon={<VerifiedUserIcon />}
							label={currentUser.email.slice(0, currentUser.email.indexOf("@"))}
							color="primary"
							size="large"
						/>
					) : (
						<p></p>
					)}
				</Button>
			) : (
				<Button>
					<Chip
						// style={{ marginLeft: "25px" }}
						icon={<NotInterestedIcon />}
						label="Sign In"
						color="secondary"
						size="large"
						onClick={(e) => history.push("/login")}
					/>
				</Button>
			)}
		</span>
	);
};

export default Header;
