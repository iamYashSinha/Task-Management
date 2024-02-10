// TaskForm.js
import React, { useState } from 'react';
import './AddTask.css';
import CustomSnackbar from '../../Utility/Snackbar/Snackbar';
import Navbar from '../../Navbar/Navbar';

const AddTask = ({ onSubmit }) => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [showSnackbar, setShowSnackbar] = useState(false);

   const handleTitleChange = (e) => {
      setTitle(e.target.value);
   };

   const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
   };

   const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setShowSnackbar(false);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch('http://localhost:5001/tasks/add/tasks', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
         });

         const data = await response.json();
         console.log(data);

         // Show Material-UI Snackbar after form submission
         setShowSnackbar(true);
         setTitle('');
         setDescription('');

      } catch (error) {
         console.error('Error creating task:', error);
      }
   };

   const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.href = '/';
   }

   return (
      <>
      
      <div>
         <h2>Add Task</h2>
         <form onSubmit={handleSubmit}>
            <label>
               Title:
               <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <br />
            <label>
               Description:
               <textarea value={description} onChange={handleDescriptionChange} />
            </label>
            <br />
            <button type="submit">Add Task</button>
            <button style={{marginTop: '10px'}} onClick={handleLogout}>Logout</button>
         </form>

         {/* Material-UI Snackbar component */}
         <CustomSnackbar open={showSnackbar} message="Task added successfully!" onClose={handleCloseSnackbar} />
      </div>
      </>
      
   );
};

export default AddTask;
