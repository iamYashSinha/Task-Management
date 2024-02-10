// FetchedTasks.js
import React, { useState, useEffect } from 'react';
import './FetchedTask.css';

const FetchedTasks = () => {
   const [tasks, setTasks] = useState([]);
   const id = localStorage.getItem('email');
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
   }, []);

   //delete based on id
   const handleDeleteTask = async () => {
      try {
         await fetch(`http://localhost:5001/tasks/delete/tasks/${id}`, {
            method: 'DELETE',
         });
         const updatedTasks = tasks.filter((task) => task._id !== id);
         setTasks(updatedTasks);
         window.location.reload();
      }  catch (error) {
         console.log(error);
      }
   };

   const handleUpdateTask = async (currentTitle, currentDescription) => {
      try {
         const updatedTitle = prompt('Enter updated title:', currentTitle) || currentTitle;
         const updatedDescription = prompt('Enter updated description:', currentDescription) || currentDescription;
         const id = localStorage.getItem('email');
         await fetch(`http://localhost:5001/tasks/update/task/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: updatedTitle, description: updatedDescription }),
         });
         // window.location.reload();
      } catch (error) {
         console.log(error);
      }
   };

   const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.href = '/';
   }

   return (
      <div className="fetched-tasks-container">
         <h2>Fetched Tasks</h2>
         <ul className="task-list">
            {tasks.map((task) => (
               <li key={task._id} className="task-item">
                  <strong>{task.title}</strong>
                  <p>{task.description}</p>
                  <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                  <button onClick={() => handleUpdateTask(task._id)}>Update</button>
               </li>
            ))}
         </ul>
         <button style={{marginTop: '10px'}} onClick={handleLogout}>Logout</button>
      </div>
   );
};

export default FetchedTasks;
