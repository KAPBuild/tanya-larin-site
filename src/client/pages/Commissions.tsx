import { services, commissionProcess } from '../data/services.ts'
import ServiceCard from '../components/commissions/ServiceCard.tsx'
import ProcessSteps from '../components/commissions/ProcessSteps.tsx'
import InquiryForm from '../components/commissions/InquiryForm.tsx'
import TeachingSection from '../components/commissions/TeachingSection.tsx'
import FadeIn from '../components/ui/FadeIn.tsx'
import { usePageMeta } from '../hooks/usePageMeta.ts'

function Commissions() {
  usePageMeta({
    title: 'Commissions — Tanya Larin',
    description: 'Commission a portrait by Tanya Larin. Oil on linen canvas, from head-and-shoulders ($2,700) to full-length ($7,000). View pricing, process, and inquire.',
  })

  const portraitCategory = services[0]

  return (
    <section className="commissions-page">
      <div className="container">
        <FadeIn>
          <div className="commissions-header">
            <h1>Commissions</h1>
            <p className="lead">{commissionProcess.overview}</p>
          </div>
        </FadeIn>

        {portraitCategory && (
          <FadeIn>
            <div className="commissions-services">
              <h2>{portraitCategory.title}</h2>
              <p className="commissions-services-desc">{portraitCategory.description}</p>

              <div className="service-cards-grid">
                {portraitCategory.tiers.map((tier) => (
                  <ServiceCard key={tier.id} tier={tier} />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn>
          <div className="commissions-notes text-container">
            <h3>Additional Information</h3>
            <ul className="commissions-notes-list">
              {commissionProcess.additionalNotes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
            <p className="commissions-payment-terms">
              <strong>Payment:</strong> {commissionProcess.paymentTerms}
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <ProcessSteps />
        </FadeIn>

        <FadeIn>
          <div className="commissions-inquiry">
            <InquiryForm />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="commissions-teaching-teaser">
            <h2>Also Teaching</h2>
            <TeachingSection />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Commissions
