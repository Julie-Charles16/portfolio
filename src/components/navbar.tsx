// import { useState } from 'react'
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <>
//       <nav>
//         <div>MonLogo</div>
//         <button className="navbar-toggle" onClick={toggleMenu}>
//           {isOpen ? '✖' : '☰'}
//         </button>
//         <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
//           <li>
//             <a href="#home">Accueil</a>
//           </li>
//           <li>
//             <a href="#about">À propos</a>
//           </li>
//           <li>
//             <a href="#works">Projets</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   )
// }
import ButtonDark from './button-dark'
import Logo from './logo'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="mx-auto flex items-center px-20 py-5">
        <Logo />
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-16 list-none">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-[#8A226F] font-bold' : 'font-bold text-gray-800'
                }
              >
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? 'text-[#8A226F] font-bold' : 'font-bold text-gray-800'
                }
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-[#8A226F] font-bold' : 'font-bold text-gray-800'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-none">
          <ButtonDark icon="./img/moon.png" altIcon="./img/soleil.png" />
        </div>
      </div>
    </nav>
  )
}
