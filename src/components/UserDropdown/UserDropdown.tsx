import { useState } from 'react';
import styles from './UserDropdown.module.scss';

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Мої курси', url: '#' },
    { name: 'Профіль', url: '#' },
    { name: 'Налаштування', url: '#' },
    { name: 'Історія замовлень', url: '#' },
    { name: 'Вийти', url: '#' },
  ];

  return (
    <div className={`dropdown ${isOpen ? 'show' : ''} ${styles.button}`}>
      <button
        className={`btn dropdown-toggle p-1 text-light`}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <img src="./user.png" alt="" className={styles.userImage} />
        user
      </button>

      <div
        className={`dropdown-menu ${isOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
      >
        {links.map(({ name, url }) => (
          <a
            key={name}
            className="dropdown-item"
            href={url}
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};
