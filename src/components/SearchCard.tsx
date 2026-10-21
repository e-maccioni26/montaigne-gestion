import { useState } from 'react'
import Icon, { type IconName } from './Icon'
import './SearchCard.css'

type Tx = 'loc' | 'achat'

const champs: { icon: IconName; label: string; options: string[] }[] = [
  { icon: 'building', label: 'TYPE DE BIEN', options: ['Tous les types', 'Bureaux', 'Local commercial', 'Local professionnel', 'Entrepôt', 'Parking'] },
  { icon: 'pin', label: 'SECTEUR', options: ['Toutes les villes', 'Paris 8e', 'Paris 2e', 'Neuilly-sur-Seine', 'Boulogne-Billancourt'] },
]

export default function SearchCard() {
  const [tx, setTx] = useState<Tx>('loc')

  return (
    <div className="search mg-up d3">
      <div role="tablist" aria-label="Type de transaction" className="search__tabs">
        {([['loc', 'Location'], ['achat', 'Achat']] as const).map(([id, label]) => (
          <button key={id} type="button" role="tab" aria-selected={tx === id}
            className={`search__tab${tx === id ? ' is-active' : ''}`} onClick={() => setTx(id)}>
            {label}
          </button>
        ))}
      </div>
      <form className="search__form" onSubmit={(e) => e.preventDefault()}>
        {champs.map((c) => (
          <label key={c.label} className="search__field" style={{ flex: '1 1 200px' }}>
            <Icon name={c.icon} size={22} stroke="#B8462D" />
            <span className="search__col">
              <span className="search__label">{c.label}</span>
              <select className="search__input">
                {c.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </span>
          </label>
        ))}
        <label className="search__field" style={{ flex: '1 1 180px' }}>
          <Icon name="tag" size={22} stroke="#B8462D" />
          <span className="search__col">
            <span className="search__label">BUDGET MAX</span>
            <input type="text" inputMode="numeric" className="search__input" style={{ width: '100%' }}
              placeholder={tx === 'loc' ? 'ex. 10 000 € / mois' : 'ex. 500 000 €'} />
          </span>
        </label>
        <span className="search__submit mg-btn fake-link">
          <Icon name="search" size={20} strokeWidth={2} />
          Rechercher
        </span>
      </form>
    </div>
  )
}
