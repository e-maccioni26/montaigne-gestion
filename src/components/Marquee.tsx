import { secteurs } from '../data/home'
import './Marquee.css'

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track mg-marquee">
        {[...secteurs, ...secteurs].map((s, i) => (
          <span key={i} className="marquee__item">{s}<span className="marquee__dot" /></span>
        ))}
      </div>
    </div>
  )
}
