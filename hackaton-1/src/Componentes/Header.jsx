import { Link } from 'react-router-dom';
import Logo from "../images/LOGO.png"

function Header() {
  return (
    <header>
      <div>
      <img className="my-logo" src={Logo} alt="Mi imagen" />
      </div>
      <nav>
        <ul className="nav-datos">
          <li>
          <Link className="nav-link" to="/datos">
              DATOS
            </Link>
         <Link className="nav-link" to="/inicio">
              HOME
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;