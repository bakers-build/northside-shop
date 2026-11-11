import { renderToString } from 'react-dom/server'
import { expect, test } from 'vitest'
import App from './App.jsx'
import Contact from './Contact.jsx'

const shop = {
  name: 'Test Bakery',
  claim: 'Bread.',
  address: { street: '1 Test Street', city: 'Testville' },
  phone: '+49 30 0000 0000',
  email: 'shop@bakery.example',
}

test('the contact page shows the address', () => {
  const html = renderToString(<Contact shop={shop} />)
  expect(html).toContain('1 Test Street')
  expect(html).toContain('Testville')
})

test('the contact page links the phone number and the e-mail address', () => {
  const html = renderToString(<Contact shop={shop} />)
  expect(html).toContain('href="tel:+493000000000"')
  expect(html).toContain('href="mailto:shop@bakery.example"')
})

test('the app opens on the home page and marks it in the navigation', () => {
  const html = renderToString(<App shop={shop} />)
  expect(html).toContain('Bread.')
  expect(html).toMatch(/aria-current="page"[^>]*>Home</)
})
