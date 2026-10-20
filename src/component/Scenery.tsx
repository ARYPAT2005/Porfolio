import { useId, type CSSProperties } from "react"

// Deterministic pseudo-random so particles stay put between renders.
const rand = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

const svgId = (raw: string) => raw.replace(/[^a-zA-Z0-9-_]/g, "")

const CLOUD_SHAPES = {
  puff: {
    w: 320,
    h: 170,
    base: 148,
    circles: [[62, 118, 40], [108, 92, 52], [168, 70, 64], [230, 94, 52], [268, 120, 36], [146, 116, 46], [206, 120, 44]],
  },
  tower: {
    w: 400,
    h: 300,
    base: 272,
    circles: [
      [200, 86, 64], [150, 126, 58], [254, 130, 58], [110, 186, 56], [200, 170, 78],
      [294, 186, 54], [72, 236, 44], [150, 230, 62], [250, 228, 66], [332, 238, 42],
    ],
  },
  wisp: {
    w: 300,
    h: 90,
    base: 74,
    circles: [[50, 58, 22], [92, 46, 30], [140, 40, 34], [190, 48, 28], [234, 56, 22], [120, 60, 24], [170, 62, 22]],
  },
} as const

type CloudVariant = keyof typeof CLOUD_SHAPES

export function Cloud({ variant = "puff", className, style }: { variant?: CloudVariant; className?: string; style?: CSSProperties }) {
  const id = svgId(useId())
  const shape = CLOUD_SHAPES[variant]
  const blobs = shape.circles.map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />)

  return (
    <svg viewBox={`0 0 ${shape.w} ${shape.h}`} className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.3" style={{ stopColor: "var(--cloud)" }} />
          <stop offset="1" style={{ stopColor: "var(--cloud-shade)" }} />
        </linearGradient>
        <clipPath id={`${id}-body`}>
          <rect width={shape.w} height={shape.base} />
        </clipPath>
        <clipPath id={`${id}-shade`}>
          <rect width={shape.w} height={shape.base - 1} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-shade)`} transform="translate(6 9)" style={{ fill: "var(--cloud-shade)" }} opacity="0.9">
        {blobs}
      </g>
      <g clipPath={`url(#${id}-body)`} style={{ fill: `url(#${id}-g)` }}>
        {blobs}
      </g>
    </svg>
  )
}

const DRIFTING_CLOUDS: { top: string; width: string; duration: number; delay: number; variant: CloudVariant; opacity: number }[] = [
  { top: "13%", width: "clamp(140px, 20vw, 290px)", duration: 150, delay: -25, variant: "puff", opacity: 1 },
  { top: "36%", width: "clamp(110px, 14vw, 210px)", duration: 190, delay: -120, variant: "puff", opacity: 0.85 },
  { top: "6%", width: "clamp(160px, 24vw, 340px)", duration: 230, delay: -170, variant: "wisp", opacity: 0.7 },
  { top: "54%", width: "clamp(120px, 16vw, 240px)", duration: 170, delay: -75, variant: "wisp", opacity: 0.75 },
]

export function DriftingClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {DRIFTING_CLOUDS.map((c, i) => (
        <div
          key={i}
          className="cloud-drift absolute inset-x-0"
          style={{ top: c.top, animationDuration: `${c.duration}s`, animationDelay: `${c.delay}s`, opacity: c.opacity }}
        >
          <Cloud variant={c.variant} style={{ width: c.width }} />
        </div>
      ))}
    </div>
  )
}

