import type { ArtworkItem } from '../../data/portfolio.ts'
import GalleryItem from './GalleryItem.tsx'

interface GalleryGridProps {
  artworks: ArtworkItem[]
  onItemClick: (index: number) => void
}

function GalleryGrid({ artworks, onItemClick }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {artworks.map((artwork, index) => (
        <GalleryItem
          key={artwork.id}
          artwork={artwork}
          onClick={() => onItemClick(index)}
        />
      ))}
    </div>
  )
}

export default GalleryGrid
