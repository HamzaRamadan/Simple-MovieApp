import { useState, useEffect } from "react";
import  './Home.css'
console.log('rvbhbihbieu')
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://www.omdbapi.com/?s=movies&apikey=148f7e34");
        const data = await response.json();
        console.log(data)

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="title">All Movies </h2>
      <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
