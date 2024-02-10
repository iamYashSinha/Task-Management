// FetchedTasks.js
import React, { useState, useEffect } from 'react';
import './FetchedTask.css';

const FetchedTasks = () => {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      const fetchTasksByEmail = async () => {
         const email = localStorage.getItem('email');
         try {
            const response = await fetch('http://localhost:5001/tasks/fetchtasks/email', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({ email }),
            });
            const fetchedTasks = await response.json();
            setTasks(fetchedTasks);
         } catch (error) {
            console.log(error);
         }
      };

      fetchTasksByEmail();
   }, []); // Run only once on component mount

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
      </div>
   );
};

export default FetchedTasks;
