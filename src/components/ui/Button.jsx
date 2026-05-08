import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Button
 * @param {React.ReactNode} children
 * @param {'primary'|'secondary'|'outline'} variant
 * @param {string}   href      - Internal route (uses Link) or external URL
 * @param {boolean}  external  - If true, renders <a> with target="_blank"
 * @param {function} onClick
 * @param {string}   className - Extra Tailwind classes
 * @param {string}   size      - 'sm' | 'md' (default) | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  onClick,
  className = '',
  size = 'md',
  ...rest
}) {
  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-golf-green text-white border-2 border-golf-green hover:bg-golf-green/80',
    secondary:
      'bg-golf-gold text-dark-bg border-2 border-golf-gold hover:bg-golf-gold/80',
    outline:
      'bg-transparent text-golf-green border-2 border-golf-green hover:bg-golf-green hover:text-white',
  }

  const base = `inline-flex items-center justify-center gap-2 font-body font-semibold tracking-widest uppercase rounded-sm
    transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-golf-gold
    ${sizes[size] ?? sizes.md}
    ${variants[variant] ?? variants.primary}
    ${className}`

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  }

  // External link
  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        onClick={onClick}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    )
  }

  // Internal link
  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={href} className={base} onClick={onClick} {...rest}>
          {children}
        </Link>
      </motion.div>
    )
  }

  // Button
  return (
    <motion.button
      type="button"
      className={base}
      onClick={onClick}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
