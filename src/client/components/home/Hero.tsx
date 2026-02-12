import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img
          src="/images/portfolio/allegorical/Dream_24x20_oil_14k_Gold_Leaf_on_Canvas_Long_Island_Art_Society_Award_2003.jpg"
          alt="Dream — oil and 14k gold leaf on canvas by Tanya Larin, Long Island Art Society Award 2003"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content container">
        <h1 className="hero-title">Tanya Larin</h1>
        <p className="hero-subtitle">Fine Art &amp; Portraits</p>
        <Link to="/portfolio" className="hero-cta">
          View the Collection
        </Link>
      </div>
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

export default Hero
