import { useState } from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/images/Hero-image-dekstop.jpg'
import featureImg from '../assets/images/Feature-golf-course.jpg'
import featureDriving from '../assets/images/Feature-driving.jpg'
import featureHotel from '../assets/images/Feature-hotel.jpg'
import heroMobile from '../assets/images/Hero-image-mobile.jpg'
import heroDriving from '../assets/images/Hero-driving-image-dekstop.jpg'
import heroDrivingRange from '../assets/images/Hero-driving-range.jpg'
import promo1 from '../assets/images/Promo-1.jpg'
import promo2 from '../assets/images/Promo-2.jpg'
import logoImg from '../assets/images/Logo.png'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'

const galleryImages = [
  { src: heroImg, alt: 'Dago Heritage Golf Course aerial view' },
  { src: featureImg, alt: 'Dago Heritage Golf Course fairway' },
  { src: featureHotel, alt: 'Swiss-Belresort Hotel at Dago Heritage' },
  { src: heroMobile, alt: 'Dago Heritage Golf Course scenic view' },
  { src: featureDriving, alt: 'Dago Heritage Driving Range facility' },
  { src: heroDriving, alt: 'Dago Heritage Golf Course heritage track' },
  { src: heroDrivingRange, alt: 'Dago Heritage Driving Range exterior' },
  { src: promo1, alt: 'Golf event at Dago Heritage' },
  { src: promo2, alt: 'Promotional event at Dago Heritage' },
]

const facilities = [
  {
    title: 'Restaurant',
    description:
      'Our exclusive restaurant offers delicious food and beverages for both International and Indonesian menus.',
    icon: '🍽️',
  },
  {
    title: 'VIP Room',
    description:
      'Designed by combining privacy and exclusivity, our VIP room will provide comfort and spacious feels and freshness by the side view of the golf course.',
    icon: '🏆',
  },
  {
    title: 'Pro Shop',
    description:
      'The Pro Shop at DAGO Heritage carries all the top branded golf equipments and apparels that will fulfill all your golf requirement.',
    icon: '🛍️',
  },
  {
    title: 'Driving Range',
    description:
      'Sharpen your golf skills in our most advanced driving range that uses the latest technology. Our computerized driving range will promise you a stress free practice.',
    icon: '⛳',
  },
]

const holes = Array.from({ length: 18 }, (_, i) => i + 1)

