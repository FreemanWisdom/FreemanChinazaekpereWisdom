export default function Loader() {
  return (
    <div className="fixed inset-0 bg-cosmic flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-nebula rounded-full animate-spin" />
        <div className="absolute inset-6 border-4 border-white/30 rounded-full animate-ping" />
      </div>
    </div>
  );
}
