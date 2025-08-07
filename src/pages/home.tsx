import Title from '../components/title'
import ButtonDark from '../components/button-dark'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center px-10">
        <div className="flex flex-row items-center gap-60">
          <div className="flex flex-col justify-center">
            <Title title="JULIE" tag="h1" className="text-8xl font-bold leading-tight" />
            <Title title="CHARLES" tag="h1" className="text-8xl font-bold leading-tight" />
            <div className="mt-2">
              <Title
                title="entre lignes de code et lignes de vie,"
                tag="h2"
                className="text-4xl leading-snug"
              />
              <Title
                title="un parcours réécrit en HTML."
                tag="h2"
                className="text-4xl leading-snug"
              />
            </div>
            <div className="mt-6">
              <a href="./CV-Julie.Charles.pdf" download="CV-Julie.Charles.pdf" target="_blank">
                <ButtonDark icon="./img/download.png" text="CV" />{' '}
              </a>
            </div>
          </div>
          <img
            src="./img/Me.png"
            alt="mon avatar"
            className="w-[400px] h-[400px] object-cover rounded-full ml-24"
          />
        </div>
      </div>
    </div>
  )
}
