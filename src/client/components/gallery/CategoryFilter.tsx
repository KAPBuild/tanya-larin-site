import { categories } from '../../data/portfolio.ts'

interface CategoryFilterProps {
  active: string
  onChange: (category: string) => void
}

const filterOptions = ['All', ...categories]

function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter by category">
      {filterOptions.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`category-filter-btn ${active === cat ? 'category-filter-btn--active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
