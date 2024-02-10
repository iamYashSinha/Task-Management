import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Signup from './components/Auth/signup';
import {useSelector} from 'react-redux';
import Dashboard from './components/Pages/Dashboard';


function App() {

  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/task-management-dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
