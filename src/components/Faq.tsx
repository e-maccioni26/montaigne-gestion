import { useState } from 'react'
import Icon from './Icon'
import { faq } from '../data/home'
import './Faq.css'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq container" aria-labelledby="faq-titre">
      <div className="faq__intro mg-reveal">
        <div className="eyebrow">FAQ</div>
        <h2 id="faq-titre" className="h2">Vos questions</h2>
        <p className="faq__sub">Une autre question ? Appelez-nous au <span className="faq__tel">01 88 40 27 94</span>.</p>
      </div>
      <div className="faq__list">
        {faq.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
              <h3 className="faq__h">
                <button type="button" id={`faq-q-${i}`} className="faq__btn" aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                  {f.q}
                  <span className="faq__plus"><Icon name="plus" size={16} strokeWidth={2.2} /></span>
                </button>
              </h3>
              <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq__panel">
                <div className="faq__clip"><p className="faq__a">{f.a}</p></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
