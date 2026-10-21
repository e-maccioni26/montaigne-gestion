import { useId } from 'react'

export default function Logo({ width, height, color }: { width: number; height: number; color: string }) {
  const id = useId()
  return (
    <svg aria-hidden="true" viewBox="0 0 100 112" width={width} height={height}>
      <defs>
        <clipPath id={id}><polygon points="0,0 100,0 100,112 75,104 50,112 25,104 0,112" /></clipPath>
      </defs>
      <path clipPath={`url(#${id})`} d="M7 112V30a18 18 0 0 1 36 0v82M57 112V30a18 18 0 0 1 36 0v82" fill="none" stroke={color} strokeWidth="11" />
    </svg>
  )
}
