import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import heroImg from '../assets/images/Hero-driving-image-dekstop.jpg'
import featureImg from '../assets/images/Feature-driving.jpg'
import heroRangeImg from '../assets/images/Hero-driving-range.jpg'

const facilities = [
  {
    icon: '🏗️',
    title: 'New Building',
    desc: 'Designed combining modern, classic and back-to-nature aesthetics — the perfect place to relax and sharpen your skills.',
  },
  {
    icon: '⛳',
    title: 'Special Bays',
    desc: 'Advanced practice support equipment in every bay for a more effective and enjoyable training session.',
  },
  {
    icon: '🛋️',
    title: 'Exclusive Lounge',
    desc: 'Our exclusive lounge provides comfort for both the body and mind before and after your practice.',
  },
  {
    icon: '🎮',
    title: 'Golf Simulator',
    desc: 'Experience the most advanced golf simulator technology — practice any course in the world from our facility.',
  },
  {
    icon: '🏌️',
    title: 'Regular & VIP Bays',
    desc: 'Spacious regular bays for focus and confidence, plus private VIP bays for those who prefer exclusivity.',
  },
  {
    icon: '📏',
    title: 'Long & Short Range',
    desc: 'Practice both your long drives and short game in our full-length driving range facility.',
  },
  {
    icon: '🔒',
    title: 'Locker Room',
    desc: 'Secure locker room to keep your valuables safe so you can practice completely worry-free.',
  },
  {
    icon: '🕌',
    title: 'Prayer Room',
    desc: 'An excellent and spacious prayer room available for all visitors within our building.',
  },
  {
    icon: '🏪',
    title: 'Pro Shop & Tenants',
    desc: 'Top Golf and Tripma Fitbox are among our tenants, offering a variety of choices to support your needs.',
  },
]

const pricingPackages = [
  {
    name: 'Regular Session',
    highlight: false,
    price: 'Contact Us',
    unit: 'per session',
    features: [
      'Regular Bay Access',
      'Ball Bucket Included',
      'Locker Room Access',
      'Weekday & Weekend',
    ],
  },
  {
    name: 'VIP Bay',
    highlight: true,
    price: 'Contact Us',
    unit: 'per session',
    features: [
      'Private VIP Bay',
      'Premium Ball Bucket',
      'Exclusive Lounge Access',
      'Locker Room Access',
      'Priority Booking',
    ],
  },
  {
    name: 'Golf Simulator',
    highlight: false,
    price: 'Contact Us',
    unit: 'per hour',
    features: [
      'Full Simulator Access',
      'Course Selection',
      'Performance Tracking',
      'Up to 4 Players',
    ],
  },
]

