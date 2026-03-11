import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Simulator.css'

/* ── Web Simulator ──────────────────────────────────────────── */
const webSteps = [
  {
    label: 'Tipo de página',
    options: ['Landing', 'Corporativa', 'Tienda online'],
  },
  {
    label: 'Número de secciones',
    options: ['3 secciones', '5 secciones', '8 secciones'],
  },
  {
    label: 'Funciones extra',
    options: ['Formularios', 'Pagos online', 'Panel de administración'],
    multiple: true,
  },
]

function WebSimulator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ 0: null, 1: null, 2: [] })
  const [done, setDone] = useState(false)

  function handleSelect(value) {
    const current = webSteps[step]
    if (current.multiple) {
      const prev = answers[step]
      const next = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
      setAnswers({ ...answers, [step]: next })
    } else {
      setAnswers({ ...answers, [step]: value })
    }
  }

  function canNext() {
    const val = answers[step]
    if (webSteps[step].multiple) return val.length > 0
    return val !== null
  }

  function handleNext() {
    if (step < webSteps.length - 1) setStep(step + 1)
    else setDone(true)
  }

  function reset() {
    setStep(0)
    setAnswers({ 0: null, 1: null, 2: [] })
    setDone(false)
  }

  if (done) {
    return (
      <motion.div
        className="sim-result"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sim-result__icon">🎉</div>
        <h4 className="sim-result__title">Tu proyecto estimado</h4>
        <div className="sim-result__summary">
          <div className="sim-result__row">
            <span>Tipo:</span>
            <strong>{answers[0]}</strong>
          </div>
          <div className="sim-result__row">
            <span>Tamaño:</span>
            <strong>{answers[1]}</strong>
          </div>
          <div className="sim-result__row">
            <span>Funciones:</span>
            <strong>{answers[2].join(', ') || 'Sin extras'}</strong>
          </div>
        </div>
        <p className="sim-result__note">
          Basado en tus necesidades, podemos construir una solución a medida.
          ¡Conversemos para darte un presupuesto exacto!
        </p>
        <div className="sim-result__actions">
          <a href="#contacto" className="sim-btn sim-btn--primary">
            Solicitar este proyecto
          </a>
          <button className="sim-btn sim-btn--ghost" onClick={reset}>
            Reiniciar
          </button>
        </div>
      </motion.div>
    )
  }

  const current = webSteps[step]
  const value = answers[step]

  return (
    <div className="sim-steps">
      <div className="sim-progress">
        {webSteps.map((_, i) => (
          <div key={i} className={`sim-progress__dot ${i <= step ? 'active' : ''}`} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="sim-step__label">
            <span className="sim-step__num">Paso {step + 1}</span>
            {current.label}
          </p>
          <div className="sim-options">
            {current.options.map((opt) => {
              const isSelected = current.multiple
                ? value.includes(opt)
                : value === opt
              return (
                <button
                  key={opt}
                  className={`sim-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="sim-nav">
        {step > 0 && (
          <button className="sim-btn sim-btn--ghost" onClick={() => setStep(step - 1)}>
            ← Atrás
          </button>
        )}
        <button
          className="sim-btn sim-btn--primary"
          onClick={handleNext}
          disabled={!canNext()}
        >
          {step < webSteps.length - 1 ? 'Siguiente →' : 'Ver resultado'}
        </button>
      </div>
    </div>
  )
}

/* ── Automation Simulator ───────────────────────────────────── */
const autoOptions = {
  trigger: ['Recibo un correo', 'Nuevo cliente', 'Formulario enviado'],
  action: ['Guardar datos', 'Crear registro', 'Actualizar base de datos'],
  result: ['Enviar notificación', 'Enviar correo', 'Crear tarea automática'],
}

function AutoSimulator() {
  const [selected, setSelected] = useState({ trigger: null, action: null, result: null })
  const [showResult, setShowResult] = useState(false)

  function pick(key, val) {
    setSelected({ ...selected, [key]: val })
    setShowResult(false)
  }

  const ready = selected.trigger && selected.action && selected.result

  return (
    <div className="auto-sim">
      <div className="auto-flow">
        {[
          { key: 'trigger', label: 'Cuando pasa esto', emoji: '⚡' },
          { key: 'action', label: 'Entonces hacer', emoji: '⚙️' },
          { key: 'result', label: 'Después', emoji: '📤' },
        ].map(({ key, label, emoji }, idx) => (
          <div key={key} className="auto-block">
            <div className="auto-block__header">
              <span>{emoji}</span> {label}
            </div>
            <div className="auto-block__options">
              {autoOptions[key].map((opt) => (
                <button
                  key={opt}
                  className={`sim-option ${selected[key] === opt ? 'selected' : ''}`}
                  onClick={() => pick(key, opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            {idx < 2 && <div className="auto-arrow">↓</div>}
          </div>
        ))}
      </div>

      {ready && (
        <motion.div
          className="auto-preview"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="auto-preview__flow">
            <span className="auto-chip">{selected.trigger}</span>
            <span className="auto-arrow-h">→</span>
            <span className="auto-chip">{selected.action}</span>
            <span className="auto-arrow-h">→</span>
            <span className="auto-chip auto-chip--result">{selected.result}</span>
          </div>
          <p className="auto-preview__note">
            Esta automatización puede ayudarte a ahorrar tiempo y reducir tareas manuales.
          </p>
          <a href="#contacto" className="sim-btn sim-btn--primary">
            Quiero automatizar esto
          </a>
        </motion.div>
      )}
    </div>
  )
}

/* ── App Simulator ──────────────────────────────────────────── */
const appSteps = [
  { label: '¿Para quién es la app?', options: ['Empresa', 'Clientes', 'Uso interno'] },
  { label: '¿Dónde funcionará?', options: ['Web', 'Móvil', 'Ambos'] },
  {
    label: 'Funciones principales',
    options: ['Usuarios', 'Base de datos', 'Panel administrativo'],
    multiple: true,
  },
]

const archMap = {
  Web: { frontend: 'React / Next.js', backend: 'Node.js / Python', db: 'PostgreSQL' },
  Móvil: { frontend: 'React Native', backend: 'Node.js / Firebase', db: 'Firestore' },
  Ambos: { frontend: 'React + React Native', backend: 'Node.js / REST API', db: 'PostgreSQL' },
}

function AppSimulator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ 0: null, 1: null, 2: [] })
  const [done, setDone] = useState(false)

  function handleSelect(value) {
    const current = appSteps[step]
    if (current.multiple) {
      const prev = answers[step]
      const next = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
      setAnswers({ ...answers, [step]: next })
    } else {
      setAnswers({ ...answers, [step]: value })
    }
  }

  function canNext() {
    const val = answers[step]
    if (appSteps[step].multiple) return val.length > 0
    return val !== null
  }

  function handleNext() {
    if (step < appSteps.length - 1) setStep(step + 1)
    else setDone(true)
  }

  function reset() {
    setStep(0)
    setAnswers({ 0: null, 1: null, 2: [] })
    setDone(false)
  }

  if (done) {
    const arch = archMap[answers[1]] || archMap['Web']
    return (
      <motion.div
        className="sim-result"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="sim-result__icon">🏗️</div>
        <h4 className="sim-result__title">Arquitectura sugerida</h4>
        <div className="arch-grid">
          <div className="arch-item">
            <span className="arch-icon">🖥️</span>
            <span className="arch-label">Frontend</span>
            <span className="arch-value">{arch.frontend}</span>
          </div>
          <div className="arch-item">
            <span className="arch-icon">⚙️</span>
            <span className="arch-label">Backend</span>
            <span className="arch-value">{arch.backend}</span>
          </div>
          <div className="arch-item">
            <span className="arch-icon">🗄️</span>
            <span className="arch-label">Base de datos</span>
            <span className="arch-value">{arch.db}</span>
          </div>
        </div>
        <div className="sim-result__actions">
          <a href="#contacto" className="sim-btn sim-btn--primary">
            Solicitar desarrollo de app
          </a>
          <button className="sim-btn sim-btn--ghost" onClick={reset}>
            Reiniciar
          </button>
        </div>
      </motion.div>
    )
  }

  const current = appSteps[step]
  const value = answers[step]

  return (
    <div className="sim-steps">
      <div className="sim-progress">
        {appSteps.map((_, i) => (
          <div key={i} className={`sim-progress__dot ${i <= step ? 'active' : ''}`} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="sim-step__label">
            <span className="sim-step__num">Paso {step + 1}</span>
            {current.label}
          </p>
          <div className="sim-options">
            {current.options.map((opt) => {
              const isSelected = current.multiple
                ? value.includes(opt)
                : value === opt
              return (
                <button
                  key={opt}
                  className={`sim-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="sim-nav">
        {step > 0 && (
          <button className="sim-btn sim-btn--ghost" onClick={() => setStep(step - 1)}>
            ← Atrás
          </button>
        )}
        <button
          className="sim-btn sim-btn--primary"
          onClick={handleNext}
          disabled={!canNext()}
        >
          {step < appSteps.length - 1 ? 'Siguiente →' : 'Ver arquitectura'}
        </button>
      </div>
    </div>
  )
}

/* ── Main Simulator ─────────────────────────────────────────── */
const tabs = [
  { id: 'web', label: '🌐 Página Web' },
  { id: 'auto', label: '⚡ Automatización' },
  { id: 'app', label: '📱 Aplicación' },
]

export default function Simulator() {
  const [active, setActive] = useState('web')

  return (
    <section className="simulator" id="simulador">
      <div className="container">
        <div className="simulator__header">
          <span className="section-tag">Simulador</span>
          <h2 className="section-title">Simula tu solución digital</h2>
          <p className="section-subtitle">
            Explora cómo podría ser tu proyecto. Selecciona el tipo de solución y personalízala.
          </p>
        </div>

        <div className="simulator__card">
          <div className="sim-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                className={`sim-tab ${active === tab.id ? 'active' : ''}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="sim-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {active === 'web' && <WebSimulator />}
                {active === 'auto' && <AutoSimulator />}
                {active === 'app' && <AppSimulator />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
