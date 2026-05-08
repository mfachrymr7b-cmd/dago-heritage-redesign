import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'

const contactInfo = [
  {
    id: 'golf',
    label: 'Golf Course',
    title: 'DAGO Heritage 1917 Golf Course',
    color: 'golf',
    items: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        label: 'Phone',
        value: '+62 222 502 567',
        href: 'tel:+622225025670',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        label: 'Reservation',
        value: '+62 0811 2233 1917',
        href: 'tel:+6208112233917',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Email',
        value: 'dagoheritage1917@gmail.com',
        href: 'mailto:dagoheritage1917@gmail.com',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        ),
        label: 'Instagram',
        value: '@dagoheritage_1917',
        href: 'https://www.instagram.com/dagoheritage_1917/',
        external: true,
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        label: 'Address',
        value: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia 40135',
        href: 'https://maps.google.com/?q=Dago+Heritage+Golf+Course+Bandung',
        external: true,
      },
    ],
  },
  {
    id: 'driving',
    label: 'Driving Range',
    title: 'DAGO Heritage 1917 Driving Range',
    items: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        label: 'Call Center',
        value: '+62 0811 234 1917',
        href: 'tel:+6208112341917',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Email',
        value: 'Marketing.driving@dagoheritage1917.com',
        href: 'mailto:Marketing.driving@dagoheritage1917.com',
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        ),
        label: 'Instagram',
        value: '@dagodriving',
        href: 'https://www.instagram.com/dagodriving/',
        external: true,
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        label: 'Address',
        value: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia 40135',
        href: 'https://maps.google.com/?q=Dago+Heritage+Golf+Course+Bandung',
        external: true,
      },
    ],
  },
]

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-dark-bg text-white font-body">

      {/* ── SECTION 1: HERO ── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-golf-green/60 to-dark-bg" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '24px 24px' }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.p
            className="font-body text-golf-gold text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Dago Heritage 1917
          </motion.p>
          <motion.h1
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="w-16 h-0.5 bg-golf-gold mx-auto mb-5"
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          />
          <motion.p
            className="font-body text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 2: CONTACT INFO ── */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Get In Touch"
            subtitle="Contact Information"
            align="center"
            theme="dark"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((col, ci) => (
              <AnimatedSection key={col.id} direction={ci === 0 ? 'left' : 'right'} delay={ci * 0.15}>
                <div className="bg-golf-green/10 border border-golf-green/30 rounded-xl p-8 h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <p className="font-body text-golf-gold text-xs tracking-widest uppercase mb-2">
                      {col.label}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white leading-snug">
                      {col.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-golf-gold mt-3" />
                  </div>

                  {/* Contact Items */}
                  <div className="space-y-4">
                    {col.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 group"
                      >
                        <span className="text-golf-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <div>
                          <p className="font-body text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                            {item.label}
                          </p>
                          <p className="font-body text-gray-200 text-sm group-hover:text-golf-gold transition-colors duration-200 break-all">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: GOOGLE MAPS ── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Find Us"
            subtitle="Location"
            description="JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia 40135"
            align="center"
            theme="light"
          />

          <AnimatedSection direction="up" delay={0.1}>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-golf-green/20">
              <iframe
                title="Dago Heritage Golf Course Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d107.6391!3d-6.8721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437436f0a5b8e8e!2sDago%20Heritage%201917%20Golf%20Course!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="450"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=Dago+Heritage+1917+Golf+Course+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-golf-green text-sm font-semibold hover:text-golf-gold transition-colors duration-200"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 4: CONTACT FORM ── */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            title="Send Us a Message"
            subtitle="Get In Touch"
            description="Fill in the form below and our team will get back to you as soon as possible."
            align="center"
            theme="dark"
          />

          <AnimatedSection direction="up" delay={0.1}>
            {submitted ? (
              <motion.div
                className="text-center py-16 bg-golf-green/10 border border-golf-green/30 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="font-body text-gray-400 text-sm">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }) }}
                  className="mt-6 font-body text-golf-gold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-body text-xs text-gray-400 uppercase tracking-widest mb-2 block">
                    Full Name <span className="text-golf-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                               font-body text-sm text-white placeholder-gray-500
                               focus:outline-none focus:border-golf-gold transition-colors duration-200"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-gray-400 uppercase tracking-widest mb-2 block">
                      Email <span className="text-golf-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                                 font-body text-sm text-white placeholder-gray-500
                                 focus:outline-none focus:border-golf-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-400 uppercase tracking-widest mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 8xx xxxx xxxx"
                      className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                                 font-body text-sm text-white placeholder-gray-500
                                 focus:outline-none focus:border-golf-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs text-gray-400 uppercase tracking-widest mb-2 block">
                    Message <span className="text-golf-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                               font-body text-sm text-white placeholder-gray-500 resize-none
                               focus:outline-none focus:border-golf-gold transition-colors duration-200"
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full justify-center">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
