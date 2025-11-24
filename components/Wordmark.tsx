import Image from 'next/image'

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <>
      {/* Full horizontal variant - show on wider viewports */}
      <div className={`hidden sm:flex items-center gap-2 ${className}`}>
        <span className="text-2xl font-black" style={{ color: '#F97316' }}>
          CHIRPY
        </span>
        <span className="text-2xl font-bold" style={{ color: '#D946EF' }}>
          STUDIO
        </span>
        <div className="w-10 h-10 flex-shrink-0 relative">
          <Image
            src="/tweety-bird-warm.svg"
            alt="Chirpy Studio"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Stacked compact variant - show on narrow viewports */}
      <div className={`flex sm:hidden flex-col leading-tight ${className}`}>
        <span className="text-lg font-black" style={{ color: '#F97316' }}>
          CHIRPY
        </span>
        <span className="text-lg font-bold" style={{ color: '#D946EF' }}>
          STUDIO
        </span>
      </div>
    </>
  )
}
