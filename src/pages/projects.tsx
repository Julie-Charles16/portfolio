import { StrictMode } from 'react'

import Slider from '../components/slider'
import data from '../data'
import '../styles/slider.css'
import Title from '../components/title'

export default function Projects() {
  return (
    <StrictMode>
      <div
        className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 md:px-10 pt-24
                      bg-[#fcf1fd] dark:bg-gray-900
                      text-gray-800 dark:text-white"
      >
        {/* Titre */}
        <Title
          title="Projets"
          tag="h1"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12"
        />

        {/* Slider */}
        <div className="w-full max-w-7xl">
          <Slider data={data} activeSlide={2} />
        </div>
      </div>
    </StrictMode>
  )
}
