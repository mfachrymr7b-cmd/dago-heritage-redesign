import { motion } from 'framer-motion'

/**
 * AnimatedSection — fade/slide in on viewport entry
 * @param {React.ReactNode} children
 * @param {number} delay
 * @param {'up'|'down'|'left'|'right'} direction
 * @param {number} distance
 * @param {number} duration
 * @param {string} className
 * @param {boolean} once
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

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
