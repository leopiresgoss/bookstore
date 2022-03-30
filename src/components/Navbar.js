import { Link } from 'react-router-dom';

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
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
