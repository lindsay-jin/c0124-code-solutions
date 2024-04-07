import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div>
      <div className="navBar">
        <nav>
          <ul>
            <Link to="/about" className="aboutLink">
              About
            </Link>
            <Link to="/" className="catalogLink">
              Catalog
            </Link>
          </ul>
        </nav>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
