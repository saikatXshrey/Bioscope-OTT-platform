import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import StarsIcon from "@material-ui/icons/Stars";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		backgroundColor: "#000000",
		zIndex: 100,
	},
});

export default function SimpleBottomNavigation() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const history = useHistory();

	useEffect(() => {
		if (value === 0) {
			history.push("/");
		} else if (value === 1) {
			history.push("/movies");
		} else if (value === 2) {
			history.push("/series");
		} else if (value === 3) {
			history.push("/search");
		}
		// else if (value === 4) {
		// 	history.push("/favourite");
		// }
		else if (value === 4) {
			history.push("/about");
		}
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
			{/* <BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="Fav"
				icon={<StarsIcon />}
			/> */}
			{/* check it  */}
			<BottomNavigationAction
				style={{ color: "#FF0000" }}
				label="About"
				icon={<InfoIcon />}
			/>
		</BottomNavigation>
	);
}
