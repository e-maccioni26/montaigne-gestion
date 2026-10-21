import Icon from './Icon'
import Hex from './Hex'
import { annonces } from '../data/home'
import './CoupsDeCoeur.css'

export default function CoupsDeCoeur() {
  return (
    <section className="coeur" aria-labelledby="coeur-titre">
      <Hex stroke="#FFFFFF" opacity={0.4} />
      <div className="coeur__inner container section-pad">
        <div className="coeur__head mg-reveal">
          <div>
            <span className="badge">À LA UNE</span>
            <h2 id="coeur-titre" className="h2 coeur__title">Nos coups de cœur</h2>
          </div>
          <span className="btn btn--vert mg-btn">
            Voir les 15 annonces
            <Icon name="arrow" size={18} strokeWidth={2} className="mg-arrow" />
          </span>
        </div>
        <div className="coeur__grid">
          {annonces.map((a) => (
            <article key={a.type} className="ann mg-card mg-reveal">
              <div className="ann__media mg-zoom">
                <img src={a.img} alt={`${a.type} à ${a.ville}`} loading="lazy" />
                <span className="ann__tag">À LOUER</span>
              </div>
              <div className="ann__body">
                <span className="ann__type">{a.type.toUpperCase()}</span>
                <h3 className="ann__ville">
                  <Icon name="pin" size={18} stroke="#B8462D" strokeWidth={2} />{a.ville} ({a.cp})
                </h3>
                <div className="ann__foot">
                  <span className="ann__prix">{a.prix} <span className="ann__unit">/ mois CC</span></span>
                  <span className="ann__go"><Icon name="arrow" size={18} strokeWidth={2} className="mg-arrow" /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
