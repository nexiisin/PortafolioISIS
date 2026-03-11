import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  const isValid = form.name.trim() && form.email.trim() && form.message.trim()

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag">Contacto</span>
            <h2 className="section-title">Hablemos de tu proyecto</h2>
            <p className="contact__desc">
              ¿Tienes una idea? ¿Necesitas automatizar algo? ¿Quieres mejorar tu presencia digital?
              Escríbeme y con gusto conversamos.
            </p>

            <div className="contact__ways">
              <div className="contact__way">
                <span className="contact__way-icon">✉️</span>
                <div>
                  <p className="contact__way-label">Correo</p>
                  <p className="contact__way-value">hola@isis.dev</p>
                </div>
              </div>
              <div className="contact__way">
                <span className="contact__way-icon">⏱️</span>
                <div>
                  <p className="contact__way-label">Tiempo de respuesta</p>
                  <p className="contact__way-value">Menos de 24 horas</p>
                </div>
              </div>
            </div>

            <div className="contact__petals" aria-hidden="true">
              <span className="contact__petal" style={{ top: '20%', right: '0', animationDelay: '0s' }}>✿</span>
              <span className="contact__petal" style={{ bottom: '10%', right: '15%', animationDelay: '1.3s' }}>✿</span>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {sent ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="contact__success-icon">🎉</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirme. Te responderé a la brevedad.</p>
                <button
                  className="contact__reset"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Nombre</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">Correo electrónico</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={!isValid || loading}
                >
                  {loading ? (
                    <span className="contact__spinner" aria-hidden="true" />
                  ) : null}
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
