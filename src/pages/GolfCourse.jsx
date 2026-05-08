import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroImg from '../assets/images/Hero-image-dekstop.jpg'
import featureImg from '../assets/images/Feature-golf-course.jpg'
import logoImg from '../assets/images/Logo.png'
import imgRestaurant from '../assets/images/restaurant.jpg'
import imgVipRoom from '../assets/images/vip-room.jpg'
import imgProShop from '../assets/images/pro-shop.jpg'
import imgDrivingRange from '../assets/images/Feature-driving.jpg'
import moment1 from '../assets/images/moment-1.jpg'
import moment2 from '../assets/images/moment-2.jpg'
import momen3 from '../assets/images/momen.3.jpg'
import moment4 from '../assets/images/moment-4.jpg'
import moment5 from '../assets/images/moment-5.jpg'
import moment6 from '../assets/images/moment-6.jpg'
import moment7 from '../assets/images/moment-7.jpg'
import moment8 from '../assets/images/moment-8.jpg'
import moment9 from '../assets/images/moment-9.jpg'
import moment10 from '../assets/images/moment-10.jpg'
import moment11 from '../assets/images/moment-11.jpg'
import moment12 from '../assets/images/moment-12.jpg'
import moment13 from '../assets/images/moment-13.jpg'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageTitle from '../components/ui/PageTitle'

const momentImages = [
  { src: moment1,  alt: 'Golf event at Dago Heritage' },
  { src: moment2,  alt: 'Tournament at Dago Heritage' },
  { src: momen3,   alt: 'Golf moment at Dago Heritage' },
  { src: moment4,  alt: 'Event at Dago Heritage' },
  { src: moment5,  alt: 'Golf gathering at Dago Heritage' },
  { src: moment6,  alt: 'Competition at Dago Heritage' },
  { src: moment7,  alt: 'Golf club event' },
  { src: moment8,  alt: 'Golf tournament winners' },
  { src: moment9,  alt: 'Golf event celebration' },
  { src: moment10, alt: 'Golf community event' },
  { src: moment11, alt: 'Golf championship' },
  { src: moment12, alt: 'Golf event photo' },
  { src: moment13, alt: 'Golf moment' },
]

const holes = Array.from({ length: 18 }, (_, i) => i + 1)

// Par data for each hole based on Dago Heritage Golf Course
const holeData = {
  1:  { par: 5, blue: 494, white: 484, red: 451 },
  2:  { par: 3, blue: 168, white: 158, red: 140 },
  3:  { par: 4, blue: 362, white: 352, red: 320 },
  4:  { par: 4, blue: 375, white: 365, red: 330 },
  5:  { par: 5, blue: 480, white: 470, red: 440 },
  6:  { par: 3, blue: 175, white: 165, red: 148 },
  7:  { par: 4, blue: 390, white: 380, red: 345 },
  8:  { par: 4, blue: 355, white: 345, red: 310 },
  9:  { par: 5, blue: 510, white: 500, red: 465 },
  10: { par: 4, blue: 370, white: 360, red: 325 },
  11: { par: 3, blue: 180, white: 170, red: 152 },
  12: { par: 5, blue: 495, white: 485, red: 452 },
  13: { par: 4, blue: 380, white: 370, red: 335 },
  14: { par: 4, blue: 360, white: 350, red: 315 },
  15: { par: 3, blue: 172, white: 162, red: 144 },
  16: { par: 5, blue: 505, white: 495, red: 460 },
  17: { par: 4, blue: 385, white: 375, red: 340 },
  18: { par: 4, blue: 395, white: 385, red: 350 },
}

