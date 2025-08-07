import { useState } from 'react'

interface ButtonProps {
  icon?: string
  altIcon?: string
  className?: string
  text?: string
}

export default function ButtonDark({ icon, altIcon, text, className }: ButtonProps) {
  const [currentIcon, setCurrentIcon] = useState(icon)
  const [fade, setFade] = useState(true)

  const toggleIcon = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIcon(prev => (prev === icon ? altIcon : icon))
      setFade(true)
    }, 150)
  }

  const isAltIcon = currentIcon === altIcon
  const backgroundColor = isAltIcon ? '#FCF1FD' : '#1E1E1E'
  const borderClass = isAltIcon ? 'border border-black' : 'border-transparent'
  const iconFilter = isAltIcon ? '' : 'filter invert brightness-0'

  const setContentButton = () => {
    const iconElement = currentIcon ? (
      <img
        key={currentIcon}
        className={`w-5 h-5 transition-opacity duration-300 ${iconFilter} ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        src={currentIcon}
        alt="icône du bouton"
      />
    ) : null

    const textElement = text ? (
      <span className={`font-semibold text-sm ${isAltIcon ? 'text-black' : 'text-white'}`}>
        {text}
      </span>
    ) : null

    return (
      <div className="flex items-center gap-2">
        {iconElement}
        {textElement}
      </div>
    )
  }

  return (
    <button
      className={`relative rounded-full min-w-[100px] h-[40px] px-4 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${borderClass} ${className || ''}`}
      style={{ backgroundColor }}
      aria-label={text || 'Bouton avec icône'}
      onClick={toggleIcon}
    >
      {setContentButton()}
    </button>
  )
}
