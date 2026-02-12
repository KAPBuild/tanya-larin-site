import { useState, useMemo, useCallback } from 'react'
import { artworks } from '../data/portfolio.ts'
import CategoryFilter from '../components/gallery/CategoryFilter.tsx'
import GalleryGrid from '../components/gallery/GalleryGrid.tsx'
import Lightbox from '../components/gallery/Lightbox.tsx'
import FadeIn from '../components/ui/FadeIn.tsx'
import { usePageMeta } from '../hooks/usePageMeta.ts'

function Portfolio() {
  usePageMeta({
    title: 'Portfolio — Tanya Larin',
    description: 'Browse Tanya Larin\'s portfolio of fine art across six categories: allegorical paintings, illustration, jewelry, portraits, pottery, and still life.',
  })

  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return artworks
    return artworks.filter((a) => a.category === activeCategory)
  }, [activeCategory])

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const handleNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null && i < filtered.length - 1 ? i + 1 : i
    )
  }, [filtered.length])

  return (
    <section className="portfolio-page">
      <div className="container">
        <FadeIn>
          <div className="portfolio-header">
            <h1>Portfolio</h1>
            <p className="lead">
              Work spanning painting, illustration, ceramics, jewelry, and more.
            </p>
          </div>
        </FadeIn>

        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <GalleryGrid artworks={filtered} onItemClick={setLightboxIndex} />
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          artworks={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}

export default Portfolio
