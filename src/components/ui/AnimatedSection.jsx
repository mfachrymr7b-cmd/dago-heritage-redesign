import { motion } from 'framer-motion'

/**
 * AnimatedSection — wrapper that fades/slides in when entering viewport
 * @param {React.ReactNode} children
 * @param {number}              delay     - Animation delay in seconds (default: 0)
 * @param {'up'|'down'|'left'|'right'} direction - Slide direction (default: 'up')
 * @param {number}              distance  - Slide distance in px (default: 32)
 * @param {number}              duration  - Animation duration in seconds (default: 0.6)
 * @param {string}              className - Extra Tailwind classes on the wrapper
 * @param {boolean}             once      - Only animate once (default: true)
 */
export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  distance = 32,
  duration = 0.6,
  className = '',
  once = true,
}) {
  const directionMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  }

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
