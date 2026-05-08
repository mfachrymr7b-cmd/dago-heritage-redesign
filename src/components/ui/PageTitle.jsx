import { useEffect } from 'react'

/**
 * PageTitle — sets document.title for each page
 * @param {string} title - Page-specific title (e.g. "Golf Course")
 * @param {string} site  - Site name suffix (default: "Dago Heritage 1917")
 */
export default function PageTitle({ title, site = 'Dago Heritage 1917' }) {
  useEffect(() => {
    document.title = title ? `${title} | ${site}` : site
    return () => {
      document.title = site
    }
  }, [title, site])

  return null
}
