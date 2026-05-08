import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * ImageCard
 * @param {string}  src         - Image source
 * @param {string}  alt         - Image alt text
 * @param {string}  title       - Card title
 * @param {string}  description - Card description (shown on hover)
 * @param {string}  href        - Link destination (internal route or external URL)
 * @param {boolean} external    - If true, opens in new tab
 * @param {string}  label       - CTA label (default: 'Learn More')
 * @param {string}  className   - Extra classes on the wrapper
 * @param {'square'|'portrait'|'landscape'} aspect - Aspect ratio (default: 'landscape')
 */
export default function ImageCard({
  src,
  alt,
  title,
  description,
  href,
  external = false,
  label = 'Learn More',
  className = '',
  aspect = 'landscape',
}) {
  const aspectMap = {
    square:    'aspect-square',
    portrait:  'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }

  const inner = (
    <div className={`group relative overflow-hidden rounded-xl w-full ${aspectMap[aspect]} ${className}`}>
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { e.target.src = '/placeholder.jpg' }}
      />

      {/* Default gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Default title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-3">
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-golf-green/85 flex flex-col items-center justify-center px-6 text-center
                   opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-400"
      >
        <div className="w-8 h-0.5 bg-golf-gold mb-4" />
        <h3 className="font-heading text-xl font-bold text-white mb-3">{title}</h3>
        {description && (
          <p className="font-body text-gray-200 text-sm leading-relaxed mb-5">{description}</p>
        )}
        {href && (
          <span
            className="inline-block px-5 py-2 border border-golf-gold text-golf-gold font-body text-xs tracking-widest uppercase
                       hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 rounded-sm"
          >
            {label} {external ? '↗' : '→'}
          </span>
        )}
      </div>
    </div>
  )

  if (!href) return <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>{inner}</motion.div>

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="block"
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={href} className="block">
        {inner}
      </Link>
    </motion.div>
  )
}
