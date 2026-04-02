import { motion } from 'framer-motion'
import './About.css'
import profilePhoto from '../../assets/Isis.png'

const skills = [
  'React', 'JavaScript', 'Node.js', 'Python',
  'PostgreSQL', 'REST APIs', 'Git', 'UI/UX',
  'HTML', 'CSS', 'TypeScript', 'vibe coding',
]

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__photo-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="about__photo-wrap">
              <div className="about__photo-placeholder">
                <img src={profilePhoto} alt="Isis" className="about__photo" />
                <div className="about__photo-ring" aria-hidden="true" />
              </div>
              <div className="about__petals" aria-hidden="true">
                <span className="about__petal" style={{ top: '-12px', right: '8px', animationDelay: '0s' }}>✿</span>
                <span className="about__petal" style={{ bottom: '-8px', left: '10px', animationDelay: '1.5s' }}>✿</span>
                <span className="about__petal" style={{ top: '50%', left: '-16px', animationDelay: '0.8s' }}>✿</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <span className="section-tag">Sobre mí</span>
            <h2 className="section-title">La persona detrás del código</h2>

            <div className="about__bio">
              <p>
                Soy tecnóloga en desarrollo de software especializada en crear
                soluciones digitales para personas y empresas.
              </p>
              <p>
                Me enfoco en construir herramientas que simplifican procesos,
                automatizan tareas y permiten a los negocios operar de forma más eficiente.
              </p>
              <p>
                He trabajado en proyectos como plataformas de gestión administrativa,
                sistemas de agendamiento y herramientas digitales para empresas.
              </p>
            </div>

            <div className="about__skills">
              <h3 className="about__skills-title">skills</h3>
              <div className="about__skills-list">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
