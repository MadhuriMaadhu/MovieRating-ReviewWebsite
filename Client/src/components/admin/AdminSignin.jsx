import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const schema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
}).required();

export default function Signin() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/admin/login",
                data,
                {
                    withCredentials: true,
                }
            );
            const success = res.data.message;

            // SweetAlert for success
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: success,
                confirmButtonColor: "#d33",
            }).then(() => {
                navigate("/admin/dashboard");
            });
        } catch (error) {
            console.error(error.response?.data || error.message);

            // SweetAlert for error
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response?.data?.message || "An error occurred. Please try again.",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex justify-center text-slate-800 py-20"
        >
            <div
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 20)" }}
                className="w-full text-white border border-red-600 rounded-md p-10 max-w-[500px] mx-10 mt-20"
            >
                <h3 className="text-2xl text-red-500 font-bold underline">SignIn</h3>
                <h5>Please Signin Your Account</h5>
                <div className="flex flex-wrap mt-8">
                    <label>Email :</label>
                    <input
                        {...register("email")}
                        placeholder="email"
                        autoComplete="admin-email"
                        className="block w-full rounded-lg border-2 border-gray-600 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                </div>
                <div className="flex flex-wrap mt-8">
                    <label>Password :</label>
                    <input
                        {...register("password")}
                        placeholder="password"
                        autoComplete="current-password"
                        type="password"
                        className="block w-full rounded-lg border-2 border-gray-600 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                </div>
                <button className="bg-red-600 mt-5 py-1 p-3 text-white rounded-md submit-button">
                    Submit
                </button>
                <p className="text-black mt-1">
                    Don't have an account -{" "}
                    <Link to="/admin/signup" className="text-red-600">
                        Sign Up
                    </Link>
                </p>
            </div>
        </form>
    );
}
