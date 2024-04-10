import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <MainContent />
      </main>
    </div>
  )
}

export default App;
