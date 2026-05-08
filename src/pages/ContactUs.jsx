import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import PageTitle from '../components/ui/PageTitle'

const golfCourseContacts = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+62 222 502 567',
    href: 'tel:+622225025670',
  },
  {
    icon: '📱',
    label: 'Reservation',
    value: '+62 0811 2233 1917',
    href: 'tel:+6208112233917',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'dagoheritage1917@gmail.com',
    href: 'mailto:dagoheritage1917@gmail.com',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@dagoheritage_1917',
    href: 'https://www.instagram.com/dagoheritage_1917/',
    external: true,
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia 40135',
    href: 'https://maps.google.com/?q=Dago+Heritage+1917+Golf+Course',
    external: true,
  },
]

const drivingRangeContacts = [
  {
    icon: '📱',
    label: 'WhatsApp / Phone',
    value: '+62 0811 234 1917',
    href: 'https://wa.me/6208112341917',
    external: true,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'Marketing.driving@dagoheritage1917.com',
    href: 'mailto:Marketing.driving@dagoheritage1917.com',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@dagodriving',
    href: 'https://www.instagram.com/dagodriving/',
    external: true,
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia 40135',
    href: 'https://maps.google.com/?q=Dago+Heritage+1917+Golf+Course',
    external: true,
  },
]

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function ContactUs() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <div className="bg-dark-bg text-white font-body">
      <PageTitle title="Contact Us" />

      {/* ─── Section 1: Hero ─── */}
      <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-bg to-golf-green">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            className="text-golf-gold font-body text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Dago Heritage 1917
          </motion.p>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Contact Us
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
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* ─── Section 2: Contact Info ─── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Get In Touch"
            subtitle="Contact Information"
            description="Reach out to us through any of the channels below. Our team is ready to assist you."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Golf Course */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-xl border border-golf-green/20 p-8 shadow-sm h-full">
                <div className="mb-6">
                  <p className="font-body text-xs tracking-[0.3em] uppercase mb-2 text-golf-green">
                    Golf Course
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-golf-green leading-snug">
                    DAGO Heritage 1917<br />Golf Course
                  </h3>
                  <div className="w-8 h-0.5 bg-golf-gold mt-3" />
                </div>

                <div className="flex flex-col gap-4">
                  {golfCourseContacts.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-golf-gold mt-0.5 shrink-0 text-lg">{item.icon}</span>
                      <div>
                        <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-gray-700 hover:text-golf-green transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <a
                            href={item.href}
                            className="font-body text-sm text-gray-700 hover:text-golf-green transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Driving Range */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-xl border border-golf-green/20 p-8 shadow-sm h-full">
                <div className="mb-6">
                  <p className="font-body text-xs tracking-[0.3em] uppercase mb-2 text-golf-green">
                    Driving Range
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-golf-green leading-snug">
                    DAGO Heritage 1917<br />Driving Range
                  </h3>
                  <div className="w-8 h-0.5 bg-golf-gold mt-3" />
                </div>

                <div className="flex flex-col gap-4">
                  {drivingRangeContacts.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-golf-gold mt-0.5 shrink-0 text-lg">{item.icon}</span>
                      <div>
                        <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-gray-700 hover:text-golf-green transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <a
                            href={item.href}
                            className="font-body text-sm text-gray-700 hover:text-golf-green transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ─── Section 3: Google Maps ─── */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Find Us"
            subtitle="Location"
            description="Visit us at Dago Heritage 1917, nestled in the cool highlands of Dago, Bandung."
            align="center"
            theme="dark"
          />

          <AnimatedSection direction="up">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-golf-green/30 max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d107.6391!3d-6.8721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437436f0a5b8e8e!2sDago%20Heritage%201917%20Golf%20Course!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="450"
                style={{ border: 0, display: 'block', maxWidth: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dago Heritage 1917 Golf Course Location"
              />
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=Dago+Heritage+1917+Golf+Course"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-golf-gold hover:text-golf-gold/80 transition-colors duration-200 underline underline-offset-4"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Section 4: Contact Form ─── */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Send Us a Message"
            subtitle="Contact Form"
            description="Fill in the form below and we'll get back to you as soon as possible."
            align="center"
            theme="light"
          />

          <AnimatedSection direction="up">
            {submitted ? (
              <motion.div
                className="text-center py-16 px-8 bg-white rounded-xl border border-golf-green/20 shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl font-bold text-golf-green mb-3">
                  Message Sent!
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <Button variant="outline" onClick={handleReset} size="md">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-golf-green/20 shadow-sm p-8 space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-xs tracking-widest uppercase text-golf-green mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                               font-body text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:border-golf-gold focus:ring-1 focus:ring-golf-gold
                               transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-xs tracking-widest uppercase text-golf-green mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                               font-body text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:border-golf-gold focus:ring-1 focus:ring-golf-gold
                               transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-xs tracking-widest uppercase text-golf-green mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+62 ..."
                    className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                               font-body text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:border-golf-gold focus:ring-1 focus:ring-golf-gold
                               transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs tracking-widest uppercase text-golf-green mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full bg-golf-green/10 border border-golf-green/30 rounded-lg px-4 py-3
                               font-body text-sm text-gray-800 placeholder-gray-400
                               focus:outline-none focus:border-golf-gold focus:ring-1 focus:ring-golf-gold
                               transition-colors duration-200 resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
