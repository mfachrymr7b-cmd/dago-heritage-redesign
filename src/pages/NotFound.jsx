import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTitle from '../components/ui/PageTitle'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <PageTitle title="404 - Page Not Found" />

      <div className="text-center max-w-lg mx-auto">
        {/* 404 Number */}
        <motion.h1
          className="font-heading text-[120px] md:text-[180px] font-bold leading-none text-golf-green/30 select-none"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          404
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="w-16 h-0.5 bg-golf-gold mx-auto mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Message */}
        <motion.h2
          className="font-heading text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="font-body text-gray-400 text-sm md:text-base leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on the fairway.
        </motion.p>

        {/* Back to Home button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-golf-green text-white font-body font-semibold text-sm tracking-widest uppercase rounded-sm
                       hover:bg-golf-gold hover:text-dark-bg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
