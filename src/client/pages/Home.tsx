import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.tsx'
import FeaturedWork from '../components/home/FeaturedWork.tsx'
import CallToAction from '../components/home/CallToAction.tsx'
import FadeIn from '../components/ui/FadeIn.tsx'
import { usePageMeta } from '../hooks/usePageMeta.ts'

function Home() {
  usePageMeta({
    title: 'Tanya Larin — Fine Art & Portraits',
    description: 'Tanya Larin is a Russian-born fine artist specializing in portraits, allegorical paintings, illustration, jewelry, pottery, and still life. Commissions available.',
  })

  return (
    <>
      <Hero />

      <FadeIn>
        <FeaturedWork />
      </FadeIn>

      <FadeIn>
        <CallToAction />
      </FadeIn>

      <FadeIn>
        <section className="home-artist">
          <div className="container">
            <img
              src="/images/about/Self_Portrait.jpg"
              alt="Self portrait of Tanya Larin — Portraits, Still Life & Allegorical Paintings, Pottery, Jewelry & Teaching"
              className="home-artist-image"
              loading="lazy"
            />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="home-intro">
          <div className="container text-container">
            <p className="lead">
              Tanya, a Russian-born artist, is a graduate of the College of Art in Yaroslavl.
              Her art reflects the influence of the old Italian Masters, whose original paintings
              she studied in European Museums of Art. Regularly experimenting with techniques and
              colors, Tanya takes inspiration from bright and romantic paintings of the nineteenth
              and early twentieth century.
            </p>
            <Link to="/about" className="intro-link">
              Learn more about Tanya &rarr;
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  )
}

export default Home
