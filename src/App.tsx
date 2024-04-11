import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer/Footer';

import styles from './App.module.scss';

const ResponsiveHeader = () => (
  <>
    <div className="custom-container d-none d-lg-block">
      <Header />
    </div>

    <div className="container-fluid d-lg-none">
      <Header />
    </div>
  </>
);

function App() {
  return (
    <>
      <ResponsiveHeader />

      <div className={`container my-3 ${styles.page}`}>
        <main className={styles.wrapper}>
          <MainContent />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App;
