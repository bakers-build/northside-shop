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
    </section>
  )
}
