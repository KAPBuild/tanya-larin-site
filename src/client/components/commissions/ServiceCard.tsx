import type { ServiceTier } from '../../data/services.ts'

interface ServiceCardProps {
  tier: ServiceTier
}

function ServiceCard({ tier }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h3 className="service-card-name">{tier.name}</h3>
      <p className="service-card-description">{tier.description}</p>
      <div className="service-card-price">
        <span className="service-card-price-label">Starting at</span>
        <span className="service-card-price-amount">
          ${tier.startingPrice.toLocaleString()}
        </span>
        <span className="service-card-canvas">{tier.canvasSize}</span>
      </div>
      <ul className="service-card-features">
        {tier.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <a href="#inquiry" className="btn btn--outline service-card-btn">
        Inquire
      </a>
    </div>
  )
}

export default ServiceCard
