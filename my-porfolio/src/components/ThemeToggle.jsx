export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-white/10 hover:scale-110 transition"
      aria-label="Toggle theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
