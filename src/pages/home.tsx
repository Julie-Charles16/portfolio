import Title from '../components/title'
import ButtonDark from '../components/button-dark'

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen
                 bg-[#fcf1fd] dark:bg-gray-900
                 text-gray-800 dark:text-white min-h-[88vh] sm:min-h-[80vh]"
    >
      <div className="flex flex-1 flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center px-6 sm:px-10 pt-16 lg:pt-0 pb-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 xl:gap-60">
          {/* Image */}
          <img
            src="./img/moi.png"
            alt="mon avatar"
            className="order-1 lg:order-2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]
                       object-cover rounded-full lg:ml-24 border-4 border-black dark:border-white"
          />

          {/* Bloc texte */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left mt-6 lg:mt-0">
            <Title
              title="JULIE"
              tag="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            />
            <Title
              title="CHARLES"
              tag="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            />
            <div className="mt-2">
              <Title
                title="entre lignes de code et lignes de vie,"
                tag="h2"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
              />
              <Title
                title="un parcours réécrit en HTML."
                tag="h2"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
              />
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <a href="./CV-JULIE.CHARLES.pdf" download="CV-JULIE.CHARLES.pdf" target="_blank">
                <ButtonDark
                  icon="./img/download.png"
                  text="CV"
                  className="text-black dark:text-black"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
