import axios from "axios";
import "./Favourite.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
// router hooks
// import { useLocation } from "react-router-dom";

const Favourite = () => {
	const { currentUser, logout } = useAuth();
	// const [page, setPage] = useState(1);
	const [fav, setFav] = useState([]); //array of objects

	let arr = [];

	useEffect(() => {
		window.scroll(0, 0);
		// database fetching
		db.collection("favourites")
			.doc(currentUser.uid)
			.get()
			.then((doc) => {
				if (doc.exists) {
					// console.log("data", doc.data().favourites); //arrray of objects
					const fav_data = doc.data().favourites; //arrray of objects
					// if (fav_data.length > 0) {
					fav_data.map((f) => {
						// console.log("Each object:", f);
						// fav.push(f);
						arr.push(f);
						// setFav([...fav, f]);
					});
					// setFav(fav);
					setFav(arr);
				}
				// } else {
				// 	console.log("No data");
				// }
			});
		console.log("my state", fav);
	}, []);
	console.log("Recent state ", fav);

	return (
		<div>
			{fav.length > 0 ? (
				<>
					<span className="pageTitle"> Your Favourites</span>
					<div className="favourite">
						{fav.map((c) => (
							<SingleContent
								key={c.content.id}
								id={c.content.id}
								poster={c.content.poster_path}
								title={c.content.title || c.content.name}
								date={c.content.first_air_date || c.content.release_date}
								media_type={c.media_type}
								vote_average={c.content.vote_average}
							/>
						))}
					</div>
				</>
			) : (
				<span className="pageTitle">
					Your Favourite list is Empty...Add some!
				</span>
			)}
		</div>
	);
};

export default Favourite;
