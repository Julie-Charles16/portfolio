import { useState, useEffect } from 'react'
import ButtonDark from './button-dark'
import Logo from './logo'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark,
  faUser,
  faFolderOpen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Fermer la sidebar si on passe en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Variants
  const sidebarVariants: Variants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    exit: { x: '-100%', transition: { duration: 0.3 } },
  }
  const listVariants: Variants = {
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const links = [
    { to: '/about', icon: faUser, text: 'À propos' },
    { to: '/projects', icon: faFolderOpen, text: 'Projets' },
    { to: '/contact', icon: faEnvelope, text: 'Contact' },
  ]

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Barre principale */}
      <div className="mx-auto flex items-center justify-between px-6 md:px-20 py-5 bg-[#fcf1fd] dark:bg-gray-900">
        {/* Logo desktop */}
        <Logo />

        {/* Liens desktop */}
        <div className="hidden md:flex flex-1 justify-end px-12">
          <ul className="flex space-x-16 list-none mr-12">
            {links.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#8A226F] text-xl font-bold'
                      : 'font-bold text-gray-800 dark:text-white text-xl'
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ButtonDark desktop */}
        <div className="hidden md:block">
          <ButtonDark icon="./img/moon.png" altIcon="./img/soleil.png" />
        </div>

        {/* Bouton burger mobile */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white ml-4">
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Sidebar mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-full w-64 bg-[#fcf1fd] dark:bg-gray-900 shadow-lg z-50 p-6 flex flex-col"
            >
              {/* Logo + ButtonDark en haut de la sidebar */}
              <div className="flex items-center justify-between mb-8">
                <Logo />
                <ButtonDark icon="./img/moon.png" altIcon="./img/soleil.png" />
              </div>

              {/* Liens */}
              <motion.ul
                key={isOpen ? 'open' : 'closed'}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start space-y-6"
              >
                {links.map((item, i) => (
                  <motion.li key={item.to} variants={itemVariants} transition={{ delay: i * 0.15 }}>
                    <NavLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-4 text-lg font-bold transition-colors duration-200 ${
                          isActive
                            ? 'text-[#8A226F]'
                            : 'text-gray-800 dark:text-white hover:text-[#8A226F]'
                        }`
                      }
                    >
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <FontAwesomeIcon icon={item.icon} />
                      </motion.span>
                      {item.text}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
