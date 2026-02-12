import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-card">
            <h3 className="cta-card-title">Commission a Portrait</h3>
            <p className="cta-card-text">
              From intimate head-and-shoulders studies to commanding full-length portraits,
              each painting is a collaboration crafted in oil on linen canvas.
            </p>
            <Link to="/commissions" className="btn btn--primary">
              Learn About Commissions
            </Link>
          </div>

          <div className="cta-card">
            <h3 className="cta-card-title">Learn to Draw</h3>
            <p className="cta-card-text">
              &ldquo;Drawing for Absolutely Terrified&rdquo; — an introductory course
              for complete beginners. No prior experience needed.
            </p>
            <Link to="/teaching" className="btn btn--primary">
              Explore the Course
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
