import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../MyCard/MyCard";
import { useLocation, useHistory } from "react-router-dom";

function ListMovies() {
  const location = useLocation();
  const history = useHistory();

  const apiKey = "29cf44b93ca83bf48d9356395476f7ad";

  // States
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  // Get query and page from URL
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const currentQuery = searchParams.get("query") || "";

  // Determine if we are in search mode
  const isSearchMode = !!currentQuery;

  // Effect to fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        let url = "";
        if (isSearchMode) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(currentQuery)}&page=${currentPage}`;
        } else {
          url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;
        }

        console.log("Fetching movies from:", url);

        const response = await axios.get(url);
        console.log("API Response:", response.data);

        setPopularMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, currentQuery]);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;
    history.push(`?query=${encodeURIComponent(currentQuery)}&page=1`);
  };

  // Go to a specific page
  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    history.push({
      pathname: location.pathname,
      search: `?page=${newPage}`,
    });
  };

  return (
    <div className="container mt-4">
      <h1>🎬 All Movies</h1>

      {/* Show dynamic title based on search or popular */}
      <h2 className="text-center my-4">
        {isSearchMode ? `Results for "${currentQuery}"` : "Popular Movies"}
      </h2>

      <div className="container mt-4">
        {/* Movie Grid */}
        <div className="row">
          {popularMovies.length === 0 ? (
            <div className="col-12 text-center">
              {loading ? "Loading movies..." : "No movies found."}
            </div>
          ) : (
            popularMovies.map((movie) => (
              <div className="col-md-3 mb-4" key={movie.id}>
                <MyCard movie={movie} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-outline-primary"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ListMovies;