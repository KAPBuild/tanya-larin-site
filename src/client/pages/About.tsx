import { Link } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn.tsx'
import { usePageMeta } from '../hooks/usePageMeta.ts'

function About() {
  usePageMeta({
    title: 'About — Tanya Larin',
    description: 'Tanya Larin is a Russian-born fine artist, graduate of the College of Art in Yaroslavl, with work exhibited in European galleries and collections worldwide.',
  })

  return (
    <section className="about-page">
      <div className="container">
        <FadeIn>
          <div className="about-hero">
            <div className="about-photo-wrapper">
              <img
                src="/images/about/tanya_with_husband(Christoph).jpg"
                alt="Tanya Larin"
                className="about-photo"
                loading="lazy"
              />
            </div>
            <div className="about-intro">
              <h1>About the Artist</h1>
              <p className="lead">
                Tanya, a Russian-born artist, is a graduate of the College of Art
                in Yaroslavl with a Bachelor's Degree in Art.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="about-body text-container">
            <p>
              Afterwards, she attended an Old Russian Icon paintings workshop in the
              famous old Tolga monastery on Volga River and is now an expert in this field.
            </p>
            <p>
              To further develop her artistic skills, Tanya studied the original paintings
              of old Italian Masters in European Museums of Art and painted copies of some.
              Her art reflects the influence of this work. Regularly experimenting with
              techniques and colors, Tanya takes inspiration from bright and romantic
              paintings of the nineteenth and early twentieth century.
            </p>
            <p>
              Tanya's still-life compositions, portraits and allegorical paintings have been
              exhibited in European galleries. Her work is in national and private collections
              in the USA, Germany, Austria, Poland, Portugal and Russia.
            </p>
            <p>
              Tanya is currently a member of The Portrait Society of America and
              The American Society of Portrait Artists.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="about-services text-container">
            <h2>Working with Tanya</h2>
            <p>
              Tanya accepts portrait commissions in oil on linen canvas, from intimate
              head-and-shoulders studies to commanding full-length works. She also teaches
              an introductory drawing course for absolute beginners.
            </p>
            <div className="about-services-links">
              <Link to="/commissions" className="btn btn--outline">
                View Commissions &amp; Pricing
              </Link>
              <Link to="/teaching" className="btn btn--outline">
                Explore the Drawing Course
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default About
