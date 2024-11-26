import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "../../components/Rating";


export default function Profile() {
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put("http://localhost:3000/api/v1/user/update",
        { name, email },
        {
          withCredentials: true
        }
      );
      setIsEditing(false);
     
    } catch (error) {
      console.error('error updating user info', error)
    }
  }
    
    useEffect(() => {
        const getProfile = async () => {
        try {
              
            const res = await axios.get("http://localhost:3000/api/v1/user/profile",
                
                {

                withCredentials: true,
               
                });
            
          const data = res.data.data;
          setName(data.name);
          setEmail(data.email);

          } catch (error) {
            console.log(error);
           
          }
        };
        getProfile();
    }, []);
  
    useEffect(() => {
      const getReviews = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/v1/review/user-reviews",
         
          {

            withCredentials: true,
           
          });

          const data = res.data;
          console.log("Reviews", data);
          setReviews(data);
          
        } catch (error) {
          console.log(error);
         
        }
      };
      getReviews();
    }, []);
  


    return (
      <div className="p-4 text-white">
        <div className="profile-section">
          <div
            style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 20)" }}
            className="profile-card">
            <div className="profile-header">
              <h2>Profile</h2>
            </div>
            <div className="profile-details bg-slate-800 border border-red-600 text-white">
              {/* Name Field */}
              <div className="profile-field">
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <p>{name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="profile-field">
                {isEditing ? (
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <p>{email}</p>
                )}
              </div>

              {/* Edit/Save Button */}
              <div className="profile-actions">
                <button onClick={isEditing ? handleSaveClick : handleEditClick}>
                  {isEditing ? "Save" : "Edit"}
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-10">

          <div className="py-10">

            <h2 className="text-xl text-red-500 font-bold mb-4 underline">Reviews of {name}</h2>
            <div className="w-full">
              <ul className="gap-4">
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <li key={index}>
                      <div className="my-5 mx-10 bg-neutral-200 border-2">
                        <div className="flex justify-between pr-2 mb-2">
                          <span className="text-sm text-slate-600 pl-2 pt-1 font-bold">    {review.movieId?.title || 'Unknown Movie'}</span>
                          <span className="text-xs text-gray-500 pt-1 pr-2">{review.createdAt}</span>
                        </div>
                        <p className="text-slate-600 border-4 p-2 border-white lg:text-lg mx-2 my-4">{review.comment}</p>
                        <div className="flex justify-end pr-2 pb-1">
                          <Rating rating={review.rating} />
                        </div>
                      </div>
                    </li>
                  ))) : (
                  <div className="flex justify-center mt-10">
                    <h3>no reviews yet</h3>
                  </div>
                )}

              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  };