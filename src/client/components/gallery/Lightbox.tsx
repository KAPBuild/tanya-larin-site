import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useScrollLock } from '../../hooks/useScrollLock.ts'
import type { ArtworkItem } from '../../data/portfolio.ts'

interface LightboxProps {
  artworks: ArtworkItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ artworks, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const artwork = artworks[currentIndex]

  useScrollLock(true)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        onPrev()
        break
      case 'ArrowRight':
        onNext()
        break
    }
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!artwork) return null

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={artwork.title}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          &times;
        </button>

        <button
          className="lightbox-nav lightbox-nav--prev"
          onClick={onPrev}
          aria-label="Previous artwork"
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>

        <div className="lightbox-image-wrapper">
          <img
            src={artwork.image}
            alt={`${artwork.title}${artwork.medium ? ` — ${artwork.medium}` : ''}`}
            className="lightbox-image"
          />
        </div>

        <button
          className="lightbox-nav lightbox-nav--next"
          onClick={onNext}
          aria-label="Next artwork"
          disabled={currentIndex === artworks.length - 1}
        >
          &#8250;
        </button>

        <div className="lightbox-info">
          <h3 className="lightbox-title">{artwork.title}</h3>
          <div className="lightbox-meta">
            <span className="lightbox-category">{artwork.category}</span>
            {artwork.medium && <span className="lightbox-medium">{artwork.medium}</span>}
            {artwork.dimensions && <span className="lightbox-dimensions">{artwork.dimensions}</span>}
          </div>
          {artwork.description && (
            <p className="lightbox-description">{artwork.description}</p>
          )}
          <span className="lightbox-counter">
            {currentIndex + 1} / {artworks.length}
          </span>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Lightbox
