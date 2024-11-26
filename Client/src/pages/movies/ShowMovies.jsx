import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShowMovies({ isDarkMode }) {

  const [movies, setMovies] = useState([]);
 
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/movie/movie-list');
        if (response) {
          setMovies(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
    
  
      console.log("show", movies)
      
  
    return (
      
      <div>
        
            {movies.length === 0 ? (
                <p className="font-bold">No movies found</p>
            ) : (
                        
             <>
              <h1 className='text-red-600 text-3xl mb-5 mt-5 font-bold leading-8'>MOVIES</h1> 
              <div className="flex flex-wrap border-2 border-red-600 mx-10 py-10 justify-evenly gap-20 my-5">                
                     {movies.map((movie) => (
                    <div key={movie._id}  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 20)" }}   
                    className=' movie-card-container bg-blur border border-red-600 rounded-md pt-2 lg:px-20 transition-transform duration-500 hover:scale-105 '>
                      <Link to={`/user/movies/${movie._id}`}>
                        <div 
                        className="border border-red-700 w-48 h-64 rounded-md">
                          <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
    
                        <div className="px-4 py-2">
                          <h2 className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {movie.title}
                          </h2>
                          <p className={`text-sm mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {movie.averageRating
                              ? `⭐ ${movie.averageRating.toFixed(1)}`
                              : 'No Ratings Yet'}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
           <footer className="text-center text-lg-start text-gray-700 bg-red-600">
            {/* Section: Social media */}
            <section className="flex justify-between items-center p-2 border-b border border-red-800">
              {/* Left */}
              <div className="hidden lg:block">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* Right */}
              <div className="icon-container">
                <a href="https://www.facebook.com/login.php" className="icon facebook-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.google.co.in/" className="icon google-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://www.instagram.com/" className="icon instagram-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </section>
            {/* Section: Social media */}

            {/* <!-- Section: Links  --> */}
            <section class="footer-links">
              <div class="container">
                {/* <!-- Grid row --> */}
                <div class="row">
                  {/* <!-- Grid column --> */}
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* <!-- Content --> */}
                    <h6 class="footer-title">
                      <i class="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer content. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 class="footer-title">
                      Genres
                    </h6>
                    <p>
                    <Link to="/user/movies/genre/Action" className="footer-link">Action</Link>
                    </p>
                    <p>
                    <Link to="/user/movies/genre/Adventure" className="footer-link">Adventure</Link>
                    </p>
                    <p>
                    <Link to="/user/movies/genre/Comedy" className="footer-link">Comedy</Link>
                    </p>
                    <p>
                    <Link to="/user/movies/genre/Romance" className="footer-link">Romance</Link>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 class="footer-title">
                      Quick links
                    </h6>
                    <p>
                    <Link to="/user/Home" className="footer-link">Home</Link>
                    </p>
                    <p>
                    <Link to="/user/movies/movie-list" className="footer-link">Movies</Link>
                    </p>
                    <p>
                    <Link to="/user/profile" className="footer-link">Profile</Link>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 class="footer-title">Contact Info</h6>
                    <p>
                      <a href="https://mail.google.com/mail/"> 
                      <i class="fas fa-envelope"></i>
                      movies@gmail.com
                      </a>
                    </p>
                    <p><i class="fas fa-phone"></i> +92 9731213574</p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
              </div>
            </section>
            {/* <!-- Section: Links  --> */}
          </footer>
           </>
        )}
                
      </div>
    );
  };