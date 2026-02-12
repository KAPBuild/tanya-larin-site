import ContactForm from '../components/contact/ContactForm.tsx'
import FadeIn from '../components/ui/FadeIn.tsx'
import { usePageMeta } from '../hooks/usePageMeta.ts'

function Contact() {
  usePageMeta({
    title: 'Contact — Tanya Larin',
    description: 'Get in touch with Tanya Larin for portrait commissions, art lessons, or general inquiries. Email, phone, and contact form available.',
  })

  return (
    <section className="contact-page">
      <div className="container">
        <FadeIn>
          <div className="contact-header">
            <h1>Contact</h1>
            <p className="lead">
              Interested in a commission, have questions about lessons, or just want to say hello?
              I'd love to hear from you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="contact-layout">
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>

            <aside className="contact-info">
              <div className="contact-info-block">
                <h3>Email</h3>
                <a href="mailto:tanyalarin@yahoo.com">tanyalarin@yahoo.com</a>
              </div>

              <div className="contact-info-block">
                <h3>Phone</h3>
                <span>518.432.8446</span>
              </div>

              <div className="contact-info-block">
                <h3>Fax</h3>
                <span>516.706.2499</span>
              </div>

              <div className="contact-info-block">
                <h3>Memberships</h3>
                <p>The Portrait Society of America</p>
                <p>The American Society of Portrait Artists</p>
              </div>
            </aside>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Contact
