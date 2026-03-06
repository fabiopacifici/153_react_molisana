
import molisanaLogo from '/logo.png'

// Relative path (based on the file position)
import reactLogo from '../assets/react.svg'

export default function AppHeader() {

  // 👇 Your js logic could live here 
  // const page_title = 'La molisana'

  // 👇 Markup jsx (quello che vedi in pagina)
  return (
    <header>
      <img src={molisanaLogo} alt="" />
      <nav>
        <a href="">Home</a>
        <a href="" className='active'>Prodotti</a>
        <a href="">Chi siamo</a>
        <a href="">Contatti</a>
      </nav>
    </header>
  )
}