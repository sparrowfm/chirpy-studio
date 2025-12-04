export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-40 border-b border-[#202635] bg-[#0B0E14]/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-32 h-8 bg-[#202635] rounded animate-pulse" />
          <div className="w-24 h-4 bg-[#202635] rounded animate-pulse" />
        </div>
      </header>

      {/* Hero Skeleton */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Key Art Skeleton */}
            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-[#202635] animate-pulse" />
            </div>

            {/* Info Skeleton */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex gap-2 justify-center md:justify-start">
                <div className="w-20 h-6 bg-[#202635] rounded-full animate-pulse" />
                <div className="w-24 h-6 bg-[#202635] rounded-full animate-pulse" />
              </div>
              <div className="h-12 bg-[#202635] rounded animate-pulse max-w-md" />
              <div className="h-6 bg-[#202635] rounded animate-pulse max-w-sm" />
              <div className="space-y-2">
                <div className="h-4 bg-[#202635] rounded animate-pulse" />
                <div className="h-4 bg-[#202635] rounded animate-pulse w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section Skeleton */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-[#202635]">
        <div className="w-24 h-6 bg-[#202635] rounded animate-pulse mb-4" />
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#202635] rounded-xl animate-pulse"
            />
          ))}
        </div>
      </section>

      {/* Episodes Skeleton */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="w-32 h-8 bg-[#202635] rounded animate-pulse mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#10141D] border border-[#202635]"
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#202635] animate-pulse" />
                <div className="flex-1 space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-4 bg-[#202635] rounded animate-pulse" />
                    <div className="w-20 h-4 bg-[#202635] rounded animate-pulse" />
                    <div className="w-12 h-4 bg-[#202635] rounded animate-pulse" />
                  </div>
                  <div className="h-6 bg-[#202635] rounded animate-pulse w-2/3" />
                  <div className="h-4 bg-[#202635] rounded animate-pulse" />
                  <div className="h-4 bg-[#202635] rounded animate-pulse w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
