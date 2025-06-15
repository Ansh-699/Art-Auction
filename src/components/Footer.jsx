import { Link } from 'react-router'
import SocialIcons from './Header/SocialIcons'
import { useTheme } from '@/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()
  const footerBg = darkMode ? '' : 'bg-gray-100'
  const textPrimary = darkMode ? 'text-white' : 'text-black'
  const textSecondary = darkMode ? 'text-cusGray' : 'text-gray-600'
  const hoverText = darkMode ? 'hover:text-white' : 'hover:text-black'
  const borderColor = darkMode ? 'border-cusOnyx' : 'border-gray-300'

  return (
    <div className={` lg:h-16 py-4 lg:py-0 bg-black ${darkMode ? '' : 'border-t'} ${borderColor} grid items-center ${footerBg}`}>
      {!darkMode && <div className=""></div>}

      <section>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p aria-level={4} className={textPrimary}>
            ©Copyright 2025 HandCraft
          </p>
          <div className="mt-5 md:mt-2 lg:mt-0 flex flex-col md:flex-row justify-between flex-1 lg:justify-end items-center gap-3 sm:gap-6 lg:gap-2 xl:gap-8">
            <Link to="" target="_blank">
              <span aria-level={4} className={`${textSecondary} ${hoverText} transition-colors duration-150`}>
                Support Center
              </span>
            </Link>
            <Link to="" target="_blank">
              <span aria-level={4} className={`${textSecondary} ${hoverText} transition-colors duration-150`}>
                Terms & Conditions
              </span>
            </Link>
            <Link to="" target="_blank">
              <span aria-level={4} className={`${textSecondary} ${hoverText} transition-colors duration-150`}>
                Privacy Policy
              </span>
            </Link>
            <div className="flex justify-start items-center gap-3 lg:gap-1 xl:gap-3">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
