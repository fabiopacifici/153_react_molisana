
import molisanaLogo from '/logo.png'

// Relative path (based on the file position)
import reactLogo from '../assets/react.svg'

export default function AppHeader() {

  // 👇 Your js logic could live here 
  // const page_title = 'La molisana'

  const links = [
    {
      id: 1,
      text: 'Home',
      url: '/home',
      current: false
    },
    {
      id: 2,
      text: 'Prodotti',
      url: '/prodotti',
      current: true
    },
    {
      id: 3,
      text: 'Chi siamo',
      url: '#',
      current: false
    },
    {
      id: 4,
      text: 'Contatti',
      url: '#',
      current: false
    }
  ]

  // 👇 Markup jsx (quello che vedi in pagina)
  return (
    <header>
      <img src={molisanaLogo} alt="" />

      <nav>

        {links.map(link => (

          <a href={link.url} className={link.current ? 'active' : ''} key={link.id}>{link.text}</a>
        ))}

      </nav>
    </header>
  )
}