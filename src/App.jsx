import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { db } from './data/db'
import { studyDb } from './data/studyDb.js'
import './App.css'
import Estudio from './components/Estudios.jsx'
import Experience from './components/Experience.jsx'

const URL_CV = '/CV_Abraraw.pdf'
function App() {

  const [data] = useState(db)
  const [studyData] = useState(studyDb)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement("a")
    aTag.href = url;
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => { //  palanca/button que si es verdaad deja mostrar y al pulsar
    setMenuOpen(!menuOpen)
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
  }
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
  }

  const toggletheme = () => {
    setIsDarkMode((currentMode) => {
      const nextMode = !currentMode
      nextMode ? setDarkMode() : setLightMode()
      return nextMode
    })
  }

  const handleLinkClick = (event, elementId) => {
    event.preventDefault()
    setMenuOpen(false)

    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const offsetTop = element.offsetTop - 240 // Mantenemos tu offset de -240
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }, 40) // Mantenemos tu duration de 40
  }


  return (
    <>
      <header className='header'>
        <div className='container logo-nav-container'>
          <a href="#" className='logo'>AbrarawCV</a>
          <span className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='fa-bars' />
          </span>
          <nav className="navigation">
            <ul className={menuOpen ? 'show' : ''}>
              <li>
                <a href="#inicio" onClick={(event) => handleLinkClick(event, 'inicio')}>
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(event) => handleLinkClick(event, 'experience')}>
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#estudios" onClick={(event) => handleLinkClick(event, 'estudios')}>
                  Estudios
                </a>
              </li>
              <li>
                <a href="#contacta" onClick={(event) => handleLinkClick(event, 'contacta')}>
                  Contacto
                </a>
              </li>
              <label className="switch" aria-label="Cambiar tema claro u oscuro">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggletheme}
                />
                <span className="slider" aria-hidden="true">
                  <span className="theme-icon theme-icon-sun"></span>
                  <span className="theme-icon theme-icon-moon"></span>
                </span>
              </label>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main" id='inicio'>
        <div className="container">
          <div className="aboutme">
            <img src="/img/abraraw.png" alt="Avatar" className='img-me' />
            <section className='first-presentation'>
              <h1>Abraraw Farré</h1>
              <h4>Backend Developer · .NET</h4>
              <h5>4 años en el sector IT · 2 años y medio en desarrollo .NET</h5>
              <a onClick={() => { downloadFileAtURL(URL_CV) }} className="fancy" download="documents">
                <span className="top-key"></span>
                <span className="text">Descargar CV</span>
                <span className="bottom-key-2"></span>
              </a>
            </section>
          </div>

          <h1>Sobre mí</h1>


          <div className="text-box">
            <p>Backend Developer especializado en C# y .NET, con experiencia en el
              desarrollo, mantenimiento y evolución de aplicaciones, APIs e integraciones.
              Trabajo aplicando principios SOLID, inyección de dependencias y buenas
              prácticas para crear soluciones robustas y mantenibles. Me adapto con
              facilidad a equipos multidisciplinares y mantengo un firme compromiso con
              la calidad del software y el aprendizaje continuo.</p>
          </div>

          <h1>Experiencia profesional</h1>


          <div className="timeline">

            {data.map((experience) => (

              <Experience
                key={experience.id}
                experience={experience}
              />
            ))}

          </div>

          <h1>Tecnologías</h1>

          <div className="text-box">
            <p><strong>Backend:</strong> C#, .NET Core, .NET Framework, REST APIs y microservicios.</p>
            <p><strong>Bases de datos:</strong> SQL Server, Oracle, MySQL y MongoDB.</p>
            <p><strong>Arquitectura y buenas prácticas:</strong> SOLID, POO, inyección de dependencias, patrones de diseño y arquitectura hexagonal.</p>
            <p><strong>Frontend:</strong> JavaScript, React, Vue, HTML5, CSS3 y Bootstrap.</p>
            <p><strong>DevOps y colaboración:</strong> Git, Azure DevOps, Bitbucket, Jira, Confluence y CI/CD.</p>
          </div>

          <h1>Estudios</h1>


          <div className="timeline">

            {studyData.map((estudio) => (

              <Estudio
                key={estudio.id}
                estudio={estudio}
              />
            ))}

          </div>

          <h1 id="contacta">Contacto e idiomas</h1>

          <div className="text-box">
            <p><strong>Ubicación:</strong> Barcelona, España</p>
            <p><strong>Email:</strong> <a href="mailto:abraraw4@gmail.com">abraraw4@gmail.com</a></p>
            <p><strong>Idiomas:</strong> español y catalán nativos; inglés medio-alto.</p>
          </div>

        </div>

      </main>

      <footer className='footer'>
        <div className="container">
          <p>Página diseñada por @Abrishedev</p>
        </div>
      </footer>

    </>
  )
}

export default App
