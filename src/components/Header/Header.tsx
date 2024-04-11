import { useState } from 'react';
import { UserDropdown } from "../UserDropdown/UserDropdown";
import { links } from './links';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a
          href="https://prometheus.org.ua/"
          className="navbar-brand"
        >
          <img src="/logo.svg" alt="Prometheus-logo" width="200" />
        </a>

        <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav align-items-center gap-4">
            <li className="nav-item d-none d-lg-block">
              <a href="/" className="nav-link">Допомога</a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <UserDropdown links={links} />
            </li>

            <li className="nav-item d-lg-none">
              {links.map(({ name, url }) => (
                <a key={name} href={url} className="nav-link">{name}</a>
              ))}
            </li>

            <li className="nav-item d-none d-lg-block">
              <a
                href="/"
                className={`btn btn-primary`}
                role="button"
                style={{ padding: '12px 16px' }}
              >
                Всі курси
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};