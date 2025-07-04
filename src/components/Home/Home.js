import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "/home/nada/react/Routing/routing/src/components/Movies/MyCard/MyCard.js";
import MyForm from "../form/form";
import { useHistory } from "react-router-dom";
import "./Home.css";


function Home(props) {
  console.log("Home component props:", props);
  const history = useHistory();

  // State for movies and loading
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TMDb API key (same as ListMovies)
  const apiKey = "29cf44b93ca83bf48d9356395476f7ad";

  // Fetch 6 popular movies for the home page
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(response.data.results.slice(0, 6)); // Limit to 6 movies
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  // Handle successful login (optional: redirect to /movies instead of /todo)
  const handleLoginSuccess = () => {
    history.push("/list?page=1"); // Redirect to movies page after login
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero text-center text-white py-5">
        <h1>Welcome to MovieApp</h1>
        <p className="lead">Log in to explore thousands of movies!</p>
        <div className="login-container mx-auto">
          <MyForm onLoginSuccess={handleLoginSuccess} />
        </div>
        <button
          className="btn btn-outline-light mt-3"
          onClick={() => history.push("/list?page=1")}
        >
          Browse as Guest
        </button>
      </section>

      {/* Featured Movies Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-4">Featured Movies</h2>
        {loading && <p className="text-center">Loading movies...</p>}
        {error && <p className="text-center text-danger">Error: {error}</p>}
        {!loading && !error && (
          <div className="row">
            {movies.length === 0 ? (
              <div className="col-12 text-center">No movies found.</div>
            ) : (
              movies.map((movie) => (
                <div className="col-md-4 col-lg-2 mb-4" key={movie.id}>
                  <MyCard movie={movie} />
                </div>
              ))
            )}
          </div>
        )}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => history.push("/list?page=1")}
          >
            View More Movies
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;