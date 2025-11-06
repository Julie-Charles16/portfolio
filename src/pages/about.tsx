import Title from '../components/title'

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-responsive
                    bg-[#fcf1fd] dark:bg-gray-900
                    text-gray-800 dark:text-white"
    >
      <div className="text-center mb-12">
        <Title
          title="À propos"
          tag="h1"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12"
        />
      </div>

      <div className="star-wars-container overflow-hidden h-[70vh] relative w-full">
        <div className="star-wars-text flex flex-col space-y-6 animate-scrollUp">
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Je suis Julie Charles. Avant de plonger dans l’univers du code, j’évoluais dans celui de
            l’esthétique.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Deux mondes que tout semble opposer, et pourtant… le souci du détail, l’écoute, la
            précision, la créativité.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Apprendre à coder, c’est comme apprendre un nouveau langage, une nouvelle manière de
            penser.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Cela demande patience, curiosité, et une bonne dose de résilience — des qualités que
            j’ai cultivées au fil de mon parcours.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Aujourd’hui diplômée, je continue à avancer, projet après projet, en affinant mes
            compétences et ma vision.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Ce que je cherche ? Donner du sens à ce que je crée. Et mettre le code au service
            d’idées humaines, utiles et bien pensées.
          </p>
        </div>
      </div>
    </section>
  )
}
