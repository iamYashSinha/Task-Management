// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import './Dashboard.css';


const Dashboard = () => {
    const FetchTasksByEmail = async () => {
        const email = localStorage.getItem('email');
        try {
            const response = await fetch('http://localhost:5001/tasks/fetchtasks/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const tasks = await response.json();
            console.log(tasks);
        } catch (error) {
            console.log(error);
        }
    }
    const email = localStorage.getItem('email');
   return (
      <div className="dashboard-container">
         <h2>Welcome to Your Dashboard</h2>
         <div className="dashboard-options">
            <Link to="/add-task" className="dashboard-option">
               <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleIcon />}
               >
                  Add Task
               </Button>
            </Link>
            <Link to={`/fetch-tasks/${email}`} className="dashboard-option">
               <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<ListAltIcon />}
                  onClick={FetchTasksByEmail}
               >
                  Fetch Tasks
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default Dashboard;
