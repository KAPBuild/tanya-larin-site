const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Tanya visits your location to take reference photos together, exploring composition, pose, and lighting through Polaroid studies.',
  },
  {
    number: '02',
    title: 'Approval',
    description: 'From the reference photos, you decide together on the look of the final painting. For complex compositions, a small oil study is presented for approval.',
  },
  {
    number: '03',
    title: 'Creation',
    description: 'The portrait is painted in oil on linen canvas using only the finest art materials. Completion typically takes 1–3 months depending on size.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'The finished work is delivered to you. Framing recommendations are available upon request.',
  },
]

function ProcessSteps() {
  return (
    <div className="process-steps">
      <h2 className="process-steps-title">The Process</h2>
      <div className="process-steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <span className="process-step-number">{step.number}</span>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProcessSteps
