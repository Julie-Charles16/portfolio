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

export default function Navbar() {
  return (
    <nav className="w-full shadow-md">
      <div className="mx-auto flex items-center p-5">
        <div className="flex-none">
          <Logo />
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-16 list-none">
            <li>
              <a href="#about" className="font-semibold text-xl">
                À propos
              </a>
            </li>
            <li>
              <a href="#works" className="font-semibold text-xl">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="font-semibold text-xl">
                Contact
              </a>
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
