import Icon, { type IconName } from './Icon'
import Hex from './Hex'
import './Services.css'

const cartes: { img: string; alt: string; icon: IconName; titre: string; texte: string; cta: string }[] = [
  { img: '/images/bureaux-lumineux.jpg', alt: 'Plateau de bureaux lumineux', icon: 'key', titre: 'Location et vente',
    texte: 'Bureaux, locaux commerciaux, entrepôts et cessions de bail. Nous trouvons le bon local et le bon preneur.', cta: 'Voir les annonces' },
  { img: '/images/immeuble-haussmannien.jpg', alt: "Façade d'immeuble haussmannien", icon: 'building', titre: 'Gestion locative',
    texte: 'Nous gérons vos biens loués au quotidien, et vous les suivez depuis votre espace propriétaire.', cta: 'Confier mon bien' },
]

export default function Services() {
  return (
    <section id="services" className="services container" aria-labelledby="services-titre">
      <div className="services__head mg-reveal">
        <div>
          <div className="eyebrow services__eyebrow">SERVICES</div>
          <h2 id="services-titre" className="h2">Ce que nous faisons pour vous</h2>
        </div>
        <span className="btn btn--contour mg-btn">
          Parler de votre projet
          <Icon name="arrow" size={18} strokeWidth={2} className="mg-arrow" />
        </span>
      </div>
      <div className="services__grid">
        {cartes.map((c) => (
          <div key={c.titre} className="svc mg-card mg-reveal">
            <div className="svc__media mg-zoom">
              <img src={c.img} alt={c.alt} loading="lazy" />
              <span className="svc__ico"><Icon name={c.icon} /></span>
            </div>
            <div className="svc__body">
              <h3 className="svc__title">{c.titre}</h3>
              <p className="svc__txt">{c.texte}</p>
              <span className="svc__cta">{c.cta}<Icon name="arrow" size={18} strokeWidth={2} className="mg-arrow" /></span>
            </div>
          </div>
        ))}
        <div id="estimation" className="svc svc--dark mg-card mg-reveal">
          <Hex stroke="#FFF5E1" opacity={0.08} />
          <span className="svc__big-ico"><Icon name="chart" size={30} /></span>
          <div className="svc__dark-body">
            <span className="svc__kicker">GRATUIT · SANS ENGAGEMENT</span>
            <h3 className="svc__dark-title">Estimation de votre local</h3>
            <p className="svc__dark-txt">Un avis de valeur, loyer ou prix de vente, établi par un professionnel du quartier.</p>
            <span className="btn btn--creme mg-btn svc__btn">
              Demander une estimation
              <Icon name="arrow" size={18} strokeWidth={2} className="mg-arrow" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
