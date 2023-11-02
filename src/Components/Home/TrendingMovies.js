import React from "react";
import "./rec_movie.css";
import { selectTrending } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Trending_movies = () => {
    const movies = useSelector(selectTrending);
    return (
        <>
            <div className="rec_movie" >
                <h3>Trending Movies</h3>
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
export default Trending_movies;