import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Badge } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import StarsIcon from "@material-ui/icons/Stars";
import InfoIcon from "@material-ui/icons/Info";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		display: "flex",
		justifyContent: "space-around",
		bottom: 0,
		backgroundColor: "#000000",
		zIndex: 100,
		"& .MuiBottomNavigationAction-root": {
			"@media (max-width: 768px)": {
				minWidth: "auto",
				padding: "6px 0",
			},
		},
	},
});

export default function SimpleBottomNavigation() {
	const classes = useStyles();
	const [count, setCount] = useState(0);
	const { currentUser, logout } = useAuth();

	const [value, setValue] = React.useState(0);
	const history = useHistory();

	useEffect(() => {
		// routing
		if (value === 0) {
			history.push("/");
		} else if (value === 1) {
			history.push("/movies");
		} else if (value === 2) {
			history.push("/series");
		} else if (value === 3) {
			history.push("/search");
		} else if (value === 4) {
			history.push("/favourite");
		} else if (value === 5) {
			history.push("/about");
		}
		// routing

		//setting count reading from database
		if (currentUser) {
			db.collection("favourites")
				.doc(currentUser.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						const fav_data = doc.data().favourites; //arrray of objects
						if (fav_data.length > 0) {
							setCount(fav_data.length);
						} else {
							setCount(0);
						}
					}
				});
		}
		// else {
		// 	history.push("/about");
		// }
		//stting count reading from database
	}, [value, history]);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="Trending"
				icon={<WhatshotIcon />}
			/>

			<BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="Movies"
				icon={<MovieIcon />}
			/>
			<BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="TV Series"
				icon={<TvIcon />}
			/>
			<BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="Search"
				icon={<SearchIcon />}
			/>
			{/* check it  */}
			<BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="Fav"
				icon={
					<Badge color="primary" badgeContent={count} showZero>
						<StarsIcon />
					</Badge>
				}
			/>

			{/* check it  */}
			<BottomNavigationAction
				style={{ marginLeft: "2px", marginRight: "2px", color: "#FF0000" }}
				label="About"
				mx="auto"
				icon={<InfoIcon />}
			/>
		</BottomNavigation>
	);
}

//this is me
