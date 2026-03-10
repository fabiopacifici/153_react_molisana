


// Relative path (based on the file position)
//import reactLogo from '../assets/react.svg'
import AppLogo from './AppLogo'
export default function AppHeader({links}) {

  // 👇 Your js logic could live here 
  // const page_title = 'La molisana'


  // 👇 Markup jsx (quello che vedi in pagina)
  return (
    <header>
     
      <AppLogo />

      <nav>

        {links.map(link => (

          <a href={link.url} className={link.current ? 'active' : ''} key={link.id}>{link.text}</a>
        ))}

      </nav>
    </header>
  )
}