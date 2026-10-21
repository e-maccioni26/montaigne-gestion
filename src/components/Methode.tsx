import Icon from './Icon'
import { etapes } from '../data/home'
import './Methode.css'

export default function Methode() {
  return (
    <section className="methode container section-pad" aria-labelledby="methode-titre">
      <div className="methode__head mg-reveal">
        <div className="eyebrow methode__eyebrow">MÉTHODE</div>
        <h2 id="methode-titre" className="h2">Votre projet en quatre étapes</h2>
      </div>
      <div className="methode__grid">
        {etapes.map((e, i) => (
          <div key={e.titre} className="step mg-step mg-card mg-reveal">
            <div className="step__top">
              <span className="step__ico mg-ico"><Icon name={e.icon} size={26} /></span>
              <span className="step__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="step__title">{e.titre}</h3>
            <p className="step__txt">{e.texte}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
