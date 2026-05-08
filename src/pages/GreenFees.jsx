import { motion } from 'framer-motion'
import promo1 from '../assets/images/Promo-1.jpg'
import promo2 from '../assets/images/Promo-2.jpg'
import promo3 from '../assets/images/Promo-3.jpg'
import promo5 from '../assets/images/Promo-5.jpg'
import promo6 from '../assets/images/Promo-6.jpg'
import promo7 from '../assets/images/Promo-7.jpg'
import heroImg from '../assets/images/Hero-image-dekstop.jpg'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'

// ─── Data ────────────────────────────────────────────────────────────────────

const guestRates = [
  { category: 'Weekday', member: 'IDR 350,000', guest: 'IDR 550,000' },
  { category: 'Weekend / Holiday', member: 'IDR 450,000', guest: 'IDR 700,000' },
  { category: 'Twilight (after 3 PM)', member: 'IDR 250,000', guest: 'IDR 400,000' },
]

const categoryRates = [
  {
    title: 'Green Fee',
    items: [
      { label: 'Weekday', price: 'IDR 550,000' },
      { label: 'Weekend / Holiday', price: 'IDR 700,000' },
      { label: 'Twilight', price: 'IDR 400,000' },
    ],
  },
  {
    title: 'Caddie Fee',
    items: [
      { label: 'Per Round', price: 'IDR 150,000' },
      { label: 'Tip (recommended)', price: 'IDR 50,000' },
    ],
  },
  {
    title: 'Golf Cart',
    items: [
      { label: 'Per Round (18 holes)', price: 'IDR 250,000' },
      { label: 'Per 9 Holes', price: 'IDR 150,000' },
    ],
  },
  {
    title: 'Club Rental',
    items: [
      { label: 'Full Set', price: 'IDR 200,000' },
      { label: 'Half Set', price: 'IDR 120,000' },
    ],
  },
]

const promoItems = [
  { src: promo1, alt: 'Golf event promotion at Dago Heritage' },
  { src: promo2, alt: 'Golf course promotion at Dago Heritage' },
  { src: promo3, alt: 'Driving range promotion at Dago Heritage' },
  { src: promo5, alt: 'Special event at Dago Heritage Golf Club' },
  { src: promo6, alt: 'Golf tournament at Dago Heritage' },
  { src: promo7, alt: 'Weekend golf promo at Dago Heritage' },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function GreenFees() {
  return (
    <div className="bg-dark-bg text-white font-body">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Dago Heritage Golf Course"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-golf-green/50 to-dark-bg/90" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            className="text-golf-gold font-body text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Est. 1917 · Bandung, West Java
          </motion.p>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Green Fees
          </motion.h1>

          <motion.div
            className="w-16 h-0.5 bg-golf-gold mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          />

          <motion.p
            className="text-gray-200 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Transparent pricing for an unforgettable round at one of Indonesia's most
            prestigious golf courses.
          </motion.p>
        </div>
      </section>

      {/* ── Green Fee Rates Section ───────────────────────────────────────── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Green Fee Rates"
            subtitle="Pricing"
            align="center"
            theme="light"
          />

          {/* Member vs Guest Table */}
          <AnimatedSection direction="up" delay={0.1} className="mb-16">
            <div className="overflow-x-auto rounded-xl shadow-sm border border-golf-green/20">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-golf-green text-white">
                    <th className="px-6 py-4 text-left tracking-widest uppercase text-xs">Category</th>
                    <th className="px-6 py-4 text-center tracking-widest uppercase text-xs">Member</th>
                    <th className="px-6 py-4 text-center tracking-widest uppercase text-xs">Guest</th>
                  </tr>
                </thead>
                <tbody>
                  {guestRates.map((row, i) => (
                    <tr
                      key={row.category}
                      className={`border-t border-golf-green/10 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="px-6 py-4 font-semibold text-golf-green">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.member}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.guest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Category Rate Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {categoryRates.map((cat, i) => (
              <AnimatedSection key={cat.title} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-xl shadow-sm border border-golf-green/10 p-6 h-full">
                  <div className="w-8 h-0.5 bg-golf-gold mb-4" />
                  <h3 className="font-heading text-lg font-bold text-golf-green mb-4">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.label} className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-semibold text-golf-green">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Notes */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-golf-green/5 border border-golf-green/20 rounded-xl p-6 text-sm text-gray-600 font-body leading-relaxed">
              <p className="font-semibold text-golf-green mb-2">Notes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Prices are subject to change without prior notice.</li>
                <li>Weekend rates apply on Saturdays, Sundays, and public holidays.</li>
                <li>Twilight golf starts at 15:00 WIB.</li>
                <li>All prices are in Indonesian Rupiah (IDR) and inclusive of tax.</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Book a Tee Time Section ───────────────────────────────────────── */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <SectionTitle
            title="Book a Tee Time"
            subtitle="Ready to Play?"
            description="Reserve your tee time today and experience the legacy of Dago Heritage Golf Course. Our team is ready to assist you with reservations and any inquiries."
            align="center"
            theme="dark"
          />

          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
              <Button variant="primary" href="/contact">
                Book Now
              </Button>
              <Button
                variant="outline"
                href="tel:+622225025671"
                external={true}
              >
                📞 Call Us
              </Button>
              <Button
                variant="secondary"
                href="https://wa.me/6281122331917"
                external={true}
              >
                💬 WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Promo Gallery Section ─────────────────────────────────────────── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Promotions & Events"
            subtitle="What's On"
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {promoItems.map((item, i) => (
              <AnimatedSection key={item.alt} direction="up" delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer shadow-sm">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-golf-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-9 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
