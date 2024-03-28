import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div>
      <nav className="navBar">
        <Link to="/about" className="aboutLink">
          About
        </Link>
        <Link to="/" className="catalogLink">
          Catalog
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
