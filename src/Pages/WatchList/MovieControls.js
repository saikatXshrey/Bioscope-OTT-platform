import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie }) => {
	const { removeMovieFromWatchlist } = useContext(GlobalContext);

	return (
		<div className="inner-card-controls">
			<>
				<button
					className="ctrl-btn"
					onClick={() => removeMovieFromWatchlist(movie.id)}
				>
					<i className="fa-fw fa fa-times"></i>
				</button>
			</>
		</div>
	);
};

export default MovieControls;
