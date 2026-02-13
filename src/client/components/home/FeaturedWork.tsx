import { Link } from 'react-router-dom'
import { artworks } from '../../data/portfolio.ts'

// Featured pieces in desired display order
const featuredIds = [
  'portraits-sasha',                    // Sasha - top
  'portraits-50-year-anniversary',      // 50 Year Anniversary - second
  'allegorical-dream',                  // Dream
  'illustration-couple-on-bench',       // Couple on Bench
  'jewelry-antique-gold-bracelet',      // Antique Gold Bracelet
  'pottery-dragons-incense',            // Dragons Incense
  'pottery-joker-mask',                 // Joker Mask
  'pottery-stitched-vase',              // Stitched Vase
  'still-life-rose-creatures',          // Rose and Creatures
  'still-life-cheese',                  // Still Life with Cheese
]

const featuredPieces = featuredIds
  .map(id => artworks.find(a => a.id === id))
  .filter((a): a is NonNullable<typeof a> => a !== undefined)

function FeaturedWork() {
  return (
    <section className="featured-work">
      <div className="container">
        <h2 className="featured-work-title">Selected Works</h2>
        <p className="featured-work-subtitle lead">
          Across painting, illustration, ceramics, and jewelry
        </p>

        <div className="featured-grid">
          {featuredPieces.map((piece) => (
            <Link
              key={piece.id}
              to="/portfolio"
              className="featured-item"
            >
              <div className="featured-item-image-wrapper">
                <img
                  src={piece.image}
                  alt={`${piece.title}${piece.medium ? ` — ${piece.medium}` : ''}`}
                  loading="lazy"
                  className="featured-item-image"
                />
              </div>
              <div className="featured-item-info">
                <h3 className="featured-item-title">{piece.title}</h3>
                <span className="featured-item-category">{piece.category}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured-work-cta">
          <Link to="/portfolio" className="btn btn--outline">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
