import ContactForm from '../components/form'
import Title from '../components/title'

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <Title
        title="Contactez-moi"
        tag="h1"
        className="text-4xl md:text-6xl font-bold text-center mb-6"
      />

      <p className="text-center text-gray-600 max-w-xl mb-10">
        Une question, une opportunité ou simplement envie d’échanger ? Remplissez le formulaire
        ci-dessous et je vous répondrai rapidement.
      </p>

      <div className="w-full max-w-lg shadow-lg rounded-2xl p-8">
        <ContactForm />
      </div>
    </section>
  )
}
