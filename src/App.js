import { Routes, Route } from 'react-router-dom';
import Bookstore from './pages/Bookstore';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Bookstore />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
