function MyCard({ movie }) {
    <div className="container mt-4">
          <h1>List Movies</h1>
      
          <div className="row">
            
              <div key={movie.id} className="col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  
                    className="card-img-top" 
                    alt={movie.title} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">Release Date: {movie.release_date}</small>
                    </p>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
}
export default MyCard;  