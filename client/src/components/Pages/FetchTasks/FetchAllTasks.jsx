// FetchedTasks.js
import React, { useState, useEffect } from 'react';
import './FetchedTask.css';
import Button from '@mui/material/Button';

const FetchAllTasks = () => {
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchTasksByEmail = async () => {
         const email = localStorage.getItem('email');
         try {
            const response = await fetch('http://localhost:5001/tasks/users/tasks', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
               },
            });

            if (!response.ok) {
               throw new Error('Failed to fetch tasks');
            }

            const fetchedTasks = await response.json();
            setTasks(fetchedTasks);
         } catch (error) {
            setError(error.message);
         } finally {
            setLoading(false);
         }
      };

      fetchTasksByEmail();
   }, []); // Run only once on component mount

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   const handleNavigate = () => {
        window.location.href = '/task-management-dashboard';
     };

   return (
      <div className="fetched-tasks-container">
         <h2>Fetched Tasks</h2>
         <ul className="task-list">
            {tasks.map((task) => (
               <li key={task._id} className="task-item">
                  <strong>{task.title}</strong>
                  <p>{task.description}</p>
               </li>
            ))}
         </ul>
         <Button variant="text"  onClick={handleNavigate}>Go To Dashboard</Button>
      </div>
   );
};

export default FetchAllTasks;

