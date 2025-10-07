import { useTheme } from '../context/useTheme'

interface ButtonProps {
  icon?: string // icône mode clair
  altIcon?: string // icône mode sombre
  text?: string
  className?: string
}

export default function ButtonDark({ icon, altIcon, text, className }: ButtonProps) {
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  // On choisit l'icône en fonction du thème global
  const currentIcon = isDark ? altIcon || icon : icon

  // Texte : noir sur clair, noir sur clair sur bg clair et blanc sur bg sombre
  const textColor = isDark ? 'text-black' : 'text-white'

  // Fond : clair en dark mode (si tu veux), sombre en mode clair
  const backgroundColor = isDark ? '#FCF1FD' : '#1E1E1E'

  // Icône : filter invert pour s’adapter au fond
  const iconFilter = isDark ? '' : 'filter invert brightness-0'

  return (
    <button
      className={`relative rounded-full min-w-[100px] h-[40px] px-4 flex items-center justify-center
                  cursor-pointer hover:scale-110 transition-all duration-300 ${className || ''}`}
      style={{ backgroundColor }}
      aria-label={text || 'Bouton avec icône'}
      onClick={toggleTheme}
    >
      <div className="flex items-center gap-2">
        {currentIcon && (
          <img className={`w-5 h-5 ${iconFilter}`} src={currentIcon} alt="icône du bouton" />
        )}
        {text && <span className={`font-semibold text-sm ${textColor}`}>{text}</span>}
      </div>
    </button>
  )
}
