import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Signup from './components/Auth/signup';
import {useSelector} from 'react-redux';
import AddTask from './components/Pages/AddTasks/AddTask';
import FetchTasks from './components/Pages/FetchTasks/FetchTask';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import FetchAllTasks from './components/Pages/FetchTasks/FetchAllTasks';


function App() {

  const isAuth = Boolean(useSelector((state) => state.token));
  console.log(isAuth);
  const Auth = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/task-management-dashboard' element={Auth ? <Dashboard /> : <Navigate to='/' />} />

          <Route path ='/fetch-tasks/:email' element={Auth ? <FetchTasks /> : <Navigate to='/' />} />
          <Route path ='/fetch-tasks' element={Auth ? <FetchAllTasks /> : <Navigate to='/' />} />
          <Route path ='/add-task' element={Auth ? <AddTask /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
