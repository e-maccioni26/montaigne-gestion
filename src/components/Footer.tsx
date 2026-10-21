import Icon, { type IconName } from './Icon'
import Logo from './Logo'
import './Footer.css'

const contacts: { icon: IconName; label: string; valeur: string; card: boolean }[] = [
  { icon: 'phone', label: 'TÉLÉPHONE', valeur: '01 88 40 27 94', card: true },
  { icon: 'mail', label: 'E-MAIL', valeur: 'contact@montaigne-gestion.fr', card: true },
  { icon: 'pin', label: 'AGENCE', valeur: '11 avenue Montaigne, 75008 Paris', card: false },
]

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <img className="footer__bg" src="/images/immeuble-haussmannien.jpg" alt="" loading="lazy" />
      <div className="footer__veil" aria-hidden="true" />
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="mg-reveal">
            <div className="eyebrow footer__eyebrow">UN PROJET ?</div>
            <h2 className="footer__title">Parlons-en.</h2>
          </div>
          <span className="footer__ring mg-ring" aria-hidden="true">
            <Icon name="arrowUpRight" size={44} className="mg-rot" />
          </span>
        </div>
        <div className="footer__cards">
          {contacts.map((c) => (
            <div key={c.label} className={`footer__card${c.card ? ' mg-card' : ''}`}>
              <Icon name={c.icon} size={26} stroke="#D4583C" />
              <span className="footer__ctxt"><span className="footer__clabel">{c.label}</span><strong>{c.valeur}</strong></span>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <div className="footer__years"><span>20</span><Logo width={26} height={29} color="#FFF5E1" /><span>19</span></div>
          <nav aria-label="Liens légaux" className="footer__legal">
            <span className="mg-nav">Mentions légales</span>
            <span className="mg-nav">Honoraires</span>
            <span className="mg-nav">Accès propriétaire</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}
