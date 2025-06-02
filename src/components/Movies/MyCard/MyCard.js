import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MyCard({ movie }) {

  const dispatch = useDispatch();

  // Get list of favorites from Redux store
  const favorites = useSelector(state => state.favorites);
  
  // Check if current movie is in favorites
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      // Remove from favorites
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: movie });
    } else {
      // Add to favorites
      dispatch({ type: 'ADD_TO_FAVORITES', payload: movie });
    }
  };


  return (
    <div className="card h-100">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        className="card-img-top"
        alt={movie.title}
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body p-3">
        <h5 className="card-title">{movie.title}</h5>
        <button
          onClick={toggleFavorite}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isFavorite ? '❤️' : '♡'}
        </button>
        <br />
        <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-2">
          View Details
        </Link>
        <p className="card-text mt-2">
          <small className="text-muted">Release Date: {movie.release_date}</small>
        </p>
      </div>
    </div>
  );
}

export default MyCard;