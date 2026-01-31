import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Space from "../backgrounds/Space";
import Sky from "../backgrounds/sky";
import Donate from "./Donate";

export default function Layout() {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500">
            {dark ? <Space /> : <Sky />}
            <Navbar dark={dark} setDark={setDark} />
            <main className="relative pt-20 pb-10">
                <Outlet />
            </main>
            <Donate />
        </div>
    );
}
