import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import heroImg from '../assets/images/Hero-driving-image-dekstop.jpg'
import promo5 from '../assets/images/Promo-5.jpg'
import promo6 from '../assets/images/Promo-6.jpg'
import promo7 from '../assets/images/Promo-7.jpg'
import promo8 from '../assets/images/Promo-8.jpg'
import promo9 from '../assets/images/Promo-9.jpg'
import promo11 from '../assets/images/Promo-11.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const guestRates = [
  { day: 'Monday',           morning: 'IDR 485.000,-', afternoon: 'IDR 485.000,-' },
  { day: 'Tuesday – Friday', morning: 'IDR 580.000,-', afternoon: 'IDR 450.000,-' },
  { day: 'Saturday',         morning: 'IDR 975.000,-', afternoon: 'IDR 750.000,-' },
  { day: 'Sunday / PH',      morning: 'IDR 875.000,-', afternoon: 'IDR 650.000,-' },
]

const categoryRates = [
  { category: 'Senior',    wdMorn: 'IDR 475.000,-', wdAftn: 'IDR 450.000,-', satMorn: 'IDR 900.000,-', satAftn: 'IDR 750.000,-', sunMorn: 'IDR 800.000,-', sunAftn: 'IDR 650.000,-' },
  { category: 'Ladies',    wdMorn: 'IDR 500.000,-', wdAftn: 'IDR 450.000,-', satMorn: 'IDR 900.000,-', satAftn: 'IDR 750.000,-', sunMorn: 'IDR 800.000,-', sunAftn: 'IDR 650.000,-' },
  { category: 'Junior',    wdMorn: 'IDR 475.000,-', wdAftn: 'IDR 450.000,-', satMorn: 'IDR 900.000,-', satAftn: 'IDR 750.000,-', sunMorn: 'IDR 800.000,-', sunAftn: 'IDR 650.000,-' },
  { category: 'Club',      wdMorn: 'IDR 500.000,-', wdAftn: 'IDR 450.000,-', satMorn: 'IDR 900.000,-', satAftn: 'IDR 750.000,-', sunMorn: 'IDR 800.000,-', sunAftn: 'IDR 650.000,-' },
  { category: 'TNI/POLRI', wdMorn: 'IDR 500.000,-', wdAftn: 'IDR 450.000,-', satMorn: 'IDR 900.000,-', satAftn: 'IDR 750.000,-', sunMorn: 'IDR 800.000,-', sunAftn: 'IDR 650.000,-' },
]

const promoImages = [
  { src: promo7,  alt: 'Promo Golf 1' },
  { src: promo5,  alt: 'Promo Golf 2' },
  { src: promo6,  alt: 'Promo Golf 3' },
  { src: promo8,  alt: 'Promo Golf 4' },
  { src: promo9,  alt: 'Promo Golf 5' },
  { src: promo11, alt: 'Promo Golf 6' },
]

