import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function DeleteMovie({isDarkMode}) {

  
   const navigate = useNavigate();
  const { id } = useParams();
  

   const handleDeleteMovie = () => {
    axios
      .delete(`http://localhost:3000/api/v1/movie/delete/${id}`)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Movie Deleted Successfully",
          text: "The movie has been deleted from the system.",
          confirmButtonColor: "#d33",
        }).then(() => {
          navigate("/admin/dashboard");
        });
      })
      .catch((error) => {
        console.log(error);

        // SweetAlert for error
        Swal.fire({
          icon: "error",
          title: "Movie Deletion Failed",
          text:
            error.response?.data?.message ||
            "An error occurred. Please try again.",
          confirmButtonColor: "#d33",
        });
      });
  };
  
  const handleCancel = () => {
    navigate("/admin/dashboard", { replace: true });
  }

  return (
      
    <main className='max-w-4xl mx-auto p-4 md:p-6 lg:p-8'>
       <div className="pl-5 pt-2">
        <div className="p-4 md:p-6">
          <h1 className="flex justify-center text-3xl my-4">Delete Movie</h1>
          <div 
          style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 20)' }}
          className="flex flex-col items-center border-2 border-red-600 rounded-xl w-full md:w-3/4 lg:w-2/3 p-4 mx-auto">
            <h3 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Are you sure, you want to delete this movie?
            </h3>
            <button
              className="p-4 bg-red-600 text-white m-8 w-full md:w-2/3 lg:w-1/2 rounded-lg delete-button"
              onClick={handleDeleteMovie}
            >
              delete it
            </button>
            <button
              className="p-4 bg-green-500 text-white m-8 w-full md:w-2/3 lg:w-1/2 rounded-lg cancel-button "
              onClick={handleCancel}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </main>
      
   );
}