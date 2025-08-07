import Title from '../components/title'

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-6">
        <Title title="À propos" tag="h1" className="text-6xl font-bold" />
      </div>
      <div className="max-w-7xl text-justify text-4xl leading-relaxed">
        <p>
          Je suis Julie Charles. Avant de plonger dans l’univers du code, j’évoluais dans celui de
          l’esthétique. Deux mondes que tout semble opposer, et pourtant… le souci du détail,
          l’écoute, la précision, la créativité : autant de compétences que j’ai emportées avec moi
          dans ma reconversion. Apprendre à coder, c’est comme apprendre un nouveau langage, une
          nouvelle manière de penser. Cela demande patience, curiosité, et une bonne dose de
          résilience — des qualités que j’ai cultivées au fil de mon parcours. Aujourd’hui diplômée,
          je continue à avancer, projet après projet, en affinant mes compétences et ma vision. Ce
          que je cherche ? Donner du sens à ce que je crée. Et mettre le code au service d’idées
          humaines, utiles et bien pensées.
        </p>
      </div>
    </section>
  )
}
