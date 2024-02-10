import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Signup from './components/Auth/signup';
import {useSelector} from 'react-redux';
import AddTask from './components/Pages/AddTasks/AddTask';
import FetchTasks from './components/Pages/FetchTasks/FetchTask';


function App() {

  const isAuth = Boolean(useSelector((state) => state.token));
  console.log(isAuth);
  const Auth = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Auth ? <AddTask /> : <Navigate to='/task-management-dashboard' />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/task-management-dashboard' element={<AddTask/>} />
          <Route path ='/fetch-tasks' element={<FetchTasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
