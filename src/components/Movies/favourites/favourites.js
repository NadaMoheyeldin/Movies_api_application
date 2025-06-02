import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyCard from '../MyCard/MyCard';

function Favourites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const removeFromFavorites = (movie) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: movie });
  };

  return (
    <div >
      <h2 style={{ textAlign: 'center', color: '#e50914', marginBottom: '20px' }}>
        ❤️ My Favorite Movies
      </h2>

      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
          No favorites yet! Start adding some amazing movies 🎬
        </p>
      ) : (
        <div className="row">
  {favorites.map((movie, index) => (
    <div key={index} className="position-relative col-md-3 mb-4">
      <MyCard movie={movie} />

      <button
        onClick={() => removeFromFavorites(movie)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          zIndex: 10,
          padding: 0 // removes default button padding for better circle shape
        }}
        aria-label="Remove from favorites"
      >
        &times;
      </button>
    </div>
  ))}
</div>
      )}
    </div>
  );
}

export default Favourites;