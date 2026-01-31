import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Space from "../backgrounds/Space";
import Sky from "../backgrounds/sky";
import Donate from "./Donate";
import Loader from "./loader";

export default function Layout() {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    // One-time loader on initial mount/refresh
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstLoad(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500">
            <Loader dark={dark} isVisible={isFirstLoad} />

            {dark ? <Space /> : <Sky />}
            <Navbar dark={dark} setDark={setDark} />
            <main className="relative pt-20 pb-10">
                <Outlet context={{ dark }} />
            </main>
            <Donate />
        </div>
    );
}
