import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/images/Logo.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Golf Course', path: '/course' },
  { name: 'Green Fees', path: '/green-fees' },
  { name: 'Driving Range', path: '/driving-range' },
  { name: "What's On", path: '/#whatson' },
  { name: 'About Us', path: '/course#aboutus' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) => {
    const [pathname] = path.split('#')
    return pathname === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(pathname)
  }

  const linkClass = (path) =>
    `font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive(path)
        ? 'text-golf-gold border-b-2 border-golf-gold pb-0.5'
        : 'text-white hover:text-golf-gold'
    }`

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-golf-green/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Dago Heritage Golf"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ name, path }) => (
            <Link key={path} to={path} className={linkClass(path)}>
              {name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          key="mobile-menu"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="md:hidden bg-golf-green/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4"
        >
          {navLinks.map(({ name, path }) => (
            <Link key={path} to={path} className={linkClass(path)}>
              {name}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
