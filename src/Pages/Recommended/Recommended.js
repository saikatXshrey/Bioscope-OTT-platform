import React from "react";
import axios from "axios";
import "./Recommended.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

// import from Material Ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// router hooks
import { useLocation } from "react-router-dom";

//useStyle
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		backgroundColor: "#000000",
	},
});

const Recommended = () => {
	const classes = useStyles();
	// const [page, setPage] = useState(1);
	const [recommend, setRecommend] = useState([]);
	// useLocation
	const location = useLocation();

	const { id, media_type } = location.state;

	const fetchRecommended = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		setRecommend(data.results);
	};

	useEffect(() => {
		window.scroll(0, 0);
		fetchRecommended();
		console.log(id, media_type, recommend.length);
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{recommend.length > 0 ? (
				<>
					<span className="pageTitle">Recommended</span>
					<div className="recommended">
						{recommend.map((c) => (
							<SingleContent
								key={c.id}
								id={c.id}
								poster={c.poster_path}
								title={c.title || c.name}
								date={c.first_air_date || c.release_date}
								media_type={c.media_type}
								vote_average={c.vote_average}
							/>
						))}
					</div>
				</>
			) : (
				// card media
				<Grid container spacing={2} justify="center">
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image="https://image.flaticon.com/icons/png/512/4600/4600417.png"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									style={{ color: "#ff0000" }}
								>
									No Recommendation Found
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				//end of card media
			)}
		</div>
	);
};

export default Recommended;
