import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/about">About</Link>
          <Link to="/">Catalog</Link>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
