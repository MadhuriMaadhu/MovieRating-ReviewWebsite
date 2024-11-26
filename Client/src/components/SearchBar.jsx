import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';  // Added useLocation for path check
import { searchMovies } from '../actions/actions.js';
import { FaSearch } from "react-icons/fa";
import { clearMovieData, clearError } from '../reducers/movieReducer.js';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location/path

  const { movieId, error } = useSelector((state) => state.search);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(clearError());
      dispatch(searchMovies(query));
    }
  };

  useEffect(() => {
    if (movieId === "not found") {
      alert(movieId);
    } else if (movieId) {
      // Check if current page is part of the admin section
      if (location.pathname.startsWith("/admin")) {
        // Admin search result (for admin dashboard)
        navigate(`/admin/movies/${movieId}`);
      } else {
        // User section search result
        navigate(`/user/movies/${movieId}`);
      }
      dispatch(clearMovieData());
    } else if (error) {
      alert("No movie found");
    }
  }, [movieId, error, navigate, dispatch, location.pathname]);  // Include location.pathname to monitor path changes

  return (
    <div>
      <form onSubmit={handleSearch} className="flex border border-red-800 lg:w-106">
        <input
          type="text"
          placeholder="Search Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border text-white text-center bg-slate-500 lg:w-80"
        />
        <button type="submit" className=''>
          <FaSearch className="bg-white h-[42px] w-[26px]" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
