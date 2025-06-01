import { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../MyCard/MyCard";
import { useLocation, useHistory } from "react-router-dom";



function ListMovies(){
//list movies component
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true);

// State to manage the total number of pages
    const [totalPages, setTotalPages] = useState(1);

// Using useLocation and useHistory from react-router-dom to manage pagination
    const location = useLocation();
    const history = useHistory();

// Get the current page from the URL search parameters
// If no page is specified, default to page 1
//const search = new URLSearchParams(location.search);
    const search = new URLSearchParams(location.search);
    const currentPage = parseInt(search.get("page")) || 1;

    const maxPagesToShow = 500; // Limit to 100 pages
    const totalPagesToDisplay = Math.min(totalPages, maxPagesToShow);

// State to manage the search query
    
    const [searchQuery, setSearchQuery] = useState("");
    const searchParams = new URLSearchParams(location.search);
    const currentQuery = searchParams.get("query") || "";

    const apiKey = "29cf44b93ca83bf48d9356395476f7ad";
        // Construct the URL based on whether we are in search mode or not

// Determine if we are in search mode
    const isSearchMode = !!currentQuery;

    

      useEffect(() => {
        // This is where you would typically fetch data from an API
        console.log("ListMovies component mounted");
        const fetchMovies = (page) => {

        
            let url = "";
            if (isSearchMode) {
                url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(currentQuery)}&page=${page}`;
        }   else {
                url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
        }
            axios
              .get(url)
              .then((response) => {
                setPopularMovies(response.data.results);
                setTotalPages(response.data.total_pages); // Update totalPages
              })
              .catch((error) => {
                console.error("Error fetching movies:", error);
              });
          };
        fetchMovies(currentPage);
  }, [currentPage]);

      // Handle form submission
        const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        history.push(`?query=${encodeURIComponent(searchQuery)}&page=1`);
  };

      const goToPage = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
    
        history.push({
          pathname: location.pathname,
          search: `?page=${newPage}`,
        });
      };
  

    

        // Example API call to fetch popular movies
        //axios.get('https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad')
        //.then((response) => {
        //    console.log(response);
          //  console.log(response.data.results);
            //setPopularMovies(response.data.results);
        //})
          
        //.catch((error) => {
          //  console.log(error);
       // });
        
    //}
   // , []);
    

    // This effect runs once when the component mounts, similar to componentDidMount in class components
    // ListMovies.js
// ListMovies.js
return (
    <div className="container mt-4">
      <h1>List Movies</h1>
  
      {/* Show dynamic title based on search or popular */}
      <h2>{isSearchMode ? `Results for "${currentQuery}"` : "Popular Movies"}</h2>
  
  
      {/* Movie Grid */}
      <div className="row">
        {popularMovies.length === 0 ? (
          <div className="text-center">
            {loading ? "Loading movies..." : "No movies found."}
          </div>
        ) : (
          popularMovies.map((movie) => (
            <MyCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
  
      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPagesToDisplay}</span>
        <button
          className="btn btn-outline-primary"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPagesToDisplay}
        >
          Next
        </button>
      </div>
    </div>
  );

}
export default ListMovies;