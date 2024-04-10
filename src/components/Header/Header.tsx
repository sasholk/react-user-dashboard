import { UserDropdown } from "../UserDropdown/UserDropdown";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a
          href="https://prometheus.org.ua/"
          className="navbar-brand"
        >
          <img src="/logo.svg" alt="Prometheus-logo" width="200" />
        </a>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center gap-4">
            <li className="nav-item">
              <a href="/" className="nav-link">Допомога</a>
            </li>
            <li className="nav-item">
              <UserDropdown />
            </li>
            <li className="nav-item">
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
  )
};
