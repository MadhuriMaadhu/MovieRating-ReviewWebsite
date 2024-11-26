import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import SearchBar from "../SearchBar";
import logo from "../../assets/movie.png";

export default function UserNavbar({ setIsDarkMode }) {
    const [isDarkModeLocal, setIsDarkModeLocal] = useState(true); // Default to dark mode

    // On mount, check localStorage for the theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            // Apply saved theme from localStorage
            const isDark = savedTheme === "dark";
            setIsDarkModeLocal(isDark);
            setIsDarkMode(isDark);
            document.body.classList.add(savedTheme); // Apply saved theme to body
            document.body.classList.remove(savedTheme === "dark" ? "light-mode" : "dark-mode");
        } else {
            // If no saved theme, set default theme as dark mode
            setIsDarkModeLocal(true);
            setIsDarkMode(true);
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark"); // Save default theme
        }
    }, [setIsDarkMode]);

    // Toggle theme state and save to localStorage
    const toggleTheme = () => {
        const newMode = !isDarkModeLocal;
        setIsDarkModeLocal(newMode);
        setIsDarkMode(newMode); // Pass the theme state to the parent (UserLayout)

        // Save theme to localStorage
        localStorage.setItem("theme", newMode ? "dark" : "light");

        // Update the body class for theme switch
        if (newMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    };

    return (
        <div className="flex flex-wrap items-center justify-center pt-5 pb-3 rounded-t-lg border-2 border-red-600 gap-12">
            <div className="ml-1">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo-img"
                />
            </div>
            
            <Link to="/user/Home">
                <button className={`${
                isDarkModeLocal ? "text-white" : "text-black"
                } bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm py-1 px-5 text-center me-2 mb-2`}>
                    Home
                </button>
            </Link>
            <Link to="/user/movies/movie-list">
            <button className={`${
                    isDarkModeLocal ? "text-white" : "text-black"
                } bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm py-1 px-5 text-center me-2 mb-2`}>
                    Movies
                </button>
            </Link>
            <Link to="/user/profile">
            <button className={`${
                    isDarkModeLocal ? "text-white" : "text-black"
                } bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm py-1 px-5 text-center me-2 mb-2`}>
                    Profile
                </button>
            </Link>
            <Link to="/user/logout">
            <button className={`${
                    isDarkModeLocal ? "text-white" : "text-black"
                } bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm py-1 px-5 text-center me-2 mb-2`}>
                    Logout
                </button>
            </Link>
            <SearchBar/>

            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="text-2xl p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-white dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {isDarkModeLocal ? (
                    <FiSun style={{ color: 'yellow' }} />
                ) : (
                    <FiMoon style={{ color: 'black' }} />
                )}
            </button>
        </div>
    );
}
