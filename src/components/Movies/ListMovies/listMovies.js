import { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "../MyCard/MyCard";
import { Link } from "react-router-dom";

function ListMovies(){

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        // This is where you would typically fetch data from an API
        console.log("ListMovies component mounted");

        

        // Example API call to fetch popular movies
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad')
        .then((response) => {
            console.log(response);
            console.log(response.data.results);
            setPopularMovies(response.data.results);
        })
          
        .catch((error) => {
            console.log(error);
        });
        
    }
    , []);

    // This effect runs once when the component mounts, similar to componentDidMount in class components
    // ListMovies.js
// ListMovies.js
return (
    <div className="container mt-4">
      <h1>List Movies</h1>
      <div className="row">
        {popularMovies.map((movie) => (
          <MyCard key={movie.id} movie={movie} />
          
        ))}
        
      </div>
    </div>
    
  );

}
export default ListMovies;