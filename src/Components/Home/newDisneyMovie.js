import React from "react";
import "./rec_movie.css";
import { selectNewDisney } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewDisneyMovie = () => {
    const movies = useSelector(selectNewDisney);
    return (
        <>
            <div className="rec_movie" >
                <h3>New Disney+ Movie</h3>
                <div className="rec_movie_list">
                {movies &&
                        movies.map((movie, key) => (
                            <div>
                                {movie.id}
                                <Link to={`/detail/${movie.id}`}>
                                {console.log(movie.id)}
                            
                                    <img src={movie.cardImg}></img>
                                </Link>
                            </div>


                        ))}
                   

                </div>
            </div>
        </>
    )
}
export default  NewDisneyMovie;