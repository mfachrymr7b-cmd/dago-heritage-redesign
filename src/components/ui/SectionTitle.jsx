import { motion } from 'framer-motion'

/**
 * SectionTitle
 * @param {string} title
 * @param {string} subtitle    - Small label above title
 * @param {string} description - Paragraph below title
 * @param {'left'|'center'} align
 * @param {'dark'|'light'} theme - 'dark' = white text, 'light' = green text
 */
export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  theme = 'light',
}) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <motion.div
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {subtitle && (
        <p className={`font-body text-xs tracking-[0.3em] uppercase mb-3 ${isDark ? 'text-golf-gold' : 'text-golf-green'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold leading-snug mb-4 ${isDark ? 'text-white' : 'text-golf-green'}`}>
        {title}
      </h2>
      <div className={`h-0.5 w-12 bg-golf-gold ${isCenter ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`font-body text-sm md:text-base leading-relaxed mt-5 max-w-2xl ${isCenter ? 'mx-auto' : ''} ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
