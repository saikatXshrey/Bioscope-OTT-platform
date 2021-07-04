import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
// importing profile pics
import Namrata from "./profile_pic/Namrata.jpeg";
import Joyesh from "./profile_pic/Joyesh.jpeg";
import Riya from "./profile_pic/Riya.jpeg";
import Saikat from "./profile_pic/Saikat.jpeg";
// footer copyright
function Copyright() {
	return (
		<Typography variant="body2" color="secondary" align="center">
			{"Copyright © "}
			<Link color="red" href="https://material-ui.com/">
				🍿BIOSCOPE
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
// footer copyright end

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		// backgroundColor: theme.palette.background.paper,
		backgroundColor: "#000000",
		color: "white",
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%",
		height: "100%",
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: "#000000",
		padding: theme.spacing(6),
	},
}));

const cards = [
	{
		key: 1,
		name: "Namrata Modak",
		img: Namrata,
		description:
			"Heya👋🏼,I m Namrata,an effective student committed to learning and developing skills in Web Development and problem solving.I m a fast learner; successful working in both team and self-directed projects.",
		links: {
			github: "https://github.com/Namrata-Modak",
			linkedin: "https://www.linkedin.com/in/namrata-modak-9530a01a6/",
		},
	},
	{
		key: 2,
		name: "Joyesh Debnath",
		img: Joyesh,
		description:
			"Hi There 👋 .Myself Joyesh and I am passionate about coding . I love to work on projects and interested in learning more and more. in short I am alaways passionate about learning..",
		links: {
			github: "https://github.com/JoyeshDebnath",
			linkedin: "https://www.linkedin.com/in/joyesh-debnath-549b3b208/",
		},
	},
	{
		key: 3,
		name: "Riya Mandal",
		img: Riya,
		description:
			"Hello, my self Riya..I am a passionate Technophile, Passionate about  web development and new technologies. I like to build experience and add new skills to my skillset. I love technology and innovation and keep myself updated about the latest technologies.",
		links: {
			github: "https://github.com/Riya790",
			linkedin: "https://www.linkedin.com/in/riya-mandal-299a54213/",
		},
	},
	{
		key: 4,
		name: "Saikat Das",
		img: Saikat,
		description:
			"Hey!🐱‍👤 am Saikat committed to learning, developing skills in Web Development(MERN), problem solving and team contribution and in a continuous process of gaining knowledge apart from that i love memes😂✌",
		links: {
			github: "https://github.com/saikatXshrey",
			linkedin: "https://www.linkedin.com/in/saikat-das-767002209/",
		},
	},
];

export default function Album() {
	const classes = useStyles();

	// useHistory
	const history = useHistory();

	return (
		<React.Fragment>
			<CssBaseline />

			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							style={{ color: "#ff0000" }}
							gutterBottom
						>
							About 🍿
						</Typography>
						{/* Header text */}
						<Typography variant="h5" align="center" color="white" paragraph>
							Hi There👋👋.This is Team Bioscope. 🍿. We have built a OTT
							platform with react and Added Firebase Auth to authenticate users
							. You can search for movies , Find out recommendations,also see
							cast and reviews and trailers of all movies and web series ..Dont
							Forget to give it a try.😁😁
						</Typography>
						{/* Header text */}
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button
										variant="contained"
										color="secondary"
										onClick={(e) => history.push("/")}
									>
										Home
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				{/* End hero unit */}

				{/* start of card container body */}
				<Container className={classes.cardGrid} maxWidth="md">
					{/* start of  Header text */}
					<Grid
						container
						spacing={5}
						direction="row"
						justify="space-evenly"
						alignItems="center"
					>
						{cards.map((card) => (
							<Grid item key={card.key} xs={12} md={6} sm={4}>
								<Card
									className={classes.card}
									style={{ backgroundColor: "#000000", color: "white" }}
								>
									<CardMedia
										className={classes.cardMedia}
										image={card.img}
										title={card.name}
									/>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											color="secondary"
										>
											{card.name}
										</Typography>
										<Typography>{card.description}</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="secondary"
											target="__blank"
											href={card.links.github}
										>
											<GitHubIcon fontSize="large" />
										</Button>
										<Button
											size="small"
											color="primary"
											target="__blank"
											href={card.links.linkedin}
										>
											<LinkedInIcon fontSize="large" />
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				{/* End of card container body */}
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom color="secondary">
					Important Links🚀🚀
				</Typography>
				<Grid
					container
					container
					direction="row"
					justify="center"
					alignItems="center"
					color="white"
					style={{ marginTop: "2rem", marginBottom: "2rem" }}
				>
					{/* footer links to our documentation */}
					<Button
						target="__blank"
						href="https://github.com/saikatXshrey/Bioscope-OTT-platform"
					>
						<GitHubIcon
							fontSize="large"
							color="secondary"
							style={{ cursor: "pointer" }}
						/>
					</Button>
					<Button
						target="__blank"
						href="https://github.com/saikatXshrey/Bioscope-OTT-platform"
					>
						<DescriptionIcon
							fontSize="large"
							color="primary"
							style={{ cursor: "pointer" }}
						/>
					</Button>
					<Button
						target="__blank"
						href="https://github.com/saikatXshrey/Bioscope-OTT-platform"
					>
						<PictureAsPdfIcon
							fontSize="large"
							color="error"
							style={{ cursor: "pointer" }}
						/>
					</Button>
				</Grid>
				<Copyright />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}
