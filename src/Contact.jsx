import { Fragment } from 'react'

export default function Contact({ shop }) {
  return (
    <section>
      <h1>Contact</h1>
      <address>
        {shop.address.street}
        <br />
        {shop.address.city}
      </address>
      <p>
        <a href={`tel:${shop.phone.replaceAll(' ', '')}`}>{shop.phone}</a>
        <br />
        <a href={`mailto:${shop.email}`}>{shop.email}</a>
      </p>
      <h2>Opening hours</h2>
      <dl>
        {shop.openingHours.map(({ day, hours }) => (
          <Fragment key={day}>
            <dt>{day}</dt>
            <dd>{hours ?? 'Closed'}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  )
}
