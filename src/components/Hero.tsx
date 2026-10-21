import Header from './Header'
import SearchCard from './SearchCard'
import Icon from './Icon'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titre">
      <img className="hero__bg" src="/images/avenue-montaigne.jpg" alt="" />
      <div className="hero__veil" aria-hidden="true" />
      <Header />
      <div className="hero__body container">
        <div className="hero__eyebrow eyebrow mg-up">
          <span className="mg-pulse hero__dot" />IMMOBILIER D'ENTREPRISE · PARIS 8E
        </div>
        <h1 id="hero-titre" className="hero__title mg-up d1">Le bon local,<br />au bon endroit.</h1>
        <p className="hero__sub mg-up d2">
          Bureaux, commerces et locaux professionnels à Paris et dans l'Ouest parisien. Location, vente et gestion depuis l'avenue Montaigne.
        </p>
        <SearchCard />
      </div>
      <div className="hero__addr mg-float">
        <span className="hero__addr-ico"><Icon name="pin" size={22} /></span>
        <span className="hero__addr-txt"><strong>11 avenue Montaigne</strong><br />75008 Paris</span>
      </div>
    </section>
  )
}
