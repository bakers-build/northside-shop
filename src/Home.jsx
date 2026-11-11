export default function Home({ shop }) {
  return (
    <section>
      <h1>{shop.name}</h1>
      <p>{shop.claim}</p>
    </section>
  )
}