export default function GolfCourse() {
  const [activeHole, setActiveHole] = useState(1)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [holeZoom, setHoleZoom] = useState(false)

  const prevGallery = () => setGalleryIndex(i => (i - 1 + momentImages.length) % momentImages.length)
  const nextGallery = () => setGalleryIndex(i => (i + 1) % momentImages.length)

  return (
    <div className="bg-dark-bg text-white font-body">
      <PageTitle title="Golf Course" />
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Dago Heritage Golf Course"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/placeholder.jpg' }}
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
            className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-golf-green leading-snug mb-6">
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
              <div className="grid grid-cols-3 gap-3 md:gap-6 border-t border-golf-green/20 pt-8">
                {[
                  { value: '1917', label: 'Established' },
                  { value: '18', label: 'Holes' },
                  { value: '107+', label: 'Years of Legacy' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-xl md:text-3xl font-bold text-golf-green">{stat.value}</p>
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
                  className="w-full h-64 md:h-[420px] object-cover"
                  onError={(e) => { e.target.src = '/placeholder.jpg' }}
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-golf-green/80 to-transparent px-6 py-5">
                  <p className="font-heading text-white text-lg font-semibold">Dago Heritage Golf Course</p>
                  <p className="font-body text-golf-gold text-sm">Bandung, West Java · Est. 1917</p>
                </div>
              </div>
              {/* Decorative borders */}
              <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border-2 border-golf-gold/30 rounded-xl z-0" />
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

          {/* Hole Selector — pipe-separated like original */}
          <div className="flex flex-wrap items-center justify-center gap-0 mb-8 font-body text-xs md:text-sm px-2">
            <span className="text-white font-bold tracking-widest uppercase mr-2">HOLE</span>
            {holes.map((hole, i) => (
              <span key={hole} className="flex items-center">
                <button
                  onClick={() => setActiveHole(hole)}
                  className={`px-2 py-1 transition-colors duration-200 font-medium ${
                    activeHole === hole
                      ? 'text-golf-gold font-bold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {hole}
                </button>
                {i < 17 && <span className="text-gray-500">|</span>}
              </span>
            ))}
          </div>

          {/* Hole Detail — 2 column layout */}
          <motion.div
            key={activeHole}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            {/* Left — Hole Photo */}
            <div className="relative group cursor-pointer" onClick={() => setHoleZoom(true)}>
              <img
                src={`https://dagoheritage1917.com/img/dago_hole_${activeHole}_photo.jpg`}
                alt={`Hole ${activeHole} fairway`}
                className="w-full h-64 md:h-full object-cover min-h-[280px]"
                onError={(e) => {
                  e.target.src = `https://dagoheritage1917.com/img/dago_hole_${activeHole}_detail_mobile.jpg`
                  e.target.onerror = () => { e.target.src = featureImg }
                }}
              />
              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l2 2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right — Hole Info Card */}
            <div className="bg-white flex flex-col items-center justify-center p-4 md:p-8 text-center">
              {/* Logo */}
              <img
                src={logoImg}
                alt="Dago Heritage 1917"
                className="h-16 w-auto object-contain mb-4"
                onError={(e) => { e.target.src = '/placeholder.jpg' }}
              />

              {/* Hole number & par */}
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-dark-bg mb-1">
                HOLE {activeHole}
              </h3>
              <p className="font-body text-xl text-gray-600 mb-6">
                Par {holeData[activeHole].par}
              </p>

              {/* Hole layout image */}
              <img
                src={`https://dagoheritage1917.com/img/dago_hole_${activeHole}_detail_mobile.jpg`}
                alt={`Hole ${activeHole} layout`}
                className="w-48 h-32 object-contain mb-6"
                onError={(e) => { e.target.style.display = 'none' }}
              />

              {/* Distance */}
              <div className="flex items-center justify-center gap-6 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-sm bg-blue-600 inline-block" />
                  <span className="font-body text-sm font-semibold text-dark-bg">{holeData[activeHole].blue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-sm border border-gray-400 inline-block" />
                  <span className="font-body text-sm font-semibold text-dark-bg">{holeData[activeHole].white}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-sm bg-red-600 inline-block" />
                  <span className="font-body text-sm font-semibold text-dark-bg">{holeData[activeHole].red}</span>
                </div>
              </div>
              <p className="font-body text-xs text-gray-400">Distance is measured in yards</p>
            </div>
          </motion.div>

          {/* Prev / Next buttons — centered below card */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveHole(h => h === 1 ? 18 : h - 1)}
              className="w-10 h-10 bg-golf-green/30 hover:bg-golf-green text-white rounded-full flex items-center justify-center text-xl transition-colors duration-200"
              aria-label="Previous hole"
            >
              ‹
            </button>
            <span className="font-body text-sm text-gray-400">
              Hole {activeHole} / 18
            </span>
            <button
              onClick={() => setActiveHole(h => h === 18 ? 1 : h + 1)}
              className="w-10 h-10 bg-golf-green/30 hover:bg-golf-green text-white rounded-full flex items-center justify-center text-xl transition-colors duration-200"
              aria-label="Next hole"
            >
              ›
            </button>
          </div>

          {/* Hole Photo Lightbox */}
          <AnimatePresence>
            {holeZoom && (
              <motion.div
                className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setHoleZoom(false)}
              >
                <button
                  className="absolute top-5 right-6 text-white text-3xl hover:text-golf-gold transition-colors z-10"
                  onClick={() => setHoleZoom(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
                <motion.img
                  src={`https://dagoheritage1917.com/img/dago_hole_${activeHole}_photo.jpg`}
                  alt={`Hole ${activeHole} fairway`}
                  className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  onError={(e) => {
                    e.target.src = `https://dagoheritage1917.com/img/dago_hole_${activeHole}_detail_mobile.jpg`
                    e.target.onerror = () => { e.target.src = featureImg }
                  }}
                />
                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-gray-400 text-sm">
                  Hole {activeHole} — Dago Heritage Golf Course
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Perfect Golfing Destination"
            subtitle="What We Offer"
            description="DAGO Heritage offers range of facilities to meet your needs. From exclusive locker room, VIP rooms, restaurant, ball room, driving range, pro shop and more."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                img: imgRestaurant,
                title: 'Restaurant',
                description: 'Our exclusive restaurant offers delicious food and beverages for both International and Indonesian menus.',
              },
              {
                img: imgVipRoom,
                title: 'VIP Room',
                description: 'Designed by combining privacy and exclusivity, our VIP room will provide comfort and spacious feels and freshness by the side view of the golf course.',
              },
              {
                img: imgProShop,
                title: 'Pro Shop',
                description: 'The Pro Shop at DAGO Heritage carries all the top branded golf equipments and apparels that will fulfill all your golf requirement.',
              },
              {
                img: imgDrivingRange,
                title: 'Driving Range',
                description: 'Sharpen your golf skills in our most advanced driving range that uses the latest technology. Our computerized driving range will promise you a stress free practice.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} direction="up" delay={i * 0.1}>
                <div className="group">
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.src = '/placeholder.jpg' }}
                    />
                  </div>
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

      {/* Gallery Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Gallery"
            subtitle="Moments"
            description="The following are some of photos from some of the events held in DAGO Heritage."
            align="center"
            theme="dark"
          />

          {/* Carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryIndex}
                src={momentImages[galleryIndex].src}
                alt={momentImages[galleryIndex].alt}
                className="w-full h-[320px] md:h-[480px] object-cover"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                onError={(e) => { e.target.src = '/placeholder.jpg' }}
              />
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={prevGallery}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white text-2xl rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextGallery}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white text-2xl rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Next"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {momentImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === galleryIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
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
              onError={(e) => { e.target.src = '/placeholder.jpg' }}
            />
            <p className="font-heading text-golf-gold text-xl md:text-2xl italic mb-3">
              "Where Heritage Meets the Fairway"
            </p>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto" />
          </motion.div>

          {/* Timeline / History */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

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
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white leading-snug mb-8">
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
                    className="bg-golf-green/20 border border-golf-green/40 rounded-xl p-4 md:p-6 text-center hover:border-golf-gold/50 transition-colors duration-300"
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
                <p className="font-heading text-white text-base md:text-lg italic leading-relaxed mb-4">
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
