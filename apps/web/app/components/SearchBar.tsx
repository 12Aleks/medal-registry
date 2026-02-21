export function SearchBar() {
  return (
    <input
      placeholder="Search medals or soldiers..."
      className="
        w-full max-w-xl
        bg-surface
        border border-slate-600
        rounded-xl
        px-4 py-3
        focus:outline-none
        focus:border-accent
      "
    />
  )
}
