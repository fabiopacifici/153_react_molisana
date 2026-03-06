import molisanaLogo from '/logo.png'

export default function AppFooter() {


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
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className='text-uppercase'>ProDOTTI</h3>
            <ul className="list-unstyled">
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
              <li>
                <a href="" className='nav-link'>Il pastificio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </footer>

  )
}