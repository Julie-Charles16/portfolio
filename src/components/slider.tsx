import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface SliderItem {
  id: string | number
  bgColor: string
  icon?: React.ReactNode
  title: string
  desc: string
}

interface SliderProps {
  activeSlide: number
  data: SliderItem[]
}

interface SliderContentProps {
  title: string
  desc: string
  image?: string
  tech?: string[]
  github?: string
  demo?: string
}

function Slider({ activeSlide: initialSlide, data }: SliderProps) {
  const [activeSlide, setActiveSlide] = useState<number>(initialSlide)

  const next = () => {
    if (activeSlide < data.length - 1) {
      setActiveSlide(activeSlide + 1)
    }
  }

  const prev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    }
  }

  const getStyles = (index: number): React.CSSProperties => {
    const baseTransform = (x: number, z: number, rotY: number) => ({
      opacity: 1,
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg)`,
    })

    if (activeSlide === index) return { ...baseTransform(0, 0, 0), zIndex: 10 }
    if (activeSlide - 1 === index) return { ...baseTransform(-240, -400, 35), zIndex: 9 }
    if (activeSlide + 1 === index) return { ...baseTransform(240, -400, -35), zIndex: 9 }
    if (activeSlide - 2 === index) return { ...baseTransform(-480, -500, 35), zIndex: 8 }
    if (activeSlide + 2 === index) return { ...baseTransform(480, -500, -35), zIndex: 8 }
    if (index < activeSlide - 2) return { ...baseTransform(-480, -500, 35), opacity: 0, zIndex: 7 }
    return { ...baseTransform(480, -500, -35), opacity: 0, zIndex: 7 }
  }

  return (
    <>
      <div className="slider-wrapper flex flex-col items-center">
        <div className="slideC relative w-[90%] max-w-[360px] h-[clamp(320px,55vh,420px)] m-auto perspective-[1000px] [transform-style:preserve-3d]">
          {data.map((item, i) => (
            <React.Fragment key={item.id}>
              <div
                className="slide absolute top-0 w-full h-full flex justify-center items-center rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  background: item.bgColor,
                  boxShadow: `0 5px 20px ${item.bgColor}30`,
                  ...getStyles(i),
                }}
              >
                <SliderContent {...item} />
              </div>
              <div
                className="reflection absolute w-full h-[60px] bottom-[-60px] rounded-xl transition-all duration-500 ease-in-out"
                style={{
                  background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                  ...getStyles(i),
                }}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Boutons déjà Tailwind */}
        <div className="btns flex justify-center gap-5 mt-4 sm:mt-8 md:mt-10">
          <FontAwesomeIcon
            onClick={prev}
            icon={faChevronLeft}
            size="1x"
            className="
  btn w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center
  rounded-full transition-all
  bg-black/5 dark:bg-white/20
  border border-black/25 dark:border-white/25
  shadow-md dark:shadow-md
  hover:translate-y-[-3px] hover:scale-105 hover:bg-black/20 dark:hover:bg-white/30
"
          />
          <FontAwesomeIcon
            onClick={next}
            icon={faChevronRight}
            size="1x"
            className="
  btn w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center
  rounded-full transition-all
  bg-black/5 dark:bg-white/20
  border border-black/25 dark:border-white/25
  shadow-md dark:shadow-md
  hover:translate-y-[-3px] hover:scale-105 hover:bg-black/20 dark:hover:bg-white/30
"
          />
        </div>
      </div>
    </>
  )
}

function SliderContent({ title, desc, image, tech, github, demo }: SliderContentProps) {
  return (
    <div className="sliderContent flex flex-col justify-between items-center h-full p-4 text-center overflow-hidden text-white/80">
      {image && (
        <img
          src={image}
          alt={title}
          className="projectImage w-full max-h-[180px] object-cover rounded-lg"
        />
      )}

      <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white/90">{title}</h2>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed overflow-hidden text-ellipsis max-h-[4.5em] text-white/70">
        {desc}
      </p>

      <div className="techStack flex flex-wrap gap-2 mt-2">
        {tech?.map((t, i) => (
          <span key={i} className="tech bg-white/15 text-white/80 px-2 py-1 rounded-md text-xs">
            {t}
          </span>
        ))}
      </div>

      <div className="links flex gap-3 mt-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
          border border-white/70
          text-white/85
          px-3 py-1
          rounded-md
          font-bold
          transition
          hover:bg-white
          hover:text-black
        "
          >
            Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
          border border-white/70
          text-white/85
          px-3 py-1
          rounded-md
          font-bold
          transition
          hover:bg-white
          hover:text-black
        "
          >
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default Slider
