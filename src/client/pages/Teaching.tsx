import TeachingSection from '../components/commissions/TeachingSection.tsx'
import { usePageMeta } from '../hooks/usePageMeta.ts'

function Teaching() {
  usePageMeta({
    title: 'Drawing for Absolutely Terrified — Tanya Larin',
    description: 'Learn to draw with Tanya Larin. An introductory course for absolute beginners covering drawing mediums, composition, perspective, figure drawing, and more.',
  })

  return <TeachingSection full />
}

export default Teaching
