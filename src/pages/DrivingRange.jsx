import { motion } from 'framer-motion'
import heroImg from '../assets/images/Hero-driving-image-dekstop.jpg'
import featureImg from '../assets/images/Feature-driving.jpg'
import heroRangeImg from '../assets/images/Hero-driving-range.jpg'
import imgNewBuilding from '../assets/images/new-building.jpg'
import imgSpecialBays from '../assets/images/spesial-bays.jpg'
import imgLounge from '../assets/images/exclusive-lounge.jpg'
import imgHospitality from '../assets/images/hospitality.jpg'
import imgRegularBays from '../assets/images/regular-bays.jpg'
import imgSimulator from '../assets/images/golf-simulator.jpg'
import imgLongShort from '../assets/images/long-&-short.jpg'
import imgLockerRoom from '../assets/images/locker-room.jpg'
import imgVipBays from '../assets/images/vip-bays.jpg'
import imgPrayerRoom from '../assets/images/prayer-room.jpg'
import imgTopGolf from '../assets/images/top-golf.jpg'
import imgTripma from '../assets/images/tripma-fitbox.jpg'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import PageTitle from '../components/ui/PageTitle'

const facilities = [
  {
    img: imgNewBuilding,
    title: 'New Building',
    description: 'Designed by combining modern, classic and back to nature design, our new driving range will be the best place to relax and sharpen your skills.',
  },
  {
    img: imgSpecialBays,
    title: 'Special Bays',
    description: 'The new bays provides new advanced practice support equipments.',
  },
  {
    img: imgLounge,
    title: 'Exclusive Lounge',
    description: 'Our exclusive lounge provides comfort for both the body and mind.',
  },
  {
    img: imgHospitality,
    title: 'Hospitality',
    description: "The new driving's staffs brings the highest hospitality programs that will ease your day.",
  },
  {
    img: imgRegularBays,
    title: 'Regular Bays',
    description: 'Each player will have a spacious bay that provides better focus and confidence.',
  },
  {
    img: imgSimulator,
    title: 'Golf Simulator',
    description: 'Sharpen your golf skills in our most advanced driving range that uses the latest technology.',
  },
  {
    img: imgLongShort,
    title: 'Long & Short Ranges',
    description: 'Practice your long and short games in our driving range to the best of your skills and abilities.',
  },
  {
    img: imgLockerRoom,
    title: 'Locker Room',
    description: 'Equipped with locker room to keep your valuables so you can practice worry-free.',
  },
  {
    img: imgVipBays,
    title: 'VIP Bays',
    description: 'VIP bays are available for those who privacy in their practice. Please contact our staff to book ahead.',
  },
  {
    img: imgPrayerRoom,
    title: 'Prayer Room',
    description: 'An excellent and spacious prayer room is also available in our building.',
  },
  {
    img: imgTopGolf,
    title: 'Top Golf',
    description: 'As one of our precious tenants, Top Golf provides variety of choices to support your practice needs.',
  },
  {
    img: imgTripma,
    title: 'Tripma Fitbox',
    description: 'As one of our precious tenants, Tripma Fitbox provides variety of choices to support your practice needs.',
  },
]

const pricingCards = [
  {
    title: 'Regular Session',
    icon: '⛳',
    description: 'Perfect for casual golfers looking to practice and improve their game in a comfortable setting.',
    features: ['Access to Regular Bays', 'Long & Short Ranges', 'Locker Room Access', 'Standard Equipment'],
    highlighted: false,
  },
  {
    title: 'VIP Bay',
    icon: '👑',
    description: 'An exclusive premium experience with private bays and top-tier amenities for the discerning golfer.',
    features: ['Private VIP Bay', 'Exclusive Lounge Access', 'Hospitality Service', 'Priority Booking'],
    highlighted: true,
  },
  {
    title: 'Golf Simulator',
    icon: '🖥️',
    description: 'Immersive indoor golf simulation with advanced technology for year-round practice in any weather.',
    features: ['Full Simulator Session', 'Course Simulation', 'Performance Analytics', 'Climate Controlled'],
    highlighted: false,
  },
]

