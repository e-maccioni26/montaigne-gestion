import Icon, { type IconName } from './Icon'
import Logo from './Logo'
import { useCountUp } from '../hooks/useCountUp'
import './Agence.css'

const points: { icon: IconName; titre: string; texte: string }[] = [
  { icon: 'pin', titre: 'Ancrés dans le quartier', texte: "Une adresse avenue Montaigne et une connaissance fine de Paris et de l'Ouest parisien." },
  { icon: 'key', titre: 'Location, vente et gestion', texte: 'Un seul cabinet pour trouver, céder ou faire gérer vos locaux.' },
  { icon: 'doc', titre: 'Des dossiers suivis de près', texte: 'Visites, négociation, bail : nous restons à vos côtés à chaque étape.' },
]

function Stat({ target, label }: { target: number; label: string }) {
  const [ref, n] = useCountUp<HTMLDivElement>(target)
  return <div ref={ref}><div className="agence__n">{n}</div><div className="agence__l">{label}</div></div>
}

export default function Agence() {
  return (
    <section id="agence" className="agence container section-pad" aria-labelledby="agence-titre">
      <div className="agence__photo mg-reveal">
        <div className="agence__img">
          <img src="/images/rdv-agence.jpg" alt="Visite d'un appartement haussmannien avec une conseillère" loading="lazy" />
        </div>
        <div className="agence__badge mg-float">
          <span>20</span><Logo width={36} height={40} color="#22312E" /><span>19</span>
        </div>
      </div>
      <div className="agence__txt">
        <div className="eyebrow mg-reveal">L'AGENCE</div>
        <h2 id="agence-titre" className="h2 mg-reveal">Un cabinet indépendant au cœur du 8e arrondissement</h2>
        <p className="agence__lead mg-reveal">Nous connaissons les rues, les immeubles et les loyers du quartier. Chaque dossier est suivi de près, du premier appel à la remise des clés.</p>
        <div className="agence__points mg-reveal">
          {points.map((p) => (
            <div key={p.titre} className="agence__point">
              <span className="agence__pico"><Icon name={p.icon} /></span>
              <span className="agence__ptxt"><strong>{p.titre}</strong>{p.texte}</span>
            </div>
          ))}
        </div>
        <div className="agence__stats mg-reveal">
          <Stat target={15} label="annonces en ligne" />
          <Stat target={12} label="secteurs couverts" />
          <div><div className="agence__n">2019</div><div className="agence__l">année de création</div></div>
        </div>
      </div>
    </section>
  )
}
