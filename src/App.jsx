import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './App.css'


function App() {
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

  const toggletheme = (e) => {
    e.target.checked ? setDarkMode() : setLightMode()
  }


  return (
    <>
      <header className='header'>
        <div className='container logo-nav-container'>
          <a href="#" className='logo'>LOGO</a>
          <span className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='fa-bars' />
          </span>
          <nav className="navigation">
            <ul className={menuOpen ? 'show' : ''}>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Sobre mi</a></li>
              <li><a href="#">Contacta</a></li>
              <li><a href="#">Proyectos</a></li>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={toggletheme}

                />
                <span class="slider"></span>
              </label>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">

          <div className="aboutme">
            <section className='img-me'>

            </section>

            <img src="../public/img/abraraw.png" alt="Avatar" className='img-me' />

            <section className='first-presentation'>
              <h1>Abraraw Farre</h1>
              <h4>Full stack </h4>
            </section>
          </div>

          <h1>Experiencia</h1>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus
            ad amet fuga aliquam quasi sed?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus
            ad amet fuga aliquam quasi sed?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus

            <h1>HABILIDADES</h1>


            ad amet fuga aliquam quasi sed?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus
            ad amet fuga aliquam quasi sed?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus
            ad amet fuga aliquam quasi sed?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus
            ad amet fuga aliquam quasi sed?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quo molestiae impedit, blanditiis, nemo qui sunt magnam
            non fugit eaque harum totam? Nostrum aspernatur minus
            ad amet fuga aliquam quasi sed?</p>

        </div>

      </main>

      <footer className='footer'>
        <div className="container">
          <p>pagina diseñada por @Abrishedev</p>
        </div>
      </footer>

    </>
  )
}

export default App
