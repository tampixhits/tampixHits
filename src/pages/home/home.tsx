import "./home.css"

export function Home() {
  return (
    <section className="home">
      <section className="home__hero">
        <h2 className="home__title">Bem-vindo</h2>
        <p className="home__description">
          Texto de apresentação do artista.
        </p>
      </section>

      <section className="home__videos" id="videos">
        <h3 className="home__section-title">Vídeos</h3>
      </section>

      <section className="home__contact" id="contato">
        <h3 className="home__section-title">Contato</h3>
      </section>
    </section>
  )
}