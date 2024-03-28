import { Link, Outlet } from 'react-router-dom';
import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`d-flex flex-column vw-100 menu-drawer ${
        isOpen ? 'is-open' : ''
      }`}>
      <nav className="navbar navbar-expand-sm navbar-dark shadow-sm">
        <div className="navbar-collapse menu-drawer">
          <FaBars onClick={handleClick} className="menu-icon" />
          <ul className="navbar-nav mr-auto menu-items">
            {menuItems.map((menu) => (
              <Menu key={menu.name} menu={menu} isOpen={isOpen} />
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

type MenuProps = {
  menu: MenuItem;
  isOpen: boolean;
};
function Menu({ menu, isOpen }: MenuProps) {
  return (
    <li key={menu.name} className="nav-item nav-link menu-item">
      <Link to={menu.path} className="menu-link">
        {isOpen ? (
          <>
            <img
              src={menu.iconUrl}
              style={{ width: '50px' }}
              className="item-icon"
            />
            {menu.name}{' '}
          </>
        ) : (
          <>
            <img src={menu.iconUrl} style={{ width: '50px' }} />
          </>
        )}
      </Link>
    </li>
  );
}
