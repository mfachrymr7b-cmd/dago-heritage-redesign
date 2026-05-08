import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import heroDesktop from '../assets/images/Hero-image-dekstop.jpg'
import heroMobile from '../assets/images/Hero-image-mobile.jpg'
import hotelImg from '../assets/images/Feature-hotel.jpg'
import courseImg from '../assets/images/Feature-golf-course.jpg'
import drivingImg from '../assets/images/Feature-driving.jpg'
import promo1 from '../assets/images/Promo-1.jpg'
import promo2 from '../assets/images/Promo-2.jpg'
import promo3 from '../assets/images/Promo-3.jpg'
import promo5 from '../assets/images/Promo-5.jpg'
import promo6 from '../assets/images/Promo-6.jpg'
import promo7 from '../assets/images/Promo-7.jpg'
import promo8 from '../assets/images/Promo-8.jpg'
import promo9 from '../assets/images/Promo-9.jpg'
import promo11 from '../assets/images/Promo-11.jpg'
import news1 from '../assets/images/News-1.jpg'
import news2 from '../assets/images/News-2.jpg'
const promoItems = [
  { src: promo1,  tab: 'Event',        alt: 'Event 1' },
  { src: promo2,  tab: 'Golf Course',  alt: 'Golf Course 1' },
  { src: promo3,  tab: 'Driving',      alt: 'Driving 1' },
  { src: promo5,  tab: 'Event',        alt: 'Event 2' },
  { src: promo6,  tab: 'Golf Course',  alt: 'Golf Course 2' },
  { src: promo7,  tab: 'Driving',      alt: 'Driving 2' },
  { src: promo8,  tab: 'Event',        alt: 'Event 3' },
  { src: promo9,  tab: 'Golf Course',  alt: 'Golf Course 3' },
  { src: promo11, tab: 'Driving',      alt: 'Driving 3' },
]