export default function GolfCourse() {
  const [activeHole, setActiveHole] = useState(1)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <div className="bg-dark-bg text-white font-body">

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Dago Heritage Golf Course"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay - dark green */}
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
            className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Golf Course
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
            One of Indonesia's oldest and most prestigious golf courses, nestled in the cool
            highlands of Dago, Bandung — offering 18 challenging holes since 1917.
          </motion.p>

          <motion.a
            href="#aboutus"
            className="inline-block mt-8 px-8 py-3 border border-golf-gold text-golf-gold font-body text-sm tracking-widest uppercase hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Explore the Course
          </motion.a>
        </div>

        {/* Scroll indicator */}
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

      {/* About The Course Section */}
      <section id="aboutus" className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <SectionTitle
            title="About The Course"
            align="center"
            theme="light"
          />

          {/* 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-golf-green leading-snug mb-6">
                One of Indonesia's Oldest &amp; Most Prestigious Golf Courses
              </h2>

              <p className="font-body text-gray-700 leading-relaxed mb-5">
                Founded in <span className="font-semibold text-golf-green">1917</span>, Dago Heritage Golf Course
                is one of the oldest golf courses in Indonesia offering an unrivaled golfing experience.
                Located in the beautiful Dago area of Bandung where the air is cool, this golf course has
                <span className="font-semibold text-golf-green"> 18 holes</span> that are carefully designed
                to challenge and inspire golfers of all skill levels.
              </p>

              <p className="font-body text-gray-700 leading-relaxed mb-5">
                As one of the historic golf destinations in Indonesia, Dago Heritage Golf Course not only
                offers stunning natural beauty, but also modern facilities and friendly service. With a
                combination of tradition and innovation, we are committed to providing an unforgettable
                golfing experience to all visitors.
              </p>

              <p className="font-body text-gray-700 leading-relaxed mb-8">
                Come join us at Dago Heritage Golf Course and enjoy the beauty and challenges of playing
                golf at one of the legendary golf courses in Indonesia.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-golf-green/20 pt-8">
                {[
                  { value: '1917', label: 'Established' },
                  { value: '18', label: 'Holes' },
                  { value: '107+', label: 'Years of Legacy' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl font-bold text-golf-green">{stat.value}</p>
                    <p className="font-body text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              {/* Main image */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={featureImg}
                  alt="Dago Heritage Golf Course fairway with mountain backdrop"
                  loading="lazy"
                  className="w-full h-[420px] object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-golf-green/80 to-transparent px-6 py-5">
                  <p className="font-heading text-white text-lg font-semibold">Dago Heritage Golf Course</p>
                  <p className="font-body text-golf-gold text-sm">Bandung, West Java · Est. 1917</p>
                </div>
              </div>
              {/* Decorative borders */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-golf-gold/30 rounded-xl z-0" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <SectionTitle
            title="Course Features"
            subtitle="Why Play Here"
            align="center"
            theme="dark"
          />

          {/* Grid 3 Kolom */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⛳',
                title: '18 Hole Course',
                description:
                  'A full 18-hole championship course carefully designed to challenge and inspire golfers of all skill levels, from beginners to seasoned professionals.',
              },
              {
                icon: '🏛️',
                title: 'Heritage Track Since 1917',
                description:
                  'One of the oldest golf courses in Indonesia, carrying over a century of rich history, tradition, and prestige in every fairway and green.',
              },
              {
                icon: '🏔️',
                title: 'Mountain View',
                description:
                  'Enjoy breathtaking panoramic views of Bandung\'s cool highland mountains as you play, making every round a truly scenic experience.',
              },
              {
                icon: '🌿',
                title: 'Lush Green Fairways',
                description:
                  'Meticulously maintained fairways and greens set against the natural beauty of Dago\'s tropical landscape, offering a refreshing round year-round.',
              },
              {
                icon: '🏆',
                title: 'VIP & Exclusive Facilities',
                description:
                  'From private VIP rooms to a fully stocked pro shop and fine dining restaurant, every amenity is designed for comfort and exclusivity.',
              },
              {
                icon: '🌤️',
                title: 'Cool Highland Climate',
                description:
                  'Located in the elevated Dago area of Bandung, the naturally cool climate makes for a comfortable and enjoyable round of golf any time of day.',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group bg-golf-green/10 border border-golf-green/30 rounded-xl p-8 cursor-default
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(26,92,56,0.4)] hover:border-golf-gold/50"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Icon */}
                <div className="text-4xl mb-5">{feature.icon}</div>

                {/* Gold line accent */}
                <div className="w-8 h-0.5 bg-golf-gold mb-5 transition-all duration-300 group-hover:w-14" />

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-golf-gold transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hole Information Section */}
      <section className="py-20 bg-golf-green/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Hole Information"
            subtitle="The Course"
            align="center"
            theme="dark"
          />

          {/* Hole Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {holes.map((hole) => (
              <button
                key={hole}
                onClick={() => setActiveHole(hole)}
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeHole === hole
                    ? 'bg-golf-gold text-dark-bg font-bold scale-110'
                    : 'bg-golf-green/30 text-white hover:bg-golf-green/60'
                }`}
              >
                {hole}
              </button>
            ))}
          </div>

          {/* Hole Detail */}
          <motion.div
            key={activeHole}
            className="bg-golf-green/20 border border-golf-green/40 rounded-xl overflow-hidden max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`https://dagoheritage1917.com/img/dago_hole_${activeHole}_detail_mobile.jpg`}
              alt={`Dago Heritage Golf Course hole ${activeHole} layout`}
              loading="lazy"
              className="w-full h-48 md:h-64 object-cover"
              onError={(e) => { e.target.src = featureImg }}
            />
            <div className="p-4 md:p-6 text-center">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-golf-gold">
                Hole {activeHole}
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Perfect Golfing Destination"
          subtitle="What We Offer"
          description="DAGO Heritage offers a range of facilities to meet your needs. From exclusive locker room, VIP rooms, restaurant, ball room, driving range, pro shop and more."
          align="center"
          theme="dark"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, i) => (
            <AnimatedSection key={item.title} direction="up" delay={i * 0.1}>
              <div
                className="bg-golf-green/20 border border-golf-green/40 rounded-xl p-6 text-center
                           hover:-translate-y-2 hover:border-golf-gold/60 hover:shadow-[0_12px_40px_rgba(26,92,56,0.4)]
                           transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold text-golf-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <SectionTitle
            title="Moments at Dago Heritage"
            subtitle="Gallery"
            description="Some of the photos from events and moments held at DAGO Heritage Golf Course."
            align="center"
            theme="dark"
          />

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  i === 0 || i === 5 ? 'md:row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 || i === 5 ? '1 / 1.8' : '1 / 1' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setLightbox({ open: true, index: i })}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-golf-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l2 2" />
                    </svg>
                    <p className="font-body text-xs tracking-widest uppercase text-golf-gold">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightbox.open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox({ open: false, index: 0 })}
          >
            <button
              className="absolute top-5 right-6 text-white text-3xl font-light hover:text-golf-gold transition-colors"
              onClick={() => setLightbox({ open: false, index: 0 })}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 text-white text-3xl hover:text-golf-gold transition-colors px-2"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((prev) => ({
                  ...prev,
                  index: (prev.index - 1 + galleryImages.length) % galleryImages.length,
                }))
              }}
              aria-label="Previous"
            >
              ‹
            </button>

            <motion.img
              key={lightbox.index}
              src={galleryImages[lightbox.index].src}
              alt={galleryImages[lightbox.index].alt}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 text-white text-3xl hover:text-golf-gold transition-colors px-2"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((prev) => ({
                  ...prev,
                  index: (prev.index + 1) % galleryImages.length,
                }))
              }}
              aria-label="Next"
            >
              ›
            </button>

            {/* Counter */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-400 font-body text-sm">
              {lightbox.index + 1} / {galleryImages.length}
            </p>
          </motion.div>
        )}
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top: Logo + Tagline */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logoImg}
              alt="Dago Heritage 1917 Golf Club logo"
              loading="lazy"
              className="h-20 w-auto object-contain mx-auto mb-6"
            />
            <p className="font-heading text-golf-gold text-xl md:text-2xl italic mb-3">
              "Where Heritage Meets the Fairway"
            </p>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto" />
          </motion.div>

          {/* Timeline / History */}
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left — History Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="text-golf-gold font-body text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-snug mb-8">
                A Century of Golf Excellence in Bandung
              </h2>

              <div className="space-y-8">
                {[
                  {
                    year: '1917',
                    title: 'The Beginning',
                    desc: 'Dago Heritage Golf Course was founded, making it one of the oldest golf courses in Indonesia. Built in the cool highlands of Dago, Bandung, it quickly became a prestigious destination for golfers.',
                  },
                  {
                    year: '1917–Now',
                    title: 'A Living Heritage',
                    desc: 'For over a century, Dago Heritage has preserved its legacy while continuously modernizing its facilities — blending colonial-era charm with contemporary golfing standards.',
                  },
                  {
                    year: 'Today',
                    title: 'Modern Excellence',
                    desc: 'Today, Dago Heritage Golf Course offers 18 championship holes, a driving range, VIP rooms, a restaurant, pro shop, and more — all set against the stunning backdrop of Bandung\'s mountains.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-golf-gold mt-1.5 shrink-0" />
                      {i < 2 && <div className="w-0.5 flex-1 bg-golf-gold/30 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <span className="font-body text-xs text-golf-gold tracking-widest uppercase">
                        {item.year}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-white mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="font-body text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Stats + Quote */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1917', label: 'Year Founded' },
                  { value: '18', label: 'Championship Holes' },
                  { value: '107+', label: 'Years of Legacy' },
                  { value: 'Bandung', label: 'West Java, Indonesia' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="bg-golf-green/20 border border-golf-green/40 rounded-xl p-6 text-center hover:border-golf-gold/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  >
                    <p className="font-heading text-3xl font-bold text-golf-gold">{stat.value}</p>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quote Block */}
              <motion.blockquote
                className="border-l-4 border-golf-gold pl-6 py-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="font-heading text-white text-lg italic leading-relaxed mb-4">
                  "Dago Heritage Golf Course not only offers stunning natural beauty, but also
                  modern facilities and friendly service. With a combination of tradition and
                  innovation, we are committed to providing an unforgettable golfing experience."
                </p>
                <cite className="font-body text-golf-gold text-sm not-italic tracking-widest uppercase">
                  — Dago Heritage 1917
                </cite>
              </motion.blockquote>

              {/* Contact Info */}
              <div className="bg-golf-green/20 border border-golf-green/40 rounded-xl p-6 space-y-3">
                <p className="font-body text-golf-gold text-xs tracking-widest uppercase mb-4">Contact</p>
                {[
                  { icon: '📍', text: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java 40135' },
                  { icon: '📞', text: '+62 222 502 567' },
                  { icon: '📱', text: 'Reservation: +62 0811 2233 1917' },
                  { icon: '✉️', text: 'dagoheritage1917@gmail.com' },
                  { icon: '📸', text: '@dagoheritage_1917' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-base shrink-0">{item.icon}</span>
                    <p className="font-body text-gray-300 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Footer Strip */}
      <section className="py-16 bg-golf-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold text-golf-gold mb-4">
              DAGO Heritage 1917 Golf Course
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              JL. Lapangan Golf Dago Atas No.78<br />
              Bandung, West Java, Indonesia, 40135<br />
              Phone: +62 222 502 567<br />
              Reservation: +62 0811 2233 1917<br />
              Email: dagoheritage1917@gmail.com<br />
              Instagram: @dagoheritage_1917
            </p>
          </div>
          <div className="border-t border-white/20 pt-8 md:border-t-0 md:pt-0 md:border-l md:pl-10">
            <h3 className="font-heading text-xl font-bold text-golf-gold mb-4">
              DAGO Heritage 1917 Driving Range
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              JL. Lapangan Golf Dago Atas No.78<br />
              Bandung, West Java, Indonesia, 40135<br />
              Call Center: +62 0811 234 1917<br />
              Email: Marketing.driving@dagoheritage1917.com<br />
              Instagram: @dagodriving
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
