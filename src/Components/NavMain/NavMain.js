
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './NavMain.css';
import BeansBlack from '../../images/CofeeBeans/Beans-black.png'
import BeansWhite from '../../images/CofeeBeans/Beans-white.png'


function NavMain ({color , increase, data}) {
  const imgColor = (color === 'black') ? BeansBlack : BeansWhite;
  let classNames = (increase === 'center') ? 'collapse navbar-collapse justify-content-center' : 'collapse navbar-collapse justify-content-start';

  return (
    <Container className="container-fluid"> 
      <Row>
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className='container-fluid'>
                <div className={classNames} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/"><img src={imgColor} alt="Coffe beans" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Coffee house</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/coffee">Our coffee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">For your pleasure</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
          
      </Row>
    </Container>
  );
}

export default NavMain;