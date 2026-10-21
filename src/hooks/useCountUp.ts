import { useEffect, useRef, useState } from 'react'

/** Compte de 0 à `target` en `duration` ms (easeOutCubic) quand l'élément entre à l'écran. */
export function useCountUp<T extends Element>(target: number, duration = 1400) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setValue(target); return }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target, duration])

  return [ref, value] as const
}
