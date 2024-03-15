import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './views/Home';
import { About } from './views/About';

function App() {


  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
