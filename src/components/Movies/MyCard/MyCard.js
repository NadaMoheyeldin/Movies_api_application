import React from "react";
import { Link } from "react-router-dom";
function MyCard({ movie }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}     
          className="card-img-top" 
          alt={movie.title} 
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
               View Details
          </Link>
          <p className="card-text">
            <small className="text-muted">Release Date: {movie.release_date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;