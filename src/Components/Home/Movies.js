import React from "react";

import { selectNewDisney } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectOriginal } from "../../features/movie/movieSlice";
import { selectTrending } from "../../features/movie/movieSlice";
import { selectRecommend } from "../../features/movie/movieSlice";
import Header from "./Header";
const Movie = () => {
    const movies1 = useSelector(selectRecommend);
    const movies2 = useSelector(selectNewDisney);
    const movies3 = useSelector(selectOriginal);
    const movies4 = useSelector(selectTrending);
  

    return (
        <>

<Header></Header>


            <div className="rec_movie" >
                <h3>Recommended Movies</h3>
                <div className="rec_movie_list">
                    {movies1 &&
                        movies1.map((movie, key) => (
                            <div>
                                {movie.id}
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg}></img>
                                </Link>
                            </div>


                        ))}

                </div>

                <h3>Trending Movies</h3>
                <div className="rec_movie_list">
                    {movies2 &&
                        movies2.map((movie, key) => (
                            <div>
                                {movie.id}
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg}></img>
                                </Link>
                            </div>


                        ))}
                </div>
                <h3>New Disney+ Movie</h3>
                <div className="rec_movie_list">
                    {movies3 &&
                        movies3.map((movie, key) => (
                            <div>
                                {movie.id}
                                <Link to={`/detail/${movie.id}`}>
                                    {console.log(movie.id)}

                                    <img src={movie.cardImg}></img>
                                </Link>
                            </div>


                        ))}


                </div>
                <h3>Originals</h3>
                <div className="rec_movie_list">
                    {movies4 &&
                        movies4.map((movie, key) => (
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
export default Movie;