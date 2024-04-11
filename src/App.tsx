import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer/Footer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={`container ${styles.page}`}>
      <Header />

      <main className={styles.wrapper}>
        <MainContent />
      </main>

      <Footer />
    </div>
  )
}

export default App;
