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
            Je m’appelle Julie Charles. Avant de me tourner vers le développement web, j’ai évolué dans le domaine de l’esthétique. 
            Deux univers en apparence très différents, mais qui partagent finalement beaucoup : le sens du détail, l’écoute des besoins, la précision et la créativité.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Ma reconversion m’a permis de découvrir le code comme un nouveau langage, une nouvelle façon de réfléchir et de construire. 
            Apprendre à développer demande de la curiosité, de la patience et de la persévérance — des qualités que j’ai renforcées tout au long de mon parcours.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
            Aujourd’hui, je poursuis ma formation en Conception et Développement d’Applications (CDA) et je suis à la recherche d’un stage afin de consolider mes compétences techniques et de me confronter à des projets concrets. 
            J’avance projet après projet, en affinant ma pratique et en développant une approche centrée sur l’utilisateur.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-center">
           Ce qui me motive avant tout : donner du sens à ce que je crée, et mettre le développement au service d’idées humaines, utiles et bien pensées.
          </p>
        </div>
      </div>
    </section>
  )
}
