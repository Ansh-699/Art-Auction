import heroImg from '@/assets/images/hero-img.png'
import { useTheme } from '@/ThemeContext'

const Hero = () => {
  const { darkMode } = useTheme() // Access the current theme state

  // Dynamic background and text colors
  const containerBg = darkMode ? 'bg-[#141415] text-white' : 'bg-white text-black'
  const imageShadow = darkMode ? '' : '' // No shadow in light mode

  return (
    <section className={`min-h-[calc(100dvh-160px)] flex flex-col justify-center items-center ${containerBg}`}>
      <img
        src={heroImg}
        alt="Art Discovery Platform"
        className={`xsm:w-[90%] sm:w-[80%] md:w-2/4 xl:w-1/3 ${imageShadow}`}
        aria-label="Art Discovery Platform"
      />
    </section>
  )
}

export default Hero