export default function DrivingRange() {
  return (
    <div className="bg-dark-bg text-white font-body">

      {/* ── SECTION 1: HERO ── */}
      <section className="relative h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Dago Heritage Driving Range facility exterior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-golf-green/50 to-dark-bg/90" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Dago Heritage 1917 · Bandung
          </motion.p>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Driving Range
          </motion.h1>

          <motion.div
            className="w-16 h-0.5 bg-golf-gold mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          />

          <motion.p
            className="font-body text-gray-200 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            A luxurious high-tech driving range designed to sharpen your skills
            in comfort — featuring advanced bays, a golf simulator, VIP facilities,
            and more.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button variant="secondary" href="#facilities" size="md">
              Explore Facilities
            </Button>
            <Button variant="outline" href="#pricing" size="md">
              View Rates
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="font-body text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-golf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 2: ABOUT DRIVING RANGE ── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Brand New Driving Range"
            subtitle="About"
            align="center"
            theme="light"
          />

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left — Text */}
            <AnimatedSection direction="left" delay={0}>
              <h3 className="font-heading text-2xl font-bold text-golf-green mb-5 leading-snug">
                Luxurious High-Tech Facility in the Heart of Dago, Bandung
              </h3>
              <p className="font-body text-gray-700 leading-relaxed mb-5">
                The new DAGO Heritage Driving Range offers a complete range of facilities to meet
                your needs. Designed by combining <span className="font-semibold text-golf-green">modern,
                classic, and back-to-nature</span> aesthetics, our driving range is the best place
                to relax and sharpen your golf skills.
              </p>
              <p className="font-body text-gray-700 leading-relaxed mb-5">
                From exclusive locker rooms and VIP bays, to a restaurant, ball room, pro shop,
                golf simulator, and more — every detail has been crafted to deliver the highest
                standard of comfort and performance.
              </p>
              <p className="font-body text-gray-700 leading-relaxed mb-8">
                Our dedicated staff brings the highest hospitality programs to ensure your
                experience is seamless from arrival to departure.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏗️', label: 'New Building' },
                  { icon: '🎮', label: 'Golf Simulator' },
                  { icon: '🏌️', label: 'VIP Bays' },
                  { icon: '⛳', label: 'Advanced Bays' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-golf-green/5 border border-golf-green/20 rounded-lg px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-body text-sm font-semibold text-golf-green">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — Image */}
            <AnimatedSection direction="right" delay={0.15} className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={featureImg}
                  alt="Dago Heritage Driving Range bays and facilities"
                  loading="lazy"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-golf-green/80 to-transparent px-6 py-5">
                  <p className="font-heading text-white text-lg font-semibold">Dago Heritage Driving Range</p>
                  <p className="font-body text-golf-gold text-sm">Bandung, West Java · Est. 1917</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-golf-gold/30 rounded-xl z-0" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FACILITIES ── */}
      <section id="facilities" className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Our Facilities"
            subtitle="What We Offer"
            description="Everything you need for the perfect practice session — all under one roof at Dago Heritage Driving Range."
            align="center"
            theme="dark"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((item, i) => (
              <AnimatedSection key={item.title} direction="up" delay={i * 0.07}>
                <div className="group bg-golf-green/10 border border-golf-green/30 rounded-xl p-7
                               hover:-translate-y-2 hover:border-golf-gold/50 hover:shadow-[0_12px_40px_rgba(26,92,56,0.4)]
                               transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="w-8 h-0.5 bg-golf-gold mb-4 transition-all duration-300 group-hover:w-14" />
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-golf-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PRICING ── */}
      <section id="pricing" className="py-20 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Rates & Packages"
            subtitle="Pricing"
            description="For the latest rates and promotions, please contact our team directly. We're happy to help you find the best package."
            align="center"
            theme="light"
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {pricingPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} direction="up" delay={i * 0.12}>
                <div className={`relative rounded-xl overflow-hidden h-full flex flex-col
                  ${pkg.highlight
                    ? 'bg-golf-green text-white shadow-2xl scale-105'
                    : 'bg-white border border-golf-green/20 shadow-sm'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="bg-golf-gold text-dark-bg text-xs font-body font-bold tracking-widest uppercase text-center py-2">
                      Most Popular
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <div className={`w-8 h-0.5 mb-4 ${pkg.highlight ? 'bg-golf-gold' : 'bg-golf-gold'}`} />
                    <h3 className={`font-heading text-xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-golf-green'}`}>
                      {pkg.name}
                    </h3>
                    <div className="mb-6">
                      <span className={`font-heading text-3xl font-bold ${pkg.highlight ? 'text-golf-gold' : 'text-golf-green'}`}>
                        {pkg.price}
                      </span>
                      <span className={`font-body text-xs ml-2 ${pkg.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                        / {pkg.unit}
                      </span>
                    </div>
                    <ul className="space-y-3 flex-1 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 font-body text-sm">
                          <span className="text-golf-gold text-base">✓</span>
                          <span className={pkg.highlight ? 'text-gray-200' : 'text-gray-600'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/6208112341917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-sm font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300
                        ${pkg.highlight
                          ? 'bg-golf-gold text-dark-bg hover:bg-white'
                          : 'border-2 border-golf-green text-golf-green hover:bg-golf-green hover:text-white'
                        }`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Promo images from website */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-golf-green/5 border border-golf-green/20 rounded-xl p-6 text-center">
              <p className="font-body text-golf-green text-sm font-semibold mb-2">
                📋 Latest Rates & Promotions
              </p>
              <p className="font-body text-gray-500 text-sm mb-4">
                For the most up-to-date pricing and special promotions, please contact our team directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/6208112341917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-golf-green font-semibold hover:text-golf-gold transition-colors"
                >
                  📱 WhatsApp: 0811 234 1917
                </a>
                <span className="hidden sm:block text-gray-300">|</span>
                <a
                  href="mailto:Marketing.driving@dagoheritage1917.com"
                  className="font-body text-sm text-golf-green font-semibold hover:text-golf-gold transition-colors"
                >
                  ✉️ Marketing.driving@dagoheritage1917.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 5: CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={heroRangeImg}
          alt="Dago Heritage Driving Range at dusk"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-golf-green/90" />

        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0}>
            <p className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-4">
              Visit Us Today
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Ready to Practice?<br />Visit Us Today
            </h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto mb-6" />
            <p className="font-body text-gray-200 text-sm md:text-base mb-10 max-w-xl mx-auto">
              Our team is ready to assist you with bookings, inquiries, and everything
              you need for the perfect practice session at Dago Heritage Driving Range.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp */}
              <Button variant="secondary" href="https://wa.me/6208112341917" external size="md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>

              {/* Instagram */}
              <Button variant="outline" href="https://www.instagram.com/dagodriving/" external size="md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @dagodriving
              </Button>
            </div>

            <p className="font-body text-gray-300 text-xs mt-8">
              JL. Lapangan Golf Dago Atas No.78, Bandung, West Java 40135<br />
              Call Center: +62 0811 234 1917 · Email: Marketing.driving@dagoheritage1917.com
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
