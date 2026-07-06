import { cn } from "@/lib/utils";

interface WebPulseLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export function WebPulseLogo({
  className,
  size = 48,
  showWordmark = false,
}: WebPulseLogoProps) {
  if (showWordmark) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 80"
        fill="none"
        className={cn("h-auto", className)}
        style={{ width: size * 3.2 }}
        aria-label="WebPulse"
      >
        <defs>
          <linearGradient id="wm-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="wm-text" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>
        </defs>
        <g transform="translate(4, 8)">
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="rgba(56,189,248,0.25)"
            strokeWidth="1.5"
            fill="rgba(56,189,248,0.05)"
          />
          <path
            d="M10 34 L20 34 L26 18 L32 46 L38 26 L44 38 L54 34"
            stroke="url(#wm-pulse)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="26" cy="18" r="2" fill="#7dd3fc" />
          <circle cx="32" cy="46" r="2" fill="#38bdf8" />
        </g>
        <text
          x="78"
          y="48"
          fontFamily="var(--font-display), system-ui, sans-serif"
          fontSize="32"
          fontWeight="700"
          fill="url(#wm-text)"
          letterSpacing="-0.5"
        >
          Web<tspan fill="url(#wm-pulse)">Pulse</tspan>
        </text>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-label="WebPulse"
    >
      <defs>
        <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="60"
        cy="60"
        r="52"
        stroke="url(#ring-grad)"
        strokeWidth="2"
        fill="rgba(56,189,248,0.06)"
      />
      <circle
        cx="60"
        cy="60"
        r="38"
        stroke="rgba(56,189,248,0.12)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      <path
        d="M22 62 L38 62 L46 38 L54 82 L62 52 L70 72 L78 62 L98 62"
        stroke="url(#pulse-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
      <circle cx="46" cy="38" r="3" fill="#7dd3fc" />
      <circle cx="54" cy="82" r="3" fill="#38bdf8" />
      <circle cx="62" cy="52" r="3" fill="#7dd3fc" />
    </svg>
  );
}
