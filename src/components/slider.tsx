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
      <div className="slideC">
        {data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="btns flex justify-center gap-5 mt-20">
        <FontAwesomeIcon
          className={`btn w-10 h-10 flex justify-center items-center rounded-full transition-all
                bg-white/20 dark:bg-black/20
                border border-white/25 dark:border-black/25`}
          onClick={prev}
          icon={faChevronLeft}
          size="2x"
        />
        <FontAwesomeIcon
          className={`btn w-10 h-10 flex justify-center items-center rounded-full transition-all
                bg-white/20 dark:bg-black/20
                border border-white/25 dark:border-black/25`}
          onClick={next}
          icon={faChevronRight}
          size="2x"
        />
      </div>
    </>
  )
}

function SliderContent({ title, desc, image, tech, github, demo }: SliderContentProps) {
  return (
    <div className="sliderContent">
      {image && <img src={image} alt={title} className="projectImage" />}
      <h2>{title}</h2>
      <p>{desc}</p>

      <div className="techStack">
        {tech?.map((t, i) => (
          <span key={i} className="tech">
            {t}
          </span>
        ))}
      </div>

      <div className="links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default Slider
