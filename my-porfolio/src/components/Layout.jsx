import { useEffect, useState } from "react";
import Space from "../backgrounds/Space";
import Loader from "./loader";

export default function Layout({ children }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsFirstLoad(false);
    }, 1400);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-primary)] text-[var(--color-text)]">
      <Loader isVisible={isFirstLoad} />
      <Space />
      <main className="relative">{children}</main>
    </div>
  );
}
