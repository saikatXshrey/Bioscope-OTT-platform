import axios from "axios";
import "./Recommended.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
// import CustomPagination from "../../components/Pagination/CustomPagination";
import { useLocation } from "react-router-dom";

const Recommended = () => {
    // const [page, setPage] = useState(1);
    const [recommend, setRecommend] = useState([]);

    const location = useLocation();

    const { id, media_type } = location.state;

    const fetchRecommended = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
            // `https://api.themoviedb.org/3/movie/385128/recommendations?api_key=0f09453cc096d6730c3505a4d1f8f562&language=en-US&page=1`
        )
        setRecommend(data.results);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchRecommended();
        console.log(id, media_type, recommend.length);
        // eslint-disable-next-line
    }, []);

    return (
        <div>{
            recommend.length > 0 ? (<>
                <span className="pageTitle">Recommended</span>
                <div className="recommended">
                    {
                        recommend.map((c) => (
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
            ) : (<span className="pageTitle" style={{ color: "#FF0000" }}>No Recommendations Found</span>)
        }
        </div>
    );
};

export default Recommended;