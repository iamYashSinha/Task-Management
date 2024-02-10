import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './components/Auth/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
