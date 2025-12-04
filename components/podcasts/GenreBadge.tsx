interface GenreBadgeProps {
  category: string;
}

export function GenreBadge({ category }: GenreBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#F97316]/20 to-[#D946EF]/20 text-[#F97316] uppercase tracking-wide">
      {category}
    </span>
  );
}
