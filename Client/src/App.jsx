
import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <div className="relative z-10 flex flex-col justify-center items-center gap-12 min-h-screen rounded-lg custom-background">
          <div className="content">
            <h1>A PLACE TO REVIEW MOVIES</h1>
          </div>
            <div className='button-container'>
              <Link to="/user/signin">
                <button className="signin-button">
                  Sign in
                </button>
              </Link>
              <Link to="/user/signup">
                <button className="signup-button">
                  Sign up
                </button>
              </Link>
            </div>
      </div>
    </>
  )
}

export default App