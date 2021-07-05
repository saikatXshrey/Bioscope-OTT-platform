import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import {
	img_500,
	unavailable,
	unavailableLandscape,
} from "../../config/config";
import "./ContentModal.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Carousel from "../Carousel/Carousel";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		width: "90%",
		height: "80%",
		backgroundColor: "#000000",
		border: "1px solid #282c34",
		borderRadius: 10,
		color: "white",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 1, 3),
	},
}));

export default function TransitionsModal({ children, media_type, id }) {
	const { currentUser, logout } = useAuth();
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState();
	const [video, setVideo] = useState();
	//related to datbase
	// const [fav, setFav] = useState({});
	const [favouriteList, setFavouriteList] = useState([]); //my favourite list ....
	// related to databse
	// useHistory
	const history = useHistory();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchData = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);

		setContent(data);
		// console.log(data);
	};

	function removeFromFavourite(id) {
		const docRef = db.collection("favourites").doc(currentUser.uid);
		docRef.get().then((docSnap) => {
			const result = docSnap.data().favourites.filter((fav) => {
				return fav.content.id !== id;
			});
			docRef.update({
				favourites: result,
			});
		});
	}

	// adding to fav
	function addToFavourite(content, media_type) {
		//setting the setFav
		// setFav({
		// 	id: id,
		// 	media_type: media_type,
		// });
		const fav = { media_type: media_type, content: content };
		db.collection("favourites")
			.doc(currentUser.uid)
			.set({
				favourites: [...favouriteList, fav],
			});
	}
	//end of  adding to databasee (fav)

	const fetchVideo = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);

		setVideo(data.results[0]?.key);
	};
	// handling database

	// check if contains in database
	const stored = favouriteList.find((o) => o.content.id === id);
	console.log(stored);

	useEffect(() => {
		fetchData();
		// databse
		// if (currentUser) {
		if (currentUser) {
			const docRef = db.collection("favourites").doc(currentUser.uid);

			var unsubscribe = docRef.onSnapshot((docSnap) => {
				if (docSnap.exists) {
					// console.log(docSnap.data().favourites);
					setFavouriteList(docSnap.data().favourites);
				} else {
					console.log("NO docs ");
				}
			});
		} else {
			history.push("/login");
		}

		// databse
		fetchVideo();
		return () => {
			unsubscribe();
		};
		// eslint-disable-next-line
	}, []);

	// handling database
	return (
		<>
			<div
				className="media"
				style={{ cursor: "pointer" }}
				color="inherit"
				onClick={handleOpen}
			>
				{children}
			</div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					{content && (
						<div className={classes.paper}>
							<div className="ContentModal">
								<img
									src={
										content.poster_path
											? `${img_500}/${content.poster_path}`
											: unavailable
									}
									alt={content.name || content.title}
									className="ContentModal__portrait"
								/>
								<img
									src={
										content.backdrop_path
											? `${img_500}/${content.backdrop_path}`
											: unavailableLandscape
									}
									alt={content.name || content.title}
									className="ContentModal__landscape"
								/>
								<div className="ContentModal__about">
									<span className="ContentModal__title">
										{content.name || content.title} (
										{(
											content.first_air_date ||
											content.release_date ||
											"-----"
										).substring(0, 4)}
										){/* have to handle this using context api  */}
										{stored ? (
											<Button
												size="large"
												color="secondary"
												// onClick={(e) => setFav(!fav)}
												// onClick={(e) => addToFavourite(id, media_type)}
												// onClick={(e) => addToFavourite(content, media_type)}
												onClick={(e) => removeFromFavourite(id)}
											>
												REMOVE
												<FavoriteIcon />
											</Button>
										) : (
											<Button
												size="large"
												color="secondary"
												// onClick={(e) => setFav(!fav)}
												// onClick={(e) => addToFavourite(id, media_type)}
												onClick={(e) => addToFavourite(content, media_type)}
											>
												ADD
												<FavoriteBorderIcon />
											</Button>
										)}
										{/* handledd by database  */}
									</span>
									{content.tagline && (
										<i className="tagline">{content.tagline}</i>
									)}
									<span className="ContentModal__description">
										{content.overview}
									</span>

									<div>
										<Carousel id={id} media_type={media_type} />
									</div>

									<Button
										variant="contained"
										startIcon={<YouTubeIcon />}
										color="secondary"
										target="__blank"
										href={`https://www.youtube.com/watch?v=${video}`}
									>
										Watch the Trailer
									</Button>
									{/* fav button  */}

									<Button
										variant="contained"
										color="error"
										onClick={(e) =>
											history.push({
												pathname: "/favourite",
												// state: {
												// 	favourite: favouriteList,
												// },
											})
										}
									>
										Your fav
									</Button>

									{/*  */}
									<Button
										variant="contained"
										color="primary"
										onClick={(e) =>
											history.push({
												pathname: "/recommended",
												state: {
													id: id,
													media_type: media_type,
												},
											})
										}
									>
										Recommended
									</Button>
								</div>
							</div>
						</div>
					)}
				</Fade>
			</Modal>
		</>
	);
}
