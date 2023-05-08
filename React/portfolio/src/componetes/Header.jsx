

import agu from '../assets/agu.jpg'

export const Header = () => {
  return (
    <>
        
             <header id='header'>
                    <img id='foto_header' src={agu} alt="" /> 
              </header>  

              <div className='nav'>
              <nav className="navbar navbar-light bg-light">
                <a className="link-danger" href="../pages/Contacto.jsx">Contacto</a>
              </nav>

              </div>


            <nav>
              
            </nav>

    </>
  )
}

export default Header   