import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    } else {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      meta.setAttribute('content', description)
      document.head.appendChild(meta)
    }
  }, [title, description])
}
