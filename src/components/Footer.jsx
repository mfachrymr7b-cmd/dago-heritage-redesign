import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const socialLinks = [
  {
    label: '@dagoheritage_1917',
    href: 'https://www.instagram.com/dagoheritage_1917/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: '@dagodriving',
    href: 'https://www.instagram.com/dagodriving/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Golf Course', to: '/course' },
  { label: 'Green Fees', to: '/green-fees' },
  { label: 'Driving Range', to: '/driving-range' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white font-body">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 — Branding */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img
                src={logo}
                alt="Dago Heritage 1917"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              One of Indonesia's oldest and most prestigious golf destinations,
              nestled in the cool highlands of Dago, Bandung since 1917.
            </p>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-400 text-sm hover:text-golf-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Social Media */}
            <div className="flex flex-col gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-golf-gold transition-colors duration-200 group"
                >
                  <span className="text-golf-gold group-hover:scale-110 transition-transform duration-200">
                    {s.icon}
                  </span>
                  <span className="text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Golf Course Info */}
          <div className="flex flex-col gap-4 border-t border-golf-green/20 pt-8 md:border-t-0 md:pt-0">
            <div className="mb-2">
              <p className="text-golf-gold text-xs tracking-widest uppercase mb-2">Golf Course</p>
              <h3 className="font-heading text-lg font-bold text-white leading-snug">
                DAGO Heritage 1917<br />Golf Course
              </h3>
              <div className="w-8 h-0.5 bg-golf-gold mt-3" />
            </div>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="text-golf-gold mt-0.5 shrink-0">📍</span>
                <span>JL. Lapangan Golf Dago Atas No.78,<br />Bandung, West Java, Indonesia 40135</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">📞</span>
                <a href="tel:+622225025670" className="hover:text-golf-gold transition-colors duration-200">
                  +62 222 502 567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">📱</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Reservation</p>
                  <a href="tel:+6208112233917" className="hover:text-golf-gold transition-colors duration-200">
                    +62 0811 2233 1917
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">✉️</span>
                <a
                  href="mailto:dagoheritage1917@gmail.com"
                  className="hover:text-golf-gold transition-colors duration-200 break-all"
                >
                  dagoheritage1917@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">📸</span>
                <a
                  href="https://www.instagram.com/dagoheritage_1917/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-golf-gold transition-colors duration-200"
                >
                  @dagoheritage_1917
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 — Driving Range Info */}
          <div className="flex flex-col gap-4 border-t border-golf-green/20 pt-8 md:border-t-0 md:pt-0">
            <div className="mb-2">
              <p className="text-golf-gold text-xs tracking-widest uppercase mb-2">Driving Range</p>
              <h3 className="font-heading text-lg font-bold text-white leading-snug">
                DAGO Heritage 1917<br />Driving Range
              </h3>
              <div className="w-8 h-0.5 bg-golf-gold mt-3" />
            </div>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="text-golf-gold mt-0.5 shrink-0">📍</span>
                <span>JL. Lapangan Golf Dago Atas No.78,<br />Bandung, West Java, Indonesia 40135</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">📱</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Call Center</p>
                  <a href="tel:+6208112341917" className="hover:text-golf-gold transition-colors duration-200">
                    +62 0811 234 1917
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">✉️</span>
                <a
                  href="mailto:Marketing.driving@dagoheritage1917.com"
                  className="hover:text-golf-gold transition-colors duration-200 break-all"
                >
                  Marketing.driving@dagoheritage1917.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golf-gold shrink-0">📸</span>
                <a
                  href="https://www.instagram.com/dagodriving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-golf-gold transition-colors duration-200"
                >
                  @dagodriving
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-xs text-center sm:text-left">
          © PT DAGO ENDAH &nbsp;|&nbsp; © PT. SINERGY DAGO SARANA BERKARYA
        </p>
        <p className="text-gray-600 text-xs">
          DAGO Heritage 1917 · Bandung, West Java
        </p>
      </div>

    </footer>
  )
}
