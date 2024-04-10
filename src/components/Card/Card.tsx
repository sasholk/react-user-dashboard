import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import styles from './Card.module.scss';

interface CardProps {
  card: {
    id: number,
    title: string,
    link: string,
    university: string,
    startDate: string,
  };
  onDelete: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({ card, onDelete }) => {
  const { id, title, link, university, startDate } = card;

  return (
    <article className="card mb-3">
      <div className="card-body d-flex gap-4">
        <img
          src="./public/course.png"
          alt="course-image"
          className={styles.image}
          width={254}
        />

        <div className="content">
          <div className="info">
            <h3 className={styles.cardTitle}>
              <a href={link} className="text-decoration-none text-dark">
                {title}
              </a>
            </h3>

            <p className="card-text mb-0">
              {university} -
            </p>

            <p className="card-text">{startDate}</p>
          </div>

          <div className={`d-flex gap-3 align-items-center p-1 ${styles.actions}`}>
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

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="action action-twitter" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="action action-facebook" />
            </a>

            <a
              href="https://apps.prometheus.org.ua/learning/course/course-v1:DukeUniversity+PFW101+2023_T3/home"
              className="btn btn-outline-primary"
            >
              Переглянути курс
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};