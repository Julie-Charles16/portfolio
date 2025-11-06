import ContactForm from '../components/form'
import Title from '../components/title'

export default function Contact() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-start px-4 pt-responsive
                    bg-[#fcf1fd] dark:bg-gray-900
                    text-gray-800 dark:text-white"
    >
      <Title
        title="Contactez-moi"
        tag="h1"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12"
      />

      <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mb-12">
        Une question, une opportunité ou simplement envie d’échanger ? Remplissez le formulaire
        ci-dessous et je vous répondrai rapidement.
      </p>

      <div
        className="w-full max-w-lg shadow-lg rounded-2xl p-8
                      bg-white dark:bg-gray-800
                      text-gray-800 dark:text-white"
      >
        <ContactForm />
      </div>
    </section>
  )
}
