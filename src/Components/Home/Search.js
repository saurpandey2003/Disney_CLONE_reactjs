import React, { useState, useEffect } from "react";
import Movie from "./Movies";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=e268576382cd24dc1bd975ee2e6d4a44&query=${searchQuery}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.results) {
          setFilteredMovies(data.results);
        } else {
          setFilteredMovies([]);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setFilteredMovies([]);
      }
    };

    if (searchQuery.trim() === "") {
      setFilteredMovies([]);
    } else {
      fetchMovies();
    }
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
