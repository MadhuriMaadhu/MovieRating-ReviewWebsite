import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

export default function AdminShowMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    axios
      .get("http://localhost:3000/api/v1/movie/movie-list")
      .then((response) => {
        if (response.data) {
          
          setMovies(response.data.data);
        } else {
          setMovies([]);
        }
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
  
      
      
  
    return (
        <div>
        
            {movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
                        
                    <section className="border-t border-red-600 pb-10 pt-5 mt-10">
                        <div className="flex flex-wrap mx-auto max-w-7xl py-6 justify-center" style={{ gap: '20px' }}>
                            {movies.map((movie) => (
                                <div
                                    key={movie._id}
                                    className="movie-card-container border border-red-800 shadow-md rounded-lg bg-slate-800 overflow-hidden hover:shadow-lg"
                                    style={{
                                        width: '280px',
                                        margin: '10px',
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 20)"
                                    }}
                                >
                                    <Link to={`/admin/movies/${movie._id}`}>
                                        <div className="movie-card w-full h-64 overflow-hidden">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>
                                        <div className="px-4 py-4">
                                            <h2 className="text-xl font-semibold text-white truncate">
                                                {movie.title}
                                            </h2>
                                            <p className="text-sm text-white mt-2">
                                                {movie.averageRating
                                                    ? `⭐ ${movie.averageRating.toFixed(1)}`
                                                    : 'No Ratings Yet'}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="flex justify-between py-2 border-t border-red-800">
                                        <Link
                                            to={`/admin/movies/edit/${movie._id}`}
                                            className="flex items-center text-blue-600 hover:text-blue-800"
                                        >
                                            <AiOutlineEdit className="text-lg text-lime-400" />
                                            <span className="ml-1 text-sm text-lime-400">Edit</span>
                                        </Link>
                                        <Link
                                            to={`/admin/movies/delete/${movie._id}`}
                                            className="flex items-center text-red-600 ml-auto"
                                        >
                                            <MdOutlineDelete className="text-lg" />
                                            <span className="ml-1 text-sm">Delete</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

              
            )}
     </div>
    );
  };
  