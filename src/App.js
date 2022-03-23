import { Routes, Route } from 'react-router-dom';
import Bookstore from './pages/Bookstore';
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Bookstore />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
