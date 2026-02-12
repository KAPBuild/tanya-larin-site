import { Link } from 'react-router-dom'
import { teachingCourse } from '../../data/teaching.ts'

interface TeachingSectionProps {
  full?: boolean
}

function TeachingSection({ full = false }: TeachingSectionProps) {
  if (!full) {
    return (
      <div className="teaching-teaser">
        <h3 className="teaching-teaser-title">{teachingCourse.title}</h3>
        <p>{teachingCourse.description.split('.').slice(0, 2).join('.') + '.'}</p>
        <div className="teaching-teaser-actions">
          <Link to="/teaching" className="btn btn--outline">
            Learn More
          </Link>
          <a
            href={teachingCourse.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="teaching-pdf-link"
          >
            Download Course PDF
          </a>
        </div>
      </div>
    )
  }

  return (
    <section className="teaching-page">
      <div className="container">
        <div className="teaching-header">
          <h1>{teachingCourse.title}</h1>
          <p className="lead">{teachingCourse.audience}</p>
        </div>

        <div className="teaching-overview text-container">
          <h2>Course Overview</h2>
          <p>{teachingCourse.description}</p>
          <p>
            Taught at {teachingCourse.location}, this {teachingCourse.format.toLowerCase()} course
            spans {teachingCourse.duration} of guided instruction, taking students from the very
            basics through to confident, independent drawing.
          </p>
        </div>

        <div className="teaching-highlights">
          <h2>What You'll Learn</h2>
          <div className="teaching-highlights-grid">
            {teachingCourse.highlights.map((item, i) => (
              <div key={i} className="teaching-highlight-item">
                <span className="teaching-highlight-number">{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="teaching-curriculum">
          <h2>Lesson Plan</h2>
          <div className="teaching-lessons">
            {teachingCourse.lessons.map((lesson, i) => (
              <div key={i} className="teaching-lesson">
                <span className="teaching-lesson-number">Lesson {i + 1}</span>
                <p>{lesson}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="teaching-details-grid">
          <div className="teaching-detail">
            <h3>Format</h3>
            <p>{teachingCourse.format}</p>
          </div>
          <div className="teaching-detail">
            <h3>Duration</h3>
            <p>{teachingCourse.duration}</p>
          </div>
          <div className="teaching-detail">
            <h3>Prerequisites</h3>
            <p>{teachingCourse.prerequisites || 'None — all skill levels welcome'}</p>
          </div>
          <div className="teaching-detail">
            <h3>Location</h3>
            <p>{teachingCourse.location}</p>
          </div>
        </div>

        <div className="teaching-pdf-section">
          <div className="teaching-pdf-card">
            <h3>Full Course Description</h3>
            <p>Download the complete course syllabus with detailed lesson plans and objectives.</p>
            <div className="teaching-pdf-actions">
              <a
                href={teachingCourse.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                View PDF
              </a>
              <a
                href={teachingCourse.pdfUrl}
                download
                className="btn btn--primary"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="teaching-cta">
          <h2>Ready to Start Drawing?</h2>
          <p className="lead">
            No experience necessary. This course is designed for absolute beginners
            who want to build confidence and discover the joy of drawing.
          </p>
          <div className="teaching-cta-actions">
            <Link to="/contact" className="btn btn--primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeachingSection
