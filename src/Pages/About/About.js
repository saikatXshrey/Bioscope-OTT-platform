import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// importing profile pics
import Namrata from './profile_pic/Namrata.jpeg';
import Joyesh from './profile_pic/Joyesh.jpeg';
import Riya from './profile_pic/Riya.jpeg';
import Saikat from './profile_pic/Saikat.png';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [{
    key: 1,
    name: 'Namrata Modak',
    img: Namrata,
    description: "sgsdvsdfbsfb",
    links: {
        github: 'https://github.com/Namrata-Modak',
        linkedin: 'svsdvdfbdfbdfb'
    }
}, {
    key: 2,
    name: 'Joyesh Debnath',
    img: Joyesh,
    description: "sgsdvsdfbsfb",
    links: {
        github: 'https://github.com/JoyeshDebnath',
        linkedin: 'https://www.linkedin.com/in/joyesh-debnath-549b3b208/'
    }
}, {
    key: 3,
    name: 'Riya Mandal',
    img: Riya,
    description: "sgsdvsdfbsfb",
    links: {
        github: 'https://github.com/Riya790',
        linkedin: 'svsdvdfbdfbdfb'
    }
}, {
    key: 4,
    name: 'Saikat Das',
    img: Saikat,
    description: "sgsdvsdfbsfb",
    links: {
        github: 'https://github.com/saikatXshrey',
        linkedin: 'https://www.linkedin.com/in/saikat-das-767002209/'
    }
}];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            About Us
                        </Typography>
                        {/* Header text */}
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>
                        {/* Header text */}
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
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
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.key} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.img}
                                        title={card.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            color="primary"
                                            target="__blank"
                                            href={card.links.github}
                                        >
                                            <GitHubIcon />
                                        </Button>
                                        <Button size="small"
                                            color="primary"
                                            target="__blank"
                                            href={card.links.linkedin}
                                        >
                                            <LinkedInIcon />
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
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}