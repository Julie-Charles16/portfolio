import { StrictMode } from 'react'

import Slider from '../components/slider'

import data from '../data'
import '../styles/slider.css'
import Title from '../components/title'

export default function Projects() {
  return (
    <StrictMode>
      <div className="">
        <Title title="Projets" tag="h1" className="text-6xl font-bold text-center mt-12" />
        <div className="center">
          <Slider data={data} activeSlide={2} />
        </div>
      </div>
    </StrictMode>
  )
}
