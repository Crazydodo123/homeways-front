import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Info from './routes/Info'
import Map from './routes/Map'
import Donate from './routes/Donate'
import Thanks from './routes/Thanks'
import Contact from './routes/Contact'
import Report from './components/Report'

import messageServices from './services/messages'
import userServices from './services/user'
import PlaceServices from './services/places'
import Socials from './routes/Socials'
import SignUp from './routes/SignUp'

const App = () => {

  const sendMessage = async (newMessage) => {
    try {
      await messageServices.create(newMessage)
      alert('Votre message a été envoyé.')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  const sendUser = async (newUser) => {
    try {
      await userServices.create(newUser)
      alert('Bienvenue à bord')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  const sendPlace = async (newPlace) => {
    try {
      await PlaceServices.create(newPlace)
      alert("Nouveau point d'intérêt créé")

    } catch({ response }) {
      console.log(response)
      console.log(response.data)
      alert(response.data.error)
    }
  }

  return (
    <>
      <div id="pc-part">
        <Router>
          <header>
            <nav id="navbar">
              <Link className='navlink' to='/'>
                <img id="logo-image" src="src/assets/whitelogo.png" height="30" alt="logo"/>
              </Link>  
              <ul id="navbar-links">
                <p className="opacity-mid">|</p>
                <Link className="navbar-item navbar-text" to="/map">Zones d'intérêt</Link>
                <Link className="navbar-item navbar-text" to="/socials">Médias Sociaux</Link>
                <Link className="navbar-item navbar-text" to="/donate">Dons</Link>
                <Link className="navbar-item navbar-text" to="/contact">Nous joindre</Link>
                <p className="opacity-mid">|</p>
              </ul>
              <Link to="/sign-up" id='nav-button'>
                <button id="contact-button"><span>Devenir bénévole</span></button>
              </Link>
            </nav>
          </header>
          

          <Routes>
            <Route path='/map' element={<Map />} />
            <Route path='/contact' element={<Contact sendMessage={sendMessage} /> } />
            <Route path='socials' element={<Socials /> } />
            <Route path='donate' element={<Donate />} />
            <Route path='thank-you' element={<Thanks /> } />
            <Route path='sign-up' element={<SignUp sendUser={sendUser} />} />
            <Route path='/' element={<Info />} />
          </Routes>
        </Router>
      </div>
      <Report sendPlace={sendPlace} />
    </>
    
    

  )
}

export default App
