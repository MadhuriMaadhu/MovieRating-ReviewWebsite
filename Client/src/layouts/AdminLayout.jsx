import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/navbars/AdminNavbar";
import { useState, useEffect } from "react";


export const AdminLayout = () => {
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
            className={`min-h-screen rounded-lg py-4 border-2 border-red-700 sm:w-full sm:h-full w-fit h-fit ${isDarkMode ? "bg-slate-800 text-white" : "bg-white text-black"
                }`}
        >

            <nav>
                <AdminNavbar setIsDarkMode={setIsDarkMode} />
            </nav>
            <Outlet />
        </div>
    )
}