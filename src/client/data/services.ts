export interface ServiceTier {
  id: string
  name: string
  description: string
  startingPrice: number
  canvasSize: string
  features: string[]
  stripePriceId?: string
  stripeProductId?: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  tiers: ServiceTier[]
}

export const commissionProcess = {
  overview: 'For portrait composition I prefer to come to the client\'s location and take the photos which I feel would contribute to the most attractive painting. At first we will be taking Polaroids to create a general idea of composition, pose and lighting. From these reference photos, we will decide together on the look of the final painting. Once this is decided, we will take quality photos of this composition and photos of every important detail as reference for the painting.',
  smallPortraitNote: 'For smaller portraits (head or head and shoulders without background composition), it is possible to use amateur photos of good quality, but professional photos are better, if possible.',
  largePortraitNote: 'For larger group portraits, or portraits with complex composition, a small study in oil will be presented to you for approval before painting commences.',
  process: 'The final portrait is then undertaken, painted in oil on linen canvas. Only the best quality art materials are used for the painting. Generally, portrait paintings are completed within 1–3 months, depending on size. Upon request, framing recommendations can be given.',
  paymentTerms: 'One-third deposit is required with signed contract. The balance is due at the time of delivery.',
  additionalNotes: [
    'Prices are for one subject.',
    'There is a 20% discount for each additional subject, whether on the same canvas or separate.',
    'There are additional charges for detailed background and environments.',
    'Pets on same piece are 20% extra.',
    'Price does not include travel, shipping, frame or sales tax if applicable.',
  ],
}

export const services: ServiceCategory[] = [
  {
    id: 'portraits',
    title: 'Portrait Commissions',
    description: 'Life-size portrait paintings in oil on linen canvas, using only the finest art materials. Each portrait is a collaboration — from the initial photo session to the finished work.',
    tiers: [
      {
        id: 'head-shoulders',
        name: 'Head and Shoulders',
        description: 'A classic head and shoulders portrait capturing likeness and personality.',
        startingPrice: 2700,
        canvasSize: '22" x 26"',
        features: [
          'Oil on linen canvas',
          'Photo session at your location',
          'Completed in 1–3 months',
          'Framing recommendations available',
        ],
      },
      {
        id: 'bust-waist',
        name: 'Bust or to Waist',
        description: 'A more expansive portrait from bust to waist, allowing for greater expression and detail.',
        startingPrice: 4500,
        canvasSize: '28" x 34"',
        features: [
          'Oil on linen canvas',
          'Photo session at your location',
          'Completed in 1–3 months',
          'Framing recommendations available',
        ],
      },
      {
        id: 'three-quarter',
        name: '3/4 Body',
        description: 'A three-quarter body portrait, ideal for capturing posture and environment.',
        startingPrice: 5500,
        canvasSize: '32" x 38"',
        features: [
          'Oil on linen canvas',
          'Photo session at your location',
          'Oil study for approval (complex compositions)',
          'Completed in 1–3 months',
        ],
      },
      {
        id: 'full-length',
        name: 'Full Length',
        description: 'A commanding full-length portrait — the grand tradition of fine art portraiture.',
        startingPrice: 7000,
        canvasSize: '42" x 65"',
        features: [
          'Oil on linen canvas',
          'Photo session at your location',
          'Oil study for approval',
          'Completed in 1–3 months',
        ],
      },
    ],
  },
]