export default function DrivingRange() {
  return (
    <div className="bg-dark-bg text-white font-body">
      <PageTitle title="Driving Range" />

      {/* ─── Section 1: Hero ─── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Dago Heritage Driving Range"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/placeholder.jpg' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-golf-green/50 to-dark-bg/90" />

        {/* Content */}
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
            className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Driving Range
          </motion.h1>

          <motion.div
            className="w-16 h-0.5 bg-golf-gold mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          />

          <motion.p
            className="text-gray-200 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Experience Bandung's most advanced driving range — featuring state-of-the-art bays,
            a golf simulator, and exclusive VIP facilities at Dago Heritage 1917.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              href="https://wa.me/6208112341917"
              external
              variant="secondary"
              size="md"
            >
              Book Now
            </Button>
            <Button
              href="#about"
              variant="outline"
              size="md"
              className="border-white text-white hover:bg-white hover:text-dark-bg"
            >
              Explore Facilities
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-0.5 h-8 bg-golf-gold/60"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ─── Section 2: About ─── */}
      <section id="about" className="py-20 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-3 text-golf-green text-center">
              Our Facility
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-golf-green leading-snug mb-4 text-center">
              Brand New Driving Range
            </h2>
            <div className="h-0.5 w-12 bg-golf-gold mb-6 mx-auto" />

            <p className="font-body text-gray-700 leading-relaxed mb-5">
              Dago Heritage 1917 proudly presents its brand-new driving range — a world-class
              facility designed to elevate your golf practice experience. Equipped with the latest
              technology and premium amenities, our driving range caters to golfers of all levels.
            </p>

            <p className="font-body text-gray-700 leading-relaxed">
              Whether you're sharpening your long game, perfecting your short game, or exploring
              our immersive golf simulator, every session at Dago Heritage Driving Range promises
              an exceptional and stress-free practice environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 3: Facilities Grid ─── */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Facilities"
            subtitle="What We Offer"
            description="The new DAGO Heritage Driving Range offers range of facilities to meet your needs. From exclusive locker room, VIP rooms, restaurant, ball room, pro shop and more."
            align="center"
            theme="dark"
          />

          {/* 2-column image grid like original website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {facilities.map((item, i) => (
              <AnimatedSection key={item.title} direction="up" delay={i * 0.06}>
                <div className="group">
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-44 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.src = '/placeholder.jpg' }}
                    />
                  </div>
                  {/* Text */}
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-golf-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Pricing ─── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Pricing & Packages"
            subtitle="Choose Your Session"
            description="Select the package that best suits your game. Contact us for the latest rates and availability."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {pricingCards.map((card, i) => (
              <AnimatedSection key={card.title} direction="up" delay={i * 0.12}>
                <div
                  className={`relative flex flex-col h-full rounded-xl overflow-hidden border transition-all duration-300
                    hover:-translate-y-2 hover:shadow-2xl
                    ${card.highlighted
                      ? 'bg-golf-green border-golf-gold shadow-[0_8px_32px_rgba(26,92,56,0.5)]'
                      : 'bg-white border-golf-green/20 hover:border-golf-gold/50'
                    }`}
                >
                  {card.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-golf-gold text-dark-bg text-xs font-body font-bold tracking-widest uppercase text-center py-1.5">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 flex flex-col flex-1 ${card.highlighted ? 'pt-10' : ''}`}>
                    {/* Icon & Title */}
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3
                      className={`font-heading text-2xl font-bold mb-2 ${
                        card.highlighted ? 'text-white' : 'text-golf-green'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <div className={`w-8 h-0.5 mb-4 ${card.highlighted ? 'bg-golf-gold' : 'bg-golf-green'}`} />

                    {/* Price */}
                    <div className="mb-4">
                      <span
                        className={`font-heading text-3xl font-bold ${
                          card.highlighted ? 'text-golf-gold' : 'text-golf-green'
                        }`}
                      >
                        Contact Us
                      </span>
                    </div>

                    <p
                      className={`font-body text-sm leading-relaxed mb-6 ${
                        card.highlighted ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {card.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8 flex-1">
                      {card.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <span className="text-golf-gold text-sm">✓</span>
                          <span
                            className={`font-body text-sm ${
                              card.highlighted ? 'text-gray-200' : 'text-gray-600'
                            }`}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      href="https://wa.me/6208112341917"
                      external
                      variant={card.highlighted ? 'secondary' : 'outline'}
                      size="md"
                      className="w-full justify-center"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: CTA ─── */}
      <section className="relative py-20 bg-golf-green overflow-hidden">
        {/* Background image with overlay */}
        <img
          src={heroRangeImg}
          alt="Dago Heritage Driving Range"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          onError={(e) => { e.target.src = '/placeholder.jpg' }}
        />
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-3 text-golf-gold">
              Get In Touch
            </p>
            <h2 className="font-heading text-2xl md:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Tee Off?
            </h2>
            <div className="w-16 h-0.5 bg-golf-gold mx-auto mb-6" />
            <p className="font-body text-gray-200 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Book your session at Dago Heritage Driving Range today. Contact us via WhatsApp
              or follow us on Instagram for the latest updates and promotions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/6208112341917"
                external
                variant="secondary"
                size="lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>
              <Button
                href="https://www.instagram.com/dagodriving/"
                external
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-bg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @dagodriving
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
