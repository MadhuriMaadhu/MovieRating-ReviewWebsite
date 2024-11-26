import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import Swal from "sweetalert2"; // Import SweetAlert2

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: yup
        .string()
        .required("Confirm password is required")
        .oneOf([yup.ref('password')], 'Passwords must match')
});

export default function Signup() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                data,
                {
                    withCredentials: true,
                }
            );
            const success = res.data.message;

            // SweetAlert for success
            Swal.fire({
                icon: "success",
                title: "Signup Successful",
                text: success,
                confirmButtonColor: "#d33",
            }).then(() => {
                navigate("/user/signin");
            });

        } catch (error) {
            console.log(error);

            // SweetAlert for error
            Swal.fire({
                icon: "error",
                title: "Signup Failed",
                text: error.response?.data?.message || "An error occurred. Please try again.",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex justify-center py-10"
        >
            <div 
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 20)" }}   
                className="w-full text-white border border-red-600 rounded-md p-10 max-w-[500px] mx-10 mt-10"
            >
                <h4 className="text-2xl text-red-600 font-bold underline">SignUp</h4>
                <h5>Create An Account</h5>
                <div className="flex flex-wrap mt-5">    
                    <label>Name</label> 
                    <input
                        {...register("name")}
                        placeholder="Enter Your Name"
                        className="block w-full rounded-lg bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div> 
                <div className="flex flex-wrap mt-5">    
                    <label>Email</label>  
                    <input
                        {...register("email")}
                        placeholder="Enter Your Email"
                        autoComplete="email"
                        className="block w-full rounded-lg border-2 border-gray-600 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="flex flex-wrap mt-5">    
                    <label>Password</label> 
                    <input
                        {...register("password")}
                        placeholder="Enter Your Password"
                        autoComplete="new-password"
                        type="password"
                        className="block w-full rounded-lg border-2 border-gray-600 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>
                <div className="flex flex-wrap mt-5">    
                    <label>Confirm Password</label> 
                    <input
                        {...register("confirmPassword")}
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        type="password"
                        className="block w-full rounded-lg border-2 border-gray-600 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                </div>
                <button className="bg-red-600 mt-5 py-1 p-3 text-white rounded-md submit-button">Submit</button>                    
                <p className="text-black mt-1">
                    Already Signed Up{" - "}
                    <Link to="/user/signin" className="text-red-600">
                        Sign In
                    </Link>
                </p>
            </div>
        </form>
    );
}
