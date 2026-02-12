import type { ReactNode, CSSProperties } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.ts'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const { ref, isVisible } = useIntersectionObserver()

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {}

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'fade-in--visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default FadeIn
