import { useState } from 'react'
import ButtonDark from './button-dark'
import Logo from './logo'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md">
      <div
        className="mx-auto flex items-center justify-between px-6 md:px-20 py-5
                bg-[#fcf1fd] dark:bg-gray-900"
      >
        <Logo />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>

        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-16 list-none">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#8A226F] text-xl font-bold'
                    : 'font-bold text-gray-800 dark:text-white text-xl'
                }
              >
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#8A226F] text-xl font-bold'
                    : 'font-bold text-gray-800 dark:text-white text-xl'
                }
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#8A226F] text-xl font-bold'
                    : 'font-bold text-gray-800 dark:text-white text-xl'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ButtonDark icon="./img/moon.png" altIcon="./img/soleil.png" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-[#fcf1fd] dark:bg-gray-900 shadow-md overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#8A226F] font-bold'
                      : 'font-bold text-gray-800 dark:text-white'
                  }
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#8A226F] font-bold'
                      : 'font-bold text-gray-800 dark:text-white'
                  }
                >
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#8A226F] font-bold'
                      : 'font-bold text-gray-800 dark:text-white'
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <ButtonDark
                  icon="./img/moon.png"
                  altIcon="./img/soleil.png"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
