import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

export function Header(){
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
