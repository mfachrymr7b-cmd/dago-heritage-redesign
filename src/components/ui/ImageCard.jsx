import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * ImageCard — image with hover overlay
 * @param {string} src
 * @param {string} alt
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {boolean} external
 * @param {string} label       - CTA label
 * @param {'square'|'portrait'|'landscape'} aspect
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
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-golf-green/85 flex flex-col items-center justify-center px-6 text-center
                      opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300">
        <div className="w-8 h-0.5 bg-golf-gold mb-4" />
        <h3 className="font-heading text-xl font-bold text-white mb-3">{title}</h3>
        {description && (
          <p className="font-body text-gray-200 text-sm leading-relaxed mb-5">{description}</p>
        )}
        {href && (
          <span className="inline-block px-5 py-2 border border-golf-gold text-golf-gold font-body text-xs tracking-widest uppercase
                           hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 rounded-sm">
            {label} {external ? '↗' : '→'}
          </span>
        )}
      </div>
    </div>
  )

  if (!href) return <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>{inner}</motion.div>

  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer"
        whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="block">
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Link to={href} className="block">{inner}</Link>
    </motion.div>
  )
}
