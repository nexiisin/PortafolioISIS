import { motion } from 'framer-motion'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  }),
}

function Petal({ style }) {
  return <span className="petal" style={style} aria-hidden="true">✿</span>
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__petals" aria-hidden="true">
        <Petal style={{ top: '12%', left: '8%', animationDelay: '0s' }} />
        <Petal style={{ top: '25%', right: '10%', animationDelay: '1.2s' }} />
        <Petal style={{ bottom: '20%', left: '15%', animationDelay: '2.1s' }} />
        <Petal style={{ top: '60%', right: '6%', animationDelay: '0.6s' }} />
        <Petal style={{ top: '40%', left: '3%', animationDelay: '1.8s' }} />
      </div>

      <div className="hero__content container">
        <motion.span
          className="hero__badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Disponible para proyectos ✨
        </motion.span>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hola, soy Isis
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Desarrolladora de software.
        </motion.p>

        <motion.p
          className="hero__description"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Creo soluciones digitales para personas y empresas que quieren
          automatizar procesos, lanzar productos online o mejorar su presencia digital.
        </motion.p>

        <motion.div
          className="hero__cta"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a href="#proyectos" className="btn btn--primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn--outline">
            Trabajar conmigo
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-dot" />
      </div>
    </section>
  )
}
