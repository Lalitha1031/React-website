import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUS from './pages/AboutUS';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>} ></Route>
        <Route path='/menu'element={<Menu/>} ></Route>
        <Route path='/AboutUS'element={<AboutUS/>} ></Route>
        <Route path='/Contact'element={<Contact/>} ></Route>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
