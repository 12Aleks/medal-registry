export function MedalCard() {
  return (
    <div className="
      bg-surface
      p-6
      rounded-xl
      shadow-card
      border border-slate-700
      hover:border-accent
      transition
    ">
      <h3 className="text-lg font-semibold text-accent">
        Crimea Medal
      </h3>

      <p className="text-textSecondary text-sm mt-2">
        War medal • 1854–1855
      </p>

      <button className="
        mt-4
        text-sm
        text-accent
        hover:text-accentHover
      ">
        View details →
      </button>
    </div>
  )
}