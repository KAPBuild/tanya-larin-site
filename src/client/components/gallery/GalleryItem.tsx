import type { ArtworkItem } from '../../data/portfolio.ts'

interface GalleryItemProps {
  artwork: ArtworkItem
  onClick: () => void
}

function GalleryItem({ artwork, onClick }: GalleryItemProps) {
  return (
    <button
      className="gallery-item"
      onClick={onClick}
      aria-label={`View ${artwork.title}`}
      type="button"
    >
      <div className="gallery-item-image-wrapper">
        <img
          src={artwork.image}
          alt={`${artwork.title}${artwork.medium ? ` — ${artwork.medium}` : ''}`}
          loading="lazy"
          className="gallery-item-image"
        />
        <div className="gallery-item-overlay">
          <span className="gallery-item-view">View</span>
        </div>
      </div>
      <div className="gallery-item-info">
        <h3 className="gallery-item-title">{artwork.title}</h3>
        <span className="gallery-item-category">{artwork.category}</span>
      </div>
    </button>
  )
}

export default GalleryItem
