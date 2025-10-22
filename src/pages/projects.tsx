import { StrictMode } from 'react'

import Slider from '../components/slider'
import data from '../data'
import '../styles/slider.css'
import Title from '../components/title'

export default function Projects() {
  return (
    <StrictMode>
      <div
        className="flex flex-col items-center justify-start
             px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24
             bg-[#fcf1fd] dark:bg-gray-900
             text-gray-800 dark:text-white
             min-h-[90vh] sm:min-h-screen"
      >
        <Title
          title="Mes projets"
          tag="h1"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12"
        />
        <p className="text-center max-w-4xl mb-10 text-base sm:text-lg leading-relaxed">
          Découvrez ici les projets que j’ai conçus pendant ma formation et mon stage. Ils reflètent
          mon évolution, ma curiosité et mon envie d’apprendre dans le domaine du développement web.
        </p>

        <div className="w-full max-w-7xl">
          <Slider data={data} activeSlide={2} />
        </div>
      </div>
    </StrictMode>
  )
}
