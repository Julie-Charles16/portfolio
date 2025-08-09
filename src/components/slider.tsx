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
  icon?: React.ReactNode
  title: string
  desc: string
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

      <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft}
          color="#000000ff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight}
          color="#000000ff"
          size="2x"
        />
      </div>
    </>
  )
}

function SliderContent({ icon, title, desc }: SliderContentProps) {
  return (
    <div className="sliderContent">
      {icon}
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Slider
