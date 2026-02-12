import { useState, type FormEvent } from 'react'

interface InquiryFormProps {
  defaultSubject?: string
}

function InquiryForm({ defaultSubject }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: defaultSubject || '',
    budget: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setFormData({ name: '', email: '', serviceType: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h3>Thank you for your inquiry!</h3>
        <p>Tanya will review your message and get back to you soon.</p>
      </div>
    )
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} id="inquiry">
      <h2 className="form-title">Make an Inquiry</h2>

      <div className="form-group">
        <label htmlFor="inquiry-name">Name</label>
        <input
          id="inquiry-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="inquiry-email">Email</label>
        <input
          id="inquiry-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="inquiry-service">Service Type</label>
        <select
          id="inquiry-service"
          required
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
        >
          <option value="">Select a service...</option>
          <option value="Head and Shoulders Portrait">Head and Shoulders Portrait</option>
          <option value="Bust or Waist Portrait">Bust or Waist Portrait</option>
          <option value="3/4 Body Portrait">3/4 Body Portrait</option>
          <option value="Full Length Portrait">Full Length Portrait</option>
          <option value="Teaching / Lessons">Teaching / Lessons</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="inquiry-budget">Budget Range (optional)</label>
        <input
          id="inquiry-budget"
          type="text"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="inquiry-message">Message</label>
        <textarea
          id="inquiry-message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {status === 'error' && (
        <p className="form-error">Something went wrong. Please try again or email Tanya directly.</p>
      )}

      <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}

export default InquiryForm
