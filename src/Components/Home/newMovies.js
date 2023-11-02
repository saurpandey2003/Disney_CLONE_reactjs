import React from "react";
import "./rec_movie.css";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectOriginal } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Originalsmovie = () => {
    const movies = useSelector(selectOriginal);
    return (
        <>
            <div className="rec_movie" >
                <h3>Originals</h3>
                <div className="rec_movie_list">
                    {movies &&
                        movies.map((movie, key) => (
                            <div>
                                {movie.id}
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg}></img>
                                </Link>
                            </div>


                        ))}




                </div>
            </div>
        </>
    )
}
export default Originalsmovie;