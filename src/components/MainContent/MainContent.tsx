import { useEffect, useMemo, useState } from "react";
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { fetchCourses } from "../../api/courses";
import { Card } from "../Card";
import { Course } from "../../types/Course";

import styles from './MainContent.module.scss';
import { filterCoursesBySearchTerm } from "../../services/filterCoursesBySearchTerm";

export const MainContent = () => {
  const [currentCards, setCurrentCards] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  useEffect(() => {
    fetchCourses()
      .then(courses => {
        setCurrentCards(courses);
      })
      .catch(error => {
        console.error("Failed to fetch courses:", error);
      });
  }, []);

  const deleteCourse = (id: number) => {
    setCurrentCards(currentCards.filter(card => card.id !== id));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setCurrentSearchTerm(searchTerm);
    setIsSearchPerformed(true);
  };

  const handleReset = () => {
    setCurrentSearchTerm('');
    setSearchTerm('');
    setIsSearchPerformed(false);
  };

  const filteredCards = useMemo(() => {
    return filterCoursesBySearchTerm(currentCards, currentSearchTerm);
  }, [currentCards, currentSearchTerm]);

  return (
    <section className="main-content">
      <h1 className={styles.title}>Мої курси</h1>

      <Row>
        <Col xs={12} sm={12} md={12} lg={4} className="order-md-2">
          <Form>
            <Form.Label>Шукати в курсах</Form.Label>

            <Row>
              <InputGroup as={Col}>
                <Form.Control
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                />

                <Button
                  variant="primary"
                  onClick={isSearchPerformed
                    ? handleReset
                    : handleSearch}
                >
                  {isSearchPerformed ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faSearch} />}
                </Button>
              </InputGroup>
            </Row>

            {!filteredCards.length && isSearchPerformed && (
              <div>Нічого не знайдено</div>
            )}
          </Form>
        </Col>

        <Col xs={12} sm={12} md={12} lg={8} className="order-md-1">
          <TransitionGroup>
            {filteredCards.map(card => (
              <CSSTransition
                key={card.id}
                timeout={500}
                classNames={{
                  enter: styles.fadeEnter,
                  enterActive: styles.fadeEnterActive,
                  exit: styles.fadeExit,
                  exitActive: styles.fadeExitActive,
                }}
              >
                <Card
                  key={card.id}
                  card={card}
                  onDelete={deleteCourse}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Col>
      </Row>

    </section>
  );
};
