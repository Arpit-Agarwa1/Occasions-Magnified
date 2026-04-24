const SEGMENT = 'SHOP CUSTOM DESIGNS'

/**
 * Thin burgundy ribbon with repeating uppercase label (matches reference home layout).
 */
export function MarqueeRibbon() {
  const items = Array.from({ length: 24 }, (_, i) => (
    <span key={i} className="mx-10 inline-block whitespace-nowrap">
      {SEGMENT}
    </span>
  ))

  return (
    <div className="bg-burgundy py-2.5 text-cream">
      <div className="relative overflow-hidden">
        <div className="om-marquee-track font-sans text-[10px] font-semibold tracking-[0.42em] uppercase">
          {items}
          {items}
        </div>
      </div>
    </div>
  )
}
