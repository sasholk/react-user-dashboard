import { useState } from 'react';

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
    <div className={`dropdown ${isOpen ? 'show' : ''}`}>
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
        user
      </button>

      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        {links.map(({ name, url }) => (
          <a key={name} className="dropdown-item" href={url}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};