const tabs = ['All', 'Event', 'Golf Course', 'Driving']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Home() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })
  return (
    <div className="bg-dark-bg">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background — responsive: mobile vs desktop */}
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <img
            src={heroDesktop}
            alt="Dago Heritage Golf Course"
            className="w-full h-full object-cover object-center"
          />
        </picture>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-dark-bg" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">

          {/* Label */}
          <motion.p
            className="font-body text-golf-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-5"
            {...fadeUp(0.1)}
          >
            Est. 1917 · Dago, Bandung · West Java
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            {...fadeUp(0.3)}
          >
            Perfect Golfing<br className="hidden sm:block" /> Destination
          </motion.h1>

          {/* Gold Divider */}
          <motion.div
            className="w-16 h-0.5 bg-golf-gold mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          {/* Subtitle */}
          <motion.p
            className="font-body text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            {...fadeUp(0.55)}
          >
            DAGO Heritage offers a complete package of golf experience — from our
            championship 18-hole course and driving range, to fine dining, VIP rooms,
            and a pro shop. All set in the cool highlands of Bandung since 1917.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            {...fadeUp(0.7)}
          >
            <Link
              to="/course"
              className="w-full sm:w-auto px-8 py-3.5 bg-golf-gold text-dark-bg font-body font-semibold text-sm tracking-widest uppercase rounded-sm
                         hover:bg-white hover:text-dark-bg transition-all duration-300 shadow-lg"
            >
              Explore Our Course
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-white text-white font-body font-semibold text-sm tracking-widest uppercase rounded-sm
                         hover:bg-white hover:text-dark-bg transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="font-body text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-golf-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

      </section>

      {/* Explore Dago Heritage Section */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-3">
              Discover More
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Dago Heritage
            </h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto" />
          </motion.div>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: hotelImg,
                title: 'Swiss-Belresort Hotel',
                desc: 'Experience world-class hospitality at Swiss-Belresort, offering luxurious rooms and stunning views of the Bandung highlands — the perfect retreat after a round of golf.',
                href: 'https://www.swiss-belhotel.com',
                external: true,
                label: 'Visit Website',
              },
              {
                img: courseImg,
                title: 'Golf Course',
                href: '/course',
                external: false,
                desc: 'Play on one of Indonesia\'s oldest and most prestigious 18-hole championship courses, set against the breathtaking scenery of Dago, Bandung since 1917.',
                label: 'Explore Course',
              },
              {
                img: drivingImg,
                title: 'Driving Range',
                href: '/driving-range',
                external: false,
                desc: 'Sharpen your swing at our state-of-the-art computerized driving range — perfect for practice sessions or a fun outing with friends and family.',
                label: 'Learn More',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Image */}
                <div className="overflow-hidden h-72 md:h-80">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Default overlay — always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Default title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="font-heading text-xl font-bold text-white">{card.title}</h3>
                </div>

                {/* Hover overlay — full cover */}
                <div className="absolute inset-0 bg-golf-green/85 flex flex-col items-center justify-center px-6 text-center
                                opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-400">
                  <div className="w-8 h-0.5 bg-golf-gold mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-gray-200 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2.5 border border-golf-gold text-golf-gold font-body text-xs tracking-widest uppercase
                                 hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 rounded-sm"
                    >
                      {card.label} ↗
                    </a>
                  ) : (
                    <Link
                      to={card.href}
                      className="inline-block px-6 py-2.5 border border-golf-gold text-golf-gold font-body text-xs tracking-widest uppercase
                                 hover:bg-golf-gold hover:text-dark-bg transition-all duration-300 rounded-sm"
                    >
                      {card.label}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-golf-green text-xs tracking-[0.3em] uppercase mb-3">
              Stay Updated
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-golf-green mb-4">
              Latest News
            </h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto" />
          </motion.div>

          {/* 2 News Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: news1,
                category: 'Golf',
                date: 'Minggu, Feb. 15, 2026',
                title: 'Danny Ganiarto Terpilih Pimpin PGB 2025–2029',
                summary:
                  'Danny Ganiarto resmi terpilih sebagai Ketua Umum Persatuan Golf Bandung (PGB) periode 2025–2029 dalam Musyawarah Olahraga Kabupaten Luar Biasa. Terpilihnya Danny diharapkan membawa angin segar bagi perkembangan olahraga golf di Bandung dan sekitarnya.',
                href: 'https://cirebon.pikiran-rakyat.com',
              },
              {
                img: news2,
                category: 'Golf',
                date: 'Selasa, Feb. 24, 2026',
                title: 'Kepengurusan Baru PGB 2025 sd 2029',
                summary:
                  'Persatuan Golf Bandung (PGB) resmi memperkenalkan susunan kepengurusan baru untuk periode 2025 hingga 2029. Kepengurusan baru ini berkomitmen untuk meningkatkan kualitas pembinaan atlet golf muda serta memperluas jaringan turnamen di tingkat regional.',
                href: 'https://cirebon.pikiran-rakyat.com',
              },
            ].map((news, i) => (
              <motion.a
                key={news.title}
                href={news.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Image */}
                <div className="overflow-hidden h-52 md:h-60">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category + Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs font-semibold text-white bg-golf-green px-3 py-1 rounded-full uppercase tracking-wide">
                      {news.category}
                    </span>
                    <span className="font-body text-xs text-gray-400">{news.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug
                                 group-hover:text-golf-green transition-colors duration-300">
                    {news.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                    {news.summary}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-golf-green font-body text-sm font-semibold">
                    <span>Read More</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* What's On Section */}
      <section id="whatson" className="py-24 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-golf-green text-xs tracking-[0.3em] uppercase mb-3">
              Latest Updates
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-golf-green mb-4">
              What's On
            </h2>
            <div className="w-12 h-0.5 bg-golf-gold mx-auto" />
          </motion.div>

          {/* Tab Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-golf-green text-white shadow-md'
                    : 'bg-white text-golf-green border border-golf-green/30 hover:border-golf-green hover:bg-golf-green/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {promoItems
                .filter((item) => activeTab === 'All' || item.tab === activeTab)
                .map((item, i) => {
                  const globalIndex = promoItems.indexOf(item)
                  return (
                    <motion.div
                      key={item.alt}
                      layout
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square shadow-sm"
                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
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
                        <span className="font-body text-golf-gold text-xs tracking-widest uppercase">
                          {item.tab}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
            </AnimatePresence>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightbox({ open: false, index: 0 })}
            >
              {/* Close */}
              <button
                className="absolute top-5 right-6 text-white text-3xl font-light hover:text-golf-gold transition-colors z-10"
                onClick={() => setLightbox({ open: false, index: 0 })}
                aria-label="Close"
              >
                ✕
              </button>

              {/* Prev */}
              <button
                className="absolute left-3 md:left-6 text-white text-5xl hover:text-golf-gold transition-colors z-10 px-2"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox((prev) => ({
                    ...prev,
                    index: (prev.index - 1 + promoItems.length) % promoItems.length,
                  }))
                }}
                aria-label="Previous"
              >
                ‹
              </button>

              {/* Image */}
              <motion.div
                key={lightbox.index}
                className="relative max-w-3xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={promoItems[lightbox.index].src}
                  alt={promoItems[lightbox.index].alt}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
                {/* Caption */}
                <div className="mt-3 text-center">
                  <span className="font-body text-golf-gold text-xs tracking-widest uppercase">
                    {promoItems[lightbox.index].tab}
                  </span>
                  <p className="font-body text-gray-300 text-sm mt-1">
                    {promoItems[lightbox.index].alt}
                  </p>
                </div>
              </motion.div>

              {/* Next */}
              <button
                className="absolute right-3 md:right-6 text-white text-5xl hover:text-golf-gold transition-colors z-10 px-2"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox((prev) => ({
                    ...prev,
                    index: (prev.index + 1) % promoItems.length,
                  }))
                }}
                aria-label="Next"
              >
                ›
              </button>

              {/* Counter */}
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-400 font-body text-sm">
                {lightbox.index + 1} / {promoItems.length}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  )
}
