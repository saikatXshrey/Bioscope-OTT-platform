import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import About from "./Pages/About/About";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Recommended from "./Pages/Recommended/Recommended";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
// import { Container } from "react-bootstrap";
import Signup from "./UserAuth/Signup";
// import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
// import Dashboard from "./Dashboard";
import Login from "./UserAuth/Login";
import PrivateRoute from "./UserAuth/PrivateRoute";
import ForgotPassword from "./UserAuth/ForgotPassword";
import UpdateProfile from "./UserAuth/UpdateProfile";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<div className="app">
					{/* <Container> */}
					{/* <Container
						className="d-flex align-items-center justify-content-center"
						style={{ minHeight: "100vh" }}
					> */}
					{/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
					<Container>
						<Switch>
							{/* <Route path="/" exact component={Welcome} /> */}
							{ }
							<PrivateRoute path="/" component={Trending} exact />

							<PrivateRoute path="/movies" component={Movies} />
							<PrivateRoute path="/series" component={Series} />
							<PrivateRoute path="/search" component={Search} />
							<PrivateRoute path="/recommended" component={Recommended} />
							<PrivateRoute path="/update-profile" component={UpdateProfile} />

							<Route exact path="/about" component={About} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/forgot-password" component={ForgotPassword} />
						</Switch>
					</Container>
					{/* </div> */}
					{/* </Container> */}
				</div>
				<SimpleBottomNavigation />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
