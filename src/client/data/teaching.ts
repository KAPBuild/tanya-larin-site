export interface TeachingCourse {
  title: string
  description: string
  highlights: string[]
  format: string
  duration: string
  schedule?: string
  price: number
  prerequisites?: string
  audience: string
  pdfUrl: string
  location: string
  lessons: string[]
  stripePriceId?: string
  stripeProductId?: string
}

export const teachingCourse: TeachingCourse = {
  title: 'Drawing for Absolutely Terrified',
  description: 'This course is an introduction to the basic elements of drawing. Students will acquire a basic understanding of the process and a basic competence in developing basic knowledge and skills in drawing. This is a non-credit bearing class, and is therefore non-graded — the focus is on learning and building confidence.',
  highlights: [
    'Demonstrate basic drawing skills using a variety of mediums (graphite, charcoal, ink)',
    'Understand 2D vs. 3D drawing techniques',
    'Learn composition and proportion fundamentals',
    'Build volume using light, shadow, and halftones',
    'Produce line drawings of human figures and animals',
    'Learn basics of architectural drawing and perspective',
    'Introduction to sketching techniques and cartoons',
    'Develop confidence through practice and objective critique',
  ],
  format: 'In-person studio class',
  duration: '6 lessons',
  location: 'The Arts Center of the Capital Region, 265 River Street, Troy, New York 12180',
  price: 0,
  prerequisites: 'Please see program guide',
  audience: 'Absolute beginners — no prior drawing experience needed',
  pdfUrl: '/documents/tanya-larin-art-course.pdf',
  lessons: [
    'Use of Drawing Mediums — graphite, charcoal, ink, and other dry and wet mediums',
    'Composition and Proportions — relationships of size, form, balance, economy, movement, and space',
    'Building Volume with Light and Shadow — halftones, shadow techniques, line, shape, and volume',
    'Human Figure and Animals — constructing line drawings, static objects and objects in motion',
    'Drawings of Buildings and Perspective — architectural drawings and perspective basics',
    'Sketches and Introduction to Cartoons — sketching techniques and cartoon fundamentals',
  ],
}
