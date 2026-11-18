import { renderToString } from 'react-dom/server'
import { expect, test } from 'vitest'
import App from './App.jsx'
import Contact from './Contact.jsx'
import shopData from './shop.json'

const shop = {
  name: 'Test Bakery',
  claim: 'Bread.',
  address: { street: '1 Test Street', city: 'Testville' },
  phone: '+49 30 0000 0000',
  email: 'shop@bakery.example',
  openingHours: [
    { day: 'Monday', hours: '08:00–17:00' },
    { day: 'Saturday', hours: '09:00–12:00' },
    { day: 'Sunday', hours: null },
  ],
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

test('the contact page lists the opening hours per day', () => {
  const html = renderToString(<Contact shop={shop} />)
  expect(html).toContain('>Opening hours</h2>')
  expect(html).toContain('<dt>Monday</dt><dd>08:00–17:00</dd>')
  expect(html).toContain('<dt>Saturday</dt><dd>09:00–12:00</dd>')
  expect(html.indexOf('Monday')).toBeLessThan(html.indexOf('Saturday'))
  expect(html.indexOf('Saturday')).toBeLessThan(html.indexOf('Sunday'))
})

test('the contact page lists Sunday as closed', () => {
  const html = renderToString(<Contact shop={shop} />)
  expect(html).toContain('<dt>Sunday</dt><dd>Closed</dd>')
})

test('the shop data holds the requested opening hours', () => {
  expect(shopData.openingHours).toEqual([
    { day: 'Monday', hours: '07:00–18:00' },
    { day: 'Tuesday', hours: '07:00–18:00' },
    { day: 'Wednesday', hours: '07:00–18:00' },
    { day: 'Thursday', hours: '07:00–18:00' },
    { day: 'Friday', hours: '07:00–18:00' },
    { day: 'Saturday', hours: '07:00–13:00' },
    { day: 'Sunday', hours: null },
  ])
})
