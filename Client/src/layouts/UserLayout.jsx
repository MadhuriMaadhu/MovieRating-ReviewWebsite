import { Outlet } from "react-router-dom";
import UserNavbar from "../components/navbars/UserNavbar";
import { useState, useEffect } from "react";

export const UserLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [isDarkMode]);

    return (
        <div
            className={`min-h-screen rounded-lg ${isDarkMode ? "bg-slate-800 text-white" : "bg-white text-black"}`}
        >
            <nav>
                <UserNavbar setIsDarkMode={setIsDarkMode} />
            </nav>
            <Outlet />
    
        </div>
    );
};
