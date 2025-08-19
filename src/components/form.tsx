import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key
      )

      .then(
        () => {
          toast.success('Message envoyé avec succès ✅', { duration: 3000 })
          form.current?.reset()
        },
        error => {
          console.error('Erreur:', error.text)
          toast.error("Erreur lors de l'envoi ❌", { duration: 3000 })
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <>
      {/* Toast container */}
      <Toaster position="bottom-right" />

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }} // Départ invisible et légèrement en bas
        animate={{ opacity: 1, y: 0 }} // Arrive en place
        transition={{ duration: 0.6, ease: 'easeOut' }} // Durée et fluidité
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="border p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-[#8A226F] text-white font-semibold py-3 rounded-lg transition hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </motion.form>
    </>
  )
}
