import { useState } from 'react'
import Contact from './Contact.jsx'
import Home from './Home.jsx'

const PAGES = { home: 'Home', contact: 'Contact' }

export default function App({ shop, start = 'home' }) {
  const [page, setPage] = useState(start)
  return (
    <>
      <header>
        <strong>{shop.name}</strong>
        <nav aria-label="Main">
          {Object.entries(PAGES).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-current={page === id ? 'page' : undefined}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <main>{page === 'contact' ? <Contact shop={shop} /> : <Home shop={shop} />}</main>
    </>
  )
}
