import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos que convierten visitantes en clientes.',
    items: ['Páginas web profesionales', 'Landing pages', 'Plataformas web'],
    color: 'purple',
  },
  {
    icon: '⚡',
    title: 'Automatización y Bots',
    description: 'Automatiza tareas repetitivas y libera tiempo para lo importante.',
    items: ['Automatización de tareas', 'Bots para procesos', 'Integraciones entre sistemas'],
    color: 'pink',
  },
  {
    icon: '📱',
    title: 'Aplicaciones a Medida',
    description: 'Software diseñado exactamente para tus necesidades de negocio.',
    items: ['Aplicaciones web', 'Apps móviles', 'Herramientas internas para empresas'],
    color: 'purple',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services__header">
          <span className="section-tag">Servicios</span>
          <h2 className="section-title">¿En qué puedo ayudarte?</h2>
          <p className="section-subtitle">
            Ofrezco soluciones digitales completas, desde la idea hasta el producto final.
          </p>
        </div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={`service-card service-card--${service.color}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item} className="service-card__item">
                    <span className="service-card__check" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
