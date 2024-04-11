import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onDelete: (id: number) => void;
  id: number;
}

export const CardDropdown: React.FC<Props> = ({ onDelete, id }) => (
  <Dropdown>
    <Dropdown.Toggle variant="outline" id="dropdown-basic">
      <FontAwesomeIcon icon={faCog} />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item
        href="#/action-1"
        onClick={() => onDelete(id)}
      >
        Відписатися від курсу
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">
        Налаштування електронної пошти
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)
