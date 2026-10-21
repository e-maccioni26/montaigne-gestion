import { useId } from 'react'

/** Trame hexagonale en fond (parent en position: relative). */
export default function Hex({ stroke, opacity }: { stroke: string; opacity: number }) {
  const id = useId()
  return (
    <svg aria-hidden="true" className="hex-bg">
      <defs>
        <pattern id={id} width="34.64" height="60" patternUnits="userSpaceOnUse">
          <path d="M17.32 0L34.64 10V30L17.32 40L0 30V10ZM17.32 40V60" fill="none" stroke={stroke} strokeOpacity={opacity} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
