import { NavLink, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
  name: string;
};
export function AppDrawer({ menuItems, name }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="app-drawer">
      <div className={isOpen ? 'is-open' : ''}>
        <FaBars onClick={() => setIsOpen(!isOpen)} className="menu-icon" />
        {isOpen && <h3 className="menu-heading">{name}</h3>}
        <ul className="menu-items">
          {menuItems.map((menu) => (
            <li key={menu.name} className="menu-item">
              <NavLink to={menu.path} className="menu-link">
                <img src={menu.iconUrl} className="item-icon" />
                {isOpen && menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
