import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Gestión de Asambleas',
    summary: 'Sistema digital diseñado para administrar asambleas en conjuntos residenciales.',
    problem: 'Las reuniones y votaciones se gestionaban manualmente, generando desorden y falta de transparencia.',
    solution: 'Se creó una plataforma que permite organizar asambleas, registrar votaciones y centralizar la información de los propietarios.',
    tech: ['React', 'API REST', 'Base de datos relacional'],
    icon: '🏛️',
  },
  {
    number: '02',
    title: 'Gestión de Copropiedades',
    summary: 'Plataforma para administrar conjuntos residenciales de manera integral.',
    problem: 'Los administradores tenían múltiples herramientas y procesos manuales para manejar información de residentes y procesos administrativos.',
    solution: 'Se desarrolló un sistema que centraliza la gestión administrativa, permitiendo controlar información, procesos y comunicación con los residentes.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🏘️',
  },
  {
    number: '03',
    title: 'Sistema para Óptica',
    summary: 'Sistema diseñado para una óptica que necesitaba organizar citas y clientes.',
    problem: 'Las citas se gestionaban manualmente y era difícil controlar el historial de clientes y el flujo de trabajo.',
    solution: 'Se creó un sistema que permite agendar citas, registrar pacientes, gestionar el historial de atención y organizar el flujo de trabajo de la óptica.',
    tech: ['React', 'Backend API', 'MySQL'],
    icon: '👓',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

export default function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <div className="projects__header">
          <span className="section-tag">Proyectos</span>
          <h2 className="section-title">Lo que he construido</h2>
          <p className="section-subtitle">
            Proyectos reales que resolvieron problemas reales para clientes reales.
          </p>
        </div>

        <motion.div
          className="projects__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-card__number">{project.number}</div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="project-card__icon">{project.icon}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                </div>
                <p className="project-card__summary">{project.summary}</p>

                <div className="project-card__detail">
                  <div className="project-card__block">
                    <h4 className="project-card__label">⚠️ Problema</h4>
                    <p className="project-card__text">{project.problem}</p>
                  </div>
                  <div className="project-card__block">
                    <h4 className="project-card__label">✅ Solución</h4>
                    <p className="project-card__text">{project.solution}</p>
                  </div>
                </div>

                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
