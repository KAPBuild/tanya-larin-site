import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Tanya Larin</Link>
          <p className="footer-tagline">Fine Art &amp; Portraits</p>
        </div>

        <div className="footer-contact">
          <a href="mailto:tanyalarin@yahoo.com">tanyalarin@yahoo.com</a>
          <span>518.432.8446</span>
        </div>

        <div className="footer-legal">
          <p>&copy; {new Date().getFullYear()} Tanya Larin. All rights reserved.</p>
          <p className="footer-memberships">
            Member of The Portrait Society of America &amp; The American Society of Portrait Artists
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
