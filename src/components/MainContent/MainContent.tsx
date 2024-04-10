import { useState } from "react";
import { Card } from "../Card";

import styles from './MainContent.module.scss';

const cards = [
  {
    id: 1,
    title: 'Основи програмування з HTML, CSS та JavaScript',
    link: 'https://apps.prometheus.org.ua/learning/course/course-v1:DukeUniversity+PFW101+2023_T3/home',
    university: 'Duke University',
    startDate: 'Розпочався - 11 груд 2023 р. 14:00 EET'
  },
  {
    id: 2,
    title: 'Основи програмування з Python',
    link: 'https://apps.prometheus.org.ua/learning/course/course-v1:MITx+6.00.1x+2T2023/home',
    university: 'MIT',
    startDate: 'Розпочався - 10 груд 2023 р. 14:00 EET'
  },
  {
    id: 3,
    title: 'Основи програмування з Java',
    link: 'https://apps.prometheus.org.ua/learning/course/course-v1:HarvardX+CS50+2023_T3/home',
    university: 'Harvard University',
    startDate: 'Розпочався - 9 груд 2023 р. 14:00 EET'
  }
];

export const MainContent = () => {
  const [currentCards, setCurrentCards] = useState(cards);

  const deleteCourse = (id: number) => {
    setCurrentCards(currentCards.filter(card => card.id !== id));
  };

  return (
    <section className="main-content">
      <h1 className={styles.title}>Мої курси</h1>

      <div className={styles.courses}>
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={deleteCourse} />
        ))}
      </div>
    </section>
  )
}