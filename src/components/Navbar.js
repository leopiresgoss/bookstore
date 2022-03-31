import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      title: 'Categories',
    },
  ];
  return (
    <nav>
      <ul className="nav-links">
        <h1 className="logo">Bookstore CMS</h1>
        <ul className="links">
          {links.map((link) => (
            <li key={link.id} className={`link-${link.title.toLowerCase()}`}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="login">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
