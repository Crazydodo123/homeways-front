import instagram from '../assets/instagram.png'
import discord from '../assets/discord.png'
import github from '../assets/github.png'

const Socials = () => {

  return (
    <div id="socials">
      <h2 className="subheader" id="socials-title">Rejoignez-nous sur nos réseaux sociaux</h2>
      <section id="sl">
      <a 
        href="https://www.instagram.com/ganymedeshouse/"
        target="_blank">
        <img src={instagram} className="logo" />
      </a>
      <a
        href="https://discord.gg/DqACGw88md"
        target="_blank">
        <img src={discord} className="logo" id="discord" />
      </a>
      <a 
        href="https://github.com/Crazydodo123/brebeuf-hx"
        target="_blank">
        <img src={github} className="logo" />
      
      </a>
        
      </section>
    </div>
  )
}

export default Socials