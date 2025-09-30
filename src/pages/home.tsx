import Title from '../components/title'
import ButtonDark from '../components/button-dark'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center px-6 sm:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 xl:gap-60">
          {/* Bloc texte */}
          <div className="flex flex-col justify-center text-center lg:text-left">
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
              <a href="./CV-Julie.Charles.pdf" download="CV-Julie.Charles.pdf" target="_blank">
                <ButtonDark icon="./img/download.png" text="CV" />
              </a>
            </div>
          </div>

          {/* Image */}
          <img
            src="./img/Me.png"
            alt="mon avatar"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] object-cover rounded-full lg:ml-24"
          />
        </div>
      </div>
    </div>
  )
}
