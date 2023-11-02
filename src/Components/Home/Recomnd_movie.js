import React from "react";
import "./rec_movie.css";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectRecommend } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Rec_movie = () => {
    const movies = useSelector(selectRecommend);
    return (
        <>
            <div className="rec_movie" >
                <h3>Recommended Movies</h3>
                <div className="rec_movie_list">
                    {movies &&
                        movies.map((movie, key) => (
                            <div>
                                {movie.id}
                                <Link to={`/detail` + movie.id}>
                                    <img src={movie.cardImg}></img>
                                </Link>
                            </div>


                        ))}




                </div>
            </div>
        </>
    )
}
export default Rec_movie;