import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function MovieSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    history.push(`/list?query=${encodeURIComponent(searchQuery)}&page=1`);  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search movies..."
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default MovieSearchBar;