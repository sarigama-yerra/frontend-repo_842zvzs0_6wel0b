import { memo } from 'react'

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft radial glows */}
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.22),transparent_60%)] blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black, transparent 70%)',
      }} />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'4\' stitchTiles=\'stitch\' /></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>")',
        backgroundSize: '300px 300px',
      }} />
    </div>
  )
}

export default memo(BackgroundFX)