export function Celestial({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className ?? ""}`} aria-hidden="true">
      {/* Sun */}
      <div className="day-only absolute inset-0">
        <div
          className="absolute -inset-24 rounded-full"
          style={{ background: "radial-gradient(circle, var(--glow) 0%, transparent 65%)", opacity: 0.9 }}
        />
        <div
          className="relative size-full rounded-full"
          style={{ background: "radial-gradient(circle at 40% 38%, #fffbe8 0%, var(--sun) 55%, #ffd77a 100%)" }}
        />
      </div>
      {/* Moon */}
      <div className="night-only absolute inset-0">
        <div
          className="absolute -inset-20 rounded-full"
          style={{ background: "radial-gradient(circle, rgb(246 236 201 / 0.35) 0%, transparent 65%)" }}
        />
        <svg viewBox="0 0 100 100" className="relative size-full">
          <circle cx="50" cy="50" r="48" style={{ fill: "var(--sun)" }} />
          <circle cx="36" cy="38" r="9" fill="#d9cfa9" opacity="0.5" />
          <circle cx="62" cy="60" r="12" fill="#d9cfa9" opacity="0.4" />
          <circle cx="60" cy="30" r="5" fill="#d9cfa9" opacity="0.45" />
        </svg>
      </div>
    </div>
  )
}

const STARS = Array.from({ length: 40 }, (_, i) => ({
  left: `${rand(i, 1) * 100}%`,
  top: `${rand(i, 2) * 55}%`,
  size: 1 + rand(i, 3) * 2,
  duration: 2 + rand(i, 4) * 4,
  delay: -rand(i, 5) * 5,
}))

export function Stars() {
  return (
    <div className="night-only pointer-events-none absolute inset-0" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-[#fff8dc]"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
        />
      ))}
    </div>
  )
}

const LEAF_COLORS = ["var(--petal)", "var(--meadow)", "var(--meadow-2)"]
const LEAVES = Array.from({ length: 9 }, (_, i) => ({
  left: `${rand(i, 6) * 85}%`,
  size: 12 + rand(i, 7) * 12,
  duration: 15 + rand(i, 8) * 12,
  delay: -rand(i, 9) * 26,
  color: LEAF_COLORS[i % LEAF_COLORS.length],
}))

export function Leaves() {
  return (
    <div className="day-only pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="leaf absolute top-0"
          style={{ left: l.left, width: l.size, height: l.size, animationDuration: `${l.duration}s`, animationDelay: `${l.delay}s` }}
        >
          <path d="M2 17 C 2 8, 8 2, 18 2 C 18 11, 12 18, 2 17 Z" style={{ fill: l.color }} />
          <path d="M3 16 L 12 7" stroke="rgb(0 0 0 / 0.18)" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  )
}

export function Fireflies({ count = 16, className }: { count?: number; className?: string }) {
  const flies = Array.from({ length: count }, (_, i) => ({
    left: `${4 + rand(i, 10) * 92}%`,
    top: `${rand(i, 11) * 100}%`,
    size: 3 + rand(i, 12) * 3,
    duration: 7 + rand(i, 13) * 7,
    delay: -rand(i, 14) * 12,
  }))
  return (
    <div className={`night-only pointer-events-none absolute ${className ?? "inset-0"}`} aria-hidden="true">
      {flies.map((f, i) => (
        <span
          key={i}
          className="firefly absolute rounded-full"
          style={{ left: f.left, top: f.top, width: f.size, height: f.size, animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s` }}
        />
      ))}
    </div>
  )
}

const TUFTS = [
  [70, 352], [210, 342], [330, 338], [770, 356], [890, 362], [1130, 356], [1300, 336], [1400, 334],
]

const FLOWERS = [
  [150, 360, "var(--petal)"], [260, 352, "#fff6df"], [820, 370, "var(--petal)"], [1010, 372, "#fff6df"],
  [1220, 352, "var(--petal)"], [440, 352, "#fff6df"],
] as const

