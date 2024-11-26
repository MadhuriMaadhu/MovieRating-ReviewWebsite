import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const UserHome = ({ isDarkMode }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/movie/movie-list');
        if (response.data) {
          setMovies(response.data.data);
        }
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    };
    fetchMovies();
  }, []);

  const handleGenreClick = (genre) => {
    navigate(`/user/movies/genre/${genre}`, { state: { isDarkMode } });
  };

  return (
    <div>
      {movies.length > 0 && (
        <>
          <section>
            <div className="pl-2 pt-5 grid grid-cols-2 gap-4 w-full">
              {['Action', 'Adventure', 'Comedy', 'Romance'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreClick(genre)}
                  style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                  className={`bg-red-600 border border-red-600 font-medium rounded-lg text-sm py-2 px-5 text-center me-2 mb-2
                  ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {genre}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <div className="border-2 border-red-600 rounded-md p-4 mb-10">
              <h1 className={`text-red-600 text-3xl font-bold leading-8 text-center featured-heading
                ${isDarkMode ? 'text-white' : 'text-black'}`}> 
                FEATURED MOVIES
              </h1>
            </div>
            <div className="movie-card-wrapper">
              {movies.map((movie) => (
                <div
                  key={movie._id}
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 20)"}}
                  className="movie-card"
                >
                  <Link to={`/user/movies/${movie._id}`}>
                    <div className="movie-card-image">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="movie-card-details">
                      <h2 className={`text-lg ${isDarkMode ? 'text-white' : 'text-white'}`}>{movie.title}</h2>
                      <p className={`text-sm mt-2 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        {movie.averageRating
                          ? `⭐ ${movie.averageRating.toFixed(1)}`
                          : "No Ratings Yet"}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <footer className="text-center text-lg-start bg-red-600">
            <section className="flex justify-between items-center p-2 border-b border border-red-800">
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

            {/* Section: Links */}
            <section className="footer-links">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="footer-title">
                      <i className="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer content. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="footer-title">
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

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="footer-title">
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

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="footer-title">Contact Info</h6>
                    <p>
                      <a href="https://mail.google.com/mail/"> 
                      <i className="fas fa-envelope"></i>
                      movies@gmail.com
                      </a>
                    </p>
                    <p><i className="fas fa-phone"></i> +92 9731213574</p>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </>
      )}
    </div>
  );
};

export default UserHome;
