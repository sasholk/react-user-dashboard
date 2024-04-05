import { UserDropdown } from "../UserDropdown";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a href="https://prometheus.org.ua/" className="navbar-brand">
          <img src="/logo.svg" alt="Prometheus" width="130" />
        </a>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">Допомога</a>
            </li>
            <li className="nav-item dropdown">
              <UserDropdown />
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Всі курси</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};