export default function GreenFees() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <div className="bg-dark-bg text-white font-body">

      {/* ── SECTION 1: HERO ── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Green Fees 2026"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-golf-green/50 to-dark-bg/90" />

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <motion.p
            className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Golf Course · Dago Heritage 1917
          </motion.p>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            2026 Green Fees
          </motion.h1>
          <motion.div
            className="w-16 h-0.5 bg-golf-gold mx-auto mb-5"
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          />
          <motion.p
            className="font-body text-gray-300 text-sm md:text-base"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Below is green fees for the year 2026.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 2: PRICING TABLES ── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="text-center mb-14" {...fadeUp(0)}>
            <p className="font-body text-golf-green text-xs tracking-[0.3em] uppercase mb-3">Rate 2026</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-golf-green mb-4">
              Golf Course Rates
            </h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto" />
          </motion.div>

          {/* GUEST RATE */}
          <motion.div className="mb-14" {...fadeUp(0.1)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[0,1,2].map(i => <span key={i} className="w-1.5 h-7 bg-golf-green rounded-sm" />)}
              </div>
              <h3 className="font-heading text-lg font-bold text-white bg-golf-green px-5 py-2 rounded-sm tracking-widest uppercase">
                Guest Rate
              </h3>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-golf-green text-white">
                    <th className="py-3 px-5 text-left font-body font-semibold uppercase tracking-widest text-xs">Day</th>
                    <th className="py-3 px-5 text-center font-body font-semibold uppercase tracking-widest text-xs">Morning</th>
                    <th className="py-3 px-5 text-center font-body font-semibold uppercase tracking-widest text-xs">Afternoon</th>
                  </tr>
                </thead>
                <tbody>
                  {guestRates.map((row, i) => (
                    <tr key={row.day} className={`border-b border-gray-100 hover:bg-golf-green/5 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="py-4 px-5 font-body font-bold text-gray-800">{row.day}</td>
                      <td className="py-4 px-5 text-center font-body font-semibold text-golf-gold">{row.morning}</td>
                      <td className="py-4 px-5 text-center font-body font-semibold text-golf-gold">{row.afternoon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CATEGORY RATE */}
          <motion.div className="mb-14" {...fadeUp(0.2)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[0,1,2].map(i => <span key={i} className="w-1.5 h-7 bg-golf-green rounded-sm" />)}
              </div>
              <h3 className="font-heading text-lg font-bold text-white bg-golf-green px-5 py-2 rounded-sm tracking-widest uppercase">
                Category Rate
              </h3>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-md">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="bg-golf-green text-white">
                    <th className="py-3 px-4 text-left font-body font-semibold uppercase tracking-wider" rowSpan={2}>Category</th>
                    <th className="py-2 px-4 text-center font-body font-semibold uppercase tracking-wider border-l border-white/20" colSpan={2}>Weekday</th>
                    <th className="py-2 px-4 text-center font-body font-semibold uppercase tracking-wider border-l border-white/20" colSpan={2}>Saturday</th>
                    <th className="py-2 px-4 text-center font-body font-semibold uppercase tracking-wider border-l border-white/20" colSpan={2}>Sunday</th>
                  </tr>
                  <tr className="bg-golf-green/80 text-white text-xs">
                    {['Morning','Afternoon','Morning','Afternoon','Morning','Afternoon'].map((h, i) => (
                      <th key={i} className={`py-2 px-4 text-center font-body ${i % 2 === 0 ? 'border-l border-white/20' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {categoryRates.map((row, i) => (
                    <tr key={row.category} className={`border-b border-gray-100 hover:bg-golf-green/5 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="py-3 px-4 font-body font-bold text-gray-800 uppercase text-xs tracking-wide">{row.category}</td>
                      <td className="py-3 px-4 text-center font-body font-semibold text-golf-gold border-l border-gray-100">{row.wdMorn}</td>
                      <td className="py-3 px-4 text-center font-body font-semibold text-golf-gold">{row.wdAftn}</td>
                      <td className="py-3 px-4 text-center font-body font-semibold text-golf-gold border-l border-gray-100">{row.satMorn}</td>
                      <td className="py-3 px-4 text-center font-body font-semibold text-golf-gold">{row.satAftn}</td>
                      <td className="py-3 px-4 text-center font-body font-semibold text-golf-gold border-l border-gray-100">{row.sunMorn}</td>
                      <td className="py-3 px-4 text-center font-body font-semibold text-golf-gold">{row.sunAftn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Book Now */}
          <motion.div className="text-center" {...fadeUp(0.3)}>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-golf-green text-white font-body font-semibold text-sm tracking-widest uppercase rounded-sm
                         hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 shadow-lg"
            >
              Book Now
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 3: PROMO GALLERY ── */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="text-center mb-14" {...fadeUp(0)}>
            <p className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-3">Special Offers</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Promo & Packages</h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto mb-4" />
            <p className="font-body text-gray-400 text-sm">Click on any image to view in full size.</p>
          </motion.div>

          {/* Grid 2×3 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {promoImages.map((img, i) => (
              <motion.div
                key={img.alt}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setLightbox({ open: true, index: i })}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center px-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightbox({ open: false, index: 0 })}
            >
              <button
                className="absolute top-5 right-6 text-white text-3xl hover:text-golf-gold transition-colors z-10"
                onClick={() => setLightbox({ open: false, index: 0 })}
                aria-label="Close"
              >✕</button>

              <button
                className="absolute left-3 md:left-6 text-white text-5xl hover:text-golf-gold transition-colors z-10 px-2"
                onClick={(e) => { e.stopPropagation(); setLightbox(p => ({ ...p, index: (p.index - 1 + promoImages.length) % promoImages.length })) }}
                aria-label="Previous"
              >‹</button>

              <motion.img
                key={lightbox.index}
                src={promoImages[lightbox.index].src}
                alt={promoImages[lightbox.index].alt}
                className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-3 md:right-6 text-white text-5xl hover:text-golf-gold transition-colors z-10 px-2"
                onClick={(e) => { e.stopPropagation(); setLightbox(p => ({ ...p, index: (p.index + 1) % promoImages.length })) }}
                aria-label="Next"
              >›</button>

              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-400 font-body text-sm">
                {lightbox.index + 1} / {promoImages.length}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── SECTION 4: CTA BOOKING ── */}
      <section className="relative py-20 bg-golf-green overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-4">Tee Time</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Ready to Play?<br />Book Your Tee Time Now
            </h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto mb-6" />
            <p className="font-body text-gray-200 text-sm md:text-base mb-10 max-w-xl mx-auto">
              Contact our reservation team to secure your tee time at Dago Heritage Golf Course.
              We're ready to assist you every day.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Call Us */}
              <a
                href="tel:+6208112233917"
                className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 bg-white text-golf-green font-body font-bold text-sm tracking-widest uppercase rounded-sm
                           hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 shadow-lg justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6208112233917"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-body font-bold text-sm tracking-widest uppercase rounded-sm
                           hover:bg-white hover:text-golf-green transition-all duration-300 justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            <p className="font-body text-gray-300 text-xs mt-6">
              Reservation: 0811 2233 1917 &nbsp;·&nbsp; Phone: +62 222 502 567
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
