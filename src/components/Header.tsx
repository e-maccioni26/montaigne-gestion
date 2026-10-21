import Logo from './Logo'
import Icon from './Icon'
import './Header.css'

export default function Header() {
  return (
    <header className="header container">
      <div className="header__brand fake-link">
        <Logo width={30} height={34} color="#FFF5E1" />
        <span className="header__name">MONTAIGNE GESTION</span>
      </div>
      <nav aria-label="Navigation principale" className="header__nav">
        <span className="mg-nav">Annonces</span>
        <span className="mg-nav">L'agence</span>
        <span className="mg-nav">Services</span>
        <span className="mg-nav">Contact</span>
      </nav>
      <div className="header__actions">
        <span className="header__tel fake-link"><Icon name="phone" size={18} />01 88 40 27 94</span>
        <span className="btn btn--creme mg-btn">
          Estimation gratuite
          <Icon name="arrow" size={18} strokeWidth={2} className="mg-arrow" />
        </span>
      </div>
    </header>
  )
}
