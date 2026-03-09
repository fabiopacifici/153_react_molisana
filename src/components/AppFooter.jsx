import molisanaLogo from '/logo.png'

export default function AppFooter() {


  const pastificio = [
    {
      id: 1,
      text: 'il pastificio',
      url: '#'
    },
    {
      id: 2,
      text: 'il pastificio',
      url: '#'
    },
    {
      id: 3,
      text: 'il pastificio',
      url: '#'
    },
    {
      id: 4,
      text: 'il pastificio',
      url: '#'
    },
    {
      id: 5,
      text: 'il pastificio',
      url: '#'
    }
  ]


  const products = [
    {
      id: 1,
      text: 'Pasta 1',
      url: '#'
    },
    {
      id: 2,
      text: 'Pasta 2',
      url: '#'
    },
    {
      id: 3,
      text: 'Pasta 3',
      url: '#'
    },
    {
      id: 4,
      text: 'il pastificio',
      url: '#'
    },
    {
      id: 5,
      text: 'il pastificio',
      url: '#'
    }
  ]

  return (

    <footer className='py-5'>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col">
            <img src={molisanaLogo} alt="" />
          </div>
          <div className="col">
            <h3 className='text-uppercase'>Pastificio</h3>
            <ul className="list-unstyled">

              {
                pastificio.map(link => (
                  <li key={link.id}>
                    <a href={link.url} className='nav-link'>{link.text}</a>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className="col">
            <h3 className='text-uppercase'>ProDOTTI</h3>
            <ul className="list-unstyled">

              {
                products.map(product => (

                  <li key={product.id}>
                    <a href={product.url} className='nav-link'>{product.text}</a>
                  </li>

                ))
              }

            </ul>
          </div>
        </div>
      </div>



    </footer>

  )
}