export function Landscape({ className }: { className?: string }) {
  const id = svgId(useId())
  const paint = { filter: `url(#${id}-wc)` }

  return (
    <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <defs>
        <filter id={`${id}-wc`} x="-5%" y="-10%" width="110%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="3" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="9" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <linearGradient id={`${id}-far`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--mountain)" }} />
          <stop offset="0.7" style={{ stopColor: "var(--sky-bottom)" }} />
        </linearGradient>
        <linearGradient id={`${id}-mid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" style={{ stopColor: "var(--meadow)" }} />
          <stop offset="1" style={{ stopColor: "var(--meadow-2)" }} />
        </linearGradient>
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.7" style={{ stopColor: "var(--meadow-2)" }} />
          <stop offset="1" style={{ stopColor: "var(--forest)" }} />
        </linearGradient>
      </defs>

      {/* Distant mountains */}
      <path
        style={{ ...paint, fill: `url(#${id}-far)` }}
        opacity="0.85"
        d="M-40 262 C 60 232, 120 182, 200 176 C 270 170, 320 214, 400 210 C 480 206, 540 150, 640 146 C 740 142, 790 200, 880 205 C 960 210, 1020 166, 1110 160 C 1200 154, 1260 204, 1340 200 C 1400 197, 1440 186, 1480 180 L1480 460 L-40 460 Z"
      />

      {/* Rolling mid hill */}
      <path
        style={{ ...paint, fill: `url(#${id}-mid)` }}
        d="M-40 300 C 120 262, 300 250, 470 266 C 640 282, 800 270, 980 240 C 1120 218, 1300 232, 1480 258 L1480 460 L-40 460 Z"
      />

      {/* Cottage */}
      <g>
        <rect x="532" y="246" width="58" height="32" rx="2" style={{ fill: "var(--wall)" }} />
        <rect x="572" y="222" width="9" height="18" style={{ fill: "var(--roof)" }} />
        <path d="M522 250 L561 220 L600 250 Z" style={{ fill: "var(--roof)" }} />
        <circle className="night-only" cx="548" cy="261" r="14" style={{ fill: "var(--glow)" }} opacity="0.35" />
        <rect x="542" y="256" width="11" height="11" rx="1.5" style={{ fill: "var(--window)" }} />
        <rect x="564" y="258" width="13" height="20" rx="6" style={{ fill: "var(--bark)" }} />
        <circle className="smoke" cx="577" cy="214" r="5" fill="#fff" opacity="0.6" />
        <circle className="smoke" cx="577" cy="214" r="4" fill="#fff" opacity="0.6" style={{ animationDelay: "-2.5s" }} />
      </g>

      {/* Old tree on the crest */}
      <g>
        <path d="M993 244 C 995 222, 990 204, 996 184 L1009 184 C 1013 204, 1008 224, 1013 244 Z" style={{ fill: "var(--bark)" }} />
        <g style={{ fill: "var(--forest)" }}>
          <circle cx="968" cy="172" r="30" />
          <circle cx="1002" cy="150" r="40" />
          <circle cx="1038" cy="170" r="31" />
          <circle cx="984" cy="128" r="27" />
          <circle cx="1022" cy="124" r="27" />
          <circle cx="1003" cy="182" r="26" />
        </g>
        <g style={{ fill: "var(--meadow-2)" }} opacity="0.75">
          <circle cx="985" cy="118" r="15" />
          <circle cx="1014" cy="136" r="18" />
          <circle cx="962" cy="160" r="13" />
          <circle cx="1030" cy="158" r="12" />
        </g>
      </g>

      {/* Foreground hill */}
      <path
        style={{ ...paint, fill: `url(#${id}-front)` }}
        d="M-40 360 C 180 322, 420 318, 640 340 C 860 362, 1060 360, 1240 336 C 1340 323, 1420 322, 1480 326 L1480 460 L-40 460 Z"
      />

      {/* Winding trail up to the cottage */}
      <path
        style={{ ...paint, fill: "var(--trail)" }}
        opacity="0.9"
        d="M640 460 C 640 410, 606 372, 594 340 C 584 312, 574 292, 568 279 L 576 279 C 586 294, 604 316, 622 340 C 648 372, 708 410, 730 460 Z"
      />

      {/* Wildflowers */}
      {FLOWERS.map(([x, y, color]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" style={{ fill: color }} />
      ))}

      {/* Grass tufts swaying in the breeze */}
      {TUFTS.map(([x, y], i) => (
        <path
          key={x}
          className="grass-sway"
          style={{ animationDelay: `${-i * 0.6}s`, stroke: "var(--forest)" }}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          d={`M${x} ${y} q -4 -14 -11 -22 M${x} ${y} q 0 -16 2 -27 M${x} ${y} q 5 -12 12 -19`}
        />
      ))}

      {/* Painted paper edge that blends into the page */}
      <path
        style={{ ...paint, fill: "var(--paper)" }}
        d="M-40 404 C 240 386, 520 396, 780 400 C 1040 404, 1260 390, 1480 396 L1480 460 L-40 460 Z"
      />
    </svg>
  )
}

export function FooterHills({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        style={{ fill: "var(--meadow)" }}
        d="M0 112 C 200 62, 420 54, 680 84 C 940 114, 1160 72, 1440 64 V200 H0 Z"
      />
      <path
        style={{ fill: "var(--meadow-2)" }}
        d="M0 150 C 260 112, 520 120, 760 140 C 1000 160, 1240 130, 1440 122 V200 H0 Z"
      />
      <path style={{ fill: "var(--forest)" }} d="M0 182 C 300 164, 640 172, 900 178 C 1160 184, 1320 170, 1440 168 V200 H0 Z" />
    </svg>
  )
}
