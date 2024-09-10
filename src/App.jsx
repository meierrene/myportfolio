import Header from './components/header/Header';
import Main from './components/Main';
import Footer from './components/footer/Footer';
import '../styles/background-space.css';
import './App.css';

const App = () => {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
