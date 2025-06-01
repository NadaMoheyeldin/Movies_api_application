// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad`)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching movie details:", err);
        setError("Failed to load movie details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Loading movie details...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        {/* Poster Image */}
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        ) : (
          <div className="bg-light text-center p-5">
            No poster available
          </div>
        )}

        {/* Movie Info */}
        <div className="card-body">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date || "N/A"}</p>
          <p><strong>Overview:</strong> {movie.overview || "No overview available."}</p>
          <p><strong>Rating:</strong> {movie.vote_average ? `${movie.vote_average}/10` : "Not rated yet"}</p>
            <p><strong>Original language:</strong> {movie.original_language}</p>
          {/* Back Button */}
          <button onClick={() => window.history.back()} className="btn btn-primary">
            Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;