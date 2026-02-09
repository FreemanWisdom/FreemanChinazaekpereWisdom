import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Space from "../backgrounds/Space";
import Donate from "./Donate";
import Loader from "./loader";

export default function Layout() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // One-time loader on initial mount/refresh
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstLoad(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500">
            <Loader dark={true} standsFor="dark" isVisible={isFirstLoad} />

            <Space />
            <Navbar dark={true} />
            <main className="relative pt-20 pb-10">
                <Outlet context={{ dark: true }} />
            </main>
            <Donate />
        </div>
    );
